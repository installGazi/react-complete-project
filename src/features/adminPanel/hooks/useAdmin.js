import { useState, useEffect } from "react";
import API from "../../../utils/api";

const useAdmin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const blockUser = async (id) => {
    try {
      await API.put(`/users/block/${id}`, { action: "block" });
      setUsers(users.map(u => u._id === id ? { ...u, isBlocked: true } : u));
    } catch (err) {
      console.error("Block error:", err);
      setError(err.response?.data?.message || "ব্লক করতে সমস্যা!");
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("ইউজারটি স্থায়ীভাবে মুছে ফেলতে চান?")) return;
    try {
      await API.delete(`/users/delete/${id}`);
      setUsers(users.filter(u => u._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      setError(err.response?.data?.message || "ডিলিট করতে সমস্যা!");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      console.log("🔵 API কল শুরু");
      try {
        const res = await API.get("/users/all");
        console.log("✅ API রেসপন্স:", res);
        setUsers(res.data.users || []);
      } catch (err) {
        console.error("❌ API Error:", err);
        setError(err.response?.data?.message || "ইউজার লোড করতে সমস্যা!");
      } finally {
        setLoading(false);
        console.log("🔴 লোডিং শেষ");
      }
    };
    fetchUsers();
  }, []);

  return { users, loading, error, blockUser, deleteUser };
};

export default useAdmin;