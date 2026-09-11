// useLogin Hook - Handles login logic with validation and toast
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../utils/api";

const useLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("📤 Login Data:", data);
    try {
      const res = await API.post("/users/login", data);
      localStorage.setItem("token", res.data.token);
      console.log("Saved Token (Login):", localStorage.getItem("token"));
      toast.success("Login Successful!");
      navigate("/profile");
    } catch (err) {
      console.error("Login Error:", err);
      toast.error("Invalid email or password!");
    }
  };

  return { register, handleSubmit, onSubmit, errors };
};

export default useLogin;