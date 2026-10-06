// src/features/uploadMedia/hooks/useUploadMedia.js
import { useState } from "react";
import { toast } from "react-toastify";
import API from "../../../utils/api";
import { debug } from "../../../utils/debug";

const useUploadMedia = (onUploadSuccess) => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  // Create preview when a file is selected
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    debug.log("UploadMedia: file selected:", selected.name);
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setUploadedUrl("");
  };

  // File upload handler
  const handleUpload = async () => {
    if (!file) {
      toast.warning("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);

    setUploading(true);
    debug.log("UploadMedia: uploading started...");

    try {
      const res = await API.post("/users/upload-file", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploadedUrl(res.data.url);
      debug.log("UploadMedia: upload successful");
      toast.success("Upload successful!");
      setDescription("");
      if (onUploadSuccess) {
        onUploadSuccess();
      }
    } catch (err) {
      debug.error(
        "UploadMedia: upload failed:",
        err.response?.data || err.message
      );
      toast.error("Upload failed!");
    } finally {
      setUploading(false);
      debug.log("UploadMedia: upload finished");
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