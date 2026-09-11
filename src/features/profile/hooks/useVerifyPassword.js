import API from "../../../utils/api";

const useVerifyPassword = (
  user, setVerified, setSuccess, setError, setCurrentPassword, setUser, setVerifying
) => {
  const verifyPassword = async () => {
    if (!user.password) {
      setError("পাসওয়ার্ড দিন!");
      return;
    }

    setVerifying(true);
    setError("");
    setSuccess("");

    try {
      const res = await API.post("/users/verify-password", {
        password: user.password,
      });

      if (res.data?.success || res.data?.valid) {
        setVerified(true);
        setSuccess("পাসওয়ার্ড সঠিক!");
        setCurrentPassword(user.password);
        setUser((prev) => ({ ...prev, password: "" }));
      } else {
        setError("পাসওয়ার্ড সঠিক নয়!");
        setVerified(false);
      }
    } catch (err) {
      setError(err.response?.data?.message || "পাসওয়ার্ড সঠিক নয়!");
      setVerified(false);
    } finally {
      setVerifying(false);
    }
  };

  return verifyPassword;
};

export default useVerifyPassword;