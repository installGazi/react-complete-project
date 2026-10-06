
import { useEffect } from "react";
import API from "../../../utils/api";
import { debug } from "../../../utils/debug";

const useProfileData = (
  token,
  setUser,
  setOriginal,
  setProfilePic,
  setError,
  setLoading
) => {
  useEffect(() => {
    if (!token || token === "false") {
      debug.warn("useProfileData: No token found");
      setError("Not logged in!");
      setLoading(false);
      return;
    }

    debug.log("useProfileData: Fetching profile...");

    API.get("/users/protected")
      .then((res) => {
        const data = res.data.user || res.data;
        debug.log("useProfileData: Profile loaded:", data);

        setUser({
          name: data.name || "",
          email: data.email || "",
          password: "",
          newPassword: "",
        });
        setOriginal({ name: data.name || "", email: data.email || "" });
        setProfilePic(data.profilePic || "");
      })
      .catch((err) => {
        debug.error(
          "useProfileData: Failed to load profile:",
          err.response?.data || err.message
        );
        setError(err.response?.data?.message || "Failed to load profile!");
      })
      .finally(() => {
        debug.log("useProfileData: Loading finished");
        setLoading(false);
      });
  }, [token, setUser, setOriginal, setProfilePic, setError, setLoading]);
};

export default useProfileData;