// useUploadMedia Hook - Handles file upload with toast notifications
import { useState } from "react";
import { toast } from "react-toastify";
import API from "../../../utils/api";

const useUploadMedia = (onUploadSuccess) => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setUploadedUrl("");
  };

  const handleUpload = async () => {
    if (!file) {
      toast.warning("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);
    setUploading(true);

    try {
      const res = await API.post("/users/upload-file", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploadedUrl(res.data.url);
      toast.success("Upload successful!");
      setDescription("");
      if (onUploadSuccess) {
        onUploadSuccess();
      }
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return {
    file,
    description,
    preview,
    uploading,
    uploadedUrl,
    handleFileChange,
    handleUpload,
    setDescription,
  };
};

export default useUploadMedia;