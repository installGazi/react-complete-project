import { useState } from "react";
import checkToken from "../../../utils/checkToken";
import useProfileData from "./useProfileData";
import useFormHandler from "./useFormHandler";
import useUploadPicture from "./useUploadPicture";
import useVerifyPassword from "./useVerifyPassword";
import useUpdateProfile from "./useUpdateProfile";

const useProfile = () => {
  const token = checkToken();

  const [loading, setLoading] = useState(true);
  const [profilePic, setProfilePic] = useState("");
  const [uploadingPic, setUploadingPic] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState({ name: "", email: "", password: "", newPassword: "" });
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [original, setOriginal] = useState({ name: "", email: "" });
  const [currentPassword, setCurrentPassword] = useState("");

  useProfileData(token, setUser, setOriginal, setProfilePic, setError, setLoading);

  const handleChange = useFormHandler(setUser);
  const uploadProfilePicture = useUploadPicture(setProfilePic, setUploadingPic);
  const verifyPassword = useVerifyPassword(
    user,
    setVerified,
    setSuccess,
    setError,
    setCurrentPassword,
    setUser,
    setVerifying
  );
  const updateProfile = useUpdateProfile(
    user,
    original,
    verified,
    currentPassword,
    setOriginal,
    setUser,
    setSuccess,
    setError,
    setVerified,
    setCurrentPassword,
    setUpdating
  );

  const cancelVerification = () => {
    setVerified(false);
    setError("");
    setSuccess("");
    setCurrentPassword("");
  };

  return {
    loading,
    profilePic,
    uploadingPic,
    error,
    success,
    user,
    verifying,
    verified,
    updating,
    handleChange,
    uploadProfilePicture,
    verifyPassword,
    updateProfile,
    cancelVerification,
  };
};

export default useProfile;