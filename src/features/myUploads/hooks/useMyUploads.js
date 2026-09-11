// useMyUploads Hook - Handles fetching and deleting user uploads with toast
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import API from "../../../utils/api";

const useMyUploads = (refreshTrigger) => {
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const fetchUploads = async () => {
    try {
      const res = await API.get("/users/my-uploads");
      console.log("📥 MyUploads - Fetching data:", res.data.uploads);
      setUploads(res.data.uploads || []);
    } catch (err) {
      console.error("❌ Failed to load uploads:", err);
      toast.error("Failed to load uploads!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchUploads();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [refreshTrigger]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;
    setDeletingId(id);
    try {
      await API.delete(`/users/upload/${id}`);
      setUploads((prev) => prev.filter((item) => item._id !== id));
      toast.success("File deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Failed to delete file!");
    } finally {
      setDeletingId(null);
    }
  };

  return { uploads, loading, deletingId, handleDelete };
};

export default useMyUploads;