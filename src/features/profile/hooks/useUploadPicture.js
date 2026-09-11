// useUploadPicture Hook - Handles profile picture upload with toast
import { toast } from "react-toastify";
import API from "../../../utils/api";

const useUploadPicture = (setProfilePic, setUploadingPic) => {
  const uploadProfilePicture = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setUploadingPic(true);

    try {
      const res = await API.post("/users/upload-profile-pic", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProfilePic(res.data.profilePic);
      toast.success("Profile picture updated successfully!");
    } catch (err) {
      console.error("Profile picture upload error:", err);
      toast.error("Upload failed!");
    } finally {
      setUploadingPic(false);
    }
  };

  return uploadProfilePicture;
};

export default useUploadPicture;