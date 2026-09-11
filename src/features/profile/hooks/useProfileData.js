import { useEffect } from "react";
import API from "../../../utils/api";

const useProfileData = (token, setUser, setOriginal, setProfilePic, setError, setLoading) => {
  useEffect(() => {
    if (!token || token === "false") {
      setError("লগইন করা নেই!");
      setLoading(false);
      return;
    }

    API
      .get("/users/protected")
      .then((res) => {
        const data = res.data.user || res.data;
        setUser({
          name: data.name || "",
          email: data.email || "",
          password: "",
          newPassword: "",
        });
        setOriginal({ name: data.name || "", email: data.email || "" });
        setProfilePic(data.profilePic || "");
      })
      .catch((err) =>
        setError(err.response?.data?.message || "প্রোফাইল লোড করা যাচ্ছে না!")
      )
      .finally(() => setLoading(false));
  }, [token, setUser, setOriginal, setProfilePic, setError, setLoading]);
};

export default useProfileData;