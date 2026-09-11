// useRegister Hook - Handles registration logic with validation and toast
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../utils/api";

const useRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("📤 Register Data:", data);
    try {
      const res = await API.post("/users/register", data);
      localStorage.setItem("token", res.data.token);
      console.log("Saved Token (Register):", localStorage.getItem("token"));
      toast.success("Registration Successful!");
      navigate("/profile");
    } catch (err) {
      console.error("Registration Error:", err);
      toast.error("Registration Failed!");
    }
  };

  return { register, handleSubmit, onSubmit, errors };
};

export default useRegister;