
import { useState, useEffect } from "react";
import API from "../../../utils/api";
import { debug } from "../../../utils/debug";

const useAdmin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Block a user
  const blockUser = async (id) => {
    debug.log("Blocking user:", id);
    try {
      await API.put(`/users/block/${id}`, { action: "block" });
      setUsers((prev) =>
        prev.map((u) => (u._id === id ? { ...u, isBlocked: true } : u))
      );
      debug.log("User blocked:", id);
    } catch (err) {
      debug.error("Block error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to block user!");
    }
  };

  // Delete a user
  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to permanently delete this user?")) return;
    debug.log("Deleting user:", id);
    try {
      await API.delete(`/users/delete/${id}`);
      setUsers((prev) => prev.filter((u) => u._id !== id));
      debug.log("User deleted:", id);
    } catch (err) {
      debug.error("Delete error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to delete user!");
    }
  };

  // Fetch all users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      debug.log("Admin: fetching all users...");
      try {
        const res = await API.get("/users/all");
        debug.log(`Admin: ${res.data.users?.length || 0} users loaded`);
        setUsers(res.data.users || []);
      } catch (err) {
        debug.error("Admin API error:", err.response?.data || err.message);
        setError(err.response?.data?.message || "Failed to load users!");
      } finally {
        setLoading(false);
        debug.log("Admin: loading finished");
      }
    };
    fetchUsers();
  }, []);

  return { users, loading, error, blockUser, deleteUser };
};

export default useAdmin;