import API from "../../../utils/api";

const useUpdateProfile = (
  user, original, verified, currentPassword,
  setOriginal, setUser, setSuccess, setError,
  setVerified, setCurrentPassword, setUpdating
) => {
  const updateProfile = async () => {
    if (!verified) {
      setError("প্রথমে পাসওয়ার্ড যাচাই করুন!");
      return;
    }

    const changed =
      user.name !== original.name ||
      user.email !== original.email ||
      user.newPassword;

    if (!changed) {
      setError("কোনো ডাটা পরিবর্তন করা হয়নি!");
      return;
    }

    setUpdating(true);
    setError("");
    setSuccess("");

    try {
      await API.put("/users/update", {
        name: user.name,
        email: user.email,
        password: currentPassword,
        ...(user.newPassword && { newPassword: user.newPassword }),
      });

      setOriginal({ name: user.name, email: user.email });
      setUser((prev) => ({ ...prev, newPassword: "" }));

      setSuccess("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
      setVerified(false);
      setCurrentPassword("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          (err.response?.status === 401
            ? "পাসওয়ার্ড সঠিক নয়!"
            : "আপডেট ব্যর্থ হয়েছে!")
      );
    } finally {
      setUpdating(false);
    }
  };

  return updateProfile;
};

export default useUpdateProfile;