
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import API from "../../../utils/api";
import { debug } from "../../../utils/debug";

const useMyUploads = (refreshTrigger) => {
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // Fetch user uploads
  const fetchUploads = async () => {
    debug.log("MyUploads: fetching uploads...");
    try {
      const res = await API.get("/users/my-uploads");
      debug.log(
        `MyUploads: ${res.data.uploads?.length || 0} uploads loaded`
      );
      setUploads(res.data.uploads || []);
    } catch (err) {
      debug.error("MyUploads: fetch failed:", err.response?.data || err.message);
      toast.error("Failed to load uploads!");
    } finally {
      setLoading(false);
    }
  };

  // Refetch when refreshTrigger changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchUploads();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [refreshTrigger]);

  // Delete a single upload
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;
    setDeletingId(id);
    debug.log("MyUploads: deleting upload:", id);
    try {
      await API.delete(`/users/upload/${id}`);
      setUploads((prev) => prev.filter((item) => item._id !== id));
      debug.log("MyUploads: upload deleted:", id);
      toast.success("File deleted successfully!");
    } catch (err) {
      debug.error("MyUploads: delete failed:", err.response?.data || err.message);
      toast.error("Failed to delete file!");
    } finally {
      setDeletingId(null);
    }
  };

  return { uploads, loading, deletingId, handleDelete };
};

export default useMyUploads;