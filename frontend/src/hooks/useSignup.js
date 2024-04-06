import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    name,
    username,
    email,
    standard,
    school,
    profilePic, // Change 'Profile' to 'profilePic'
    password,
    confirmPassword,
  }) => {
    const success = handleInputErrors({
      name,
      username,
      password,
      confirmPassword,
      email,
      standard,
      school,
    });
    console.log("signup");
    if (!success) toast.error("Please fill in all fields");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          username,
          password,
          confirmPassword,
          email,
          standard,
          school,
          profilePic,
        }), // Pass FormData object directly
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      //
      localStorage.setItem("edutainment-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};
export default useSignup;

function handleInputErrors({
  name,
  username,
  password,
  confirmPassword,
  email,
  standard,
  school,
}) {
  console.log("handleInputErrors");
  if (
    !name ||
    !username ||
    !password ||
    !confirmPassword ||
    !email ||
    !standard ||
    !school
  ) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  return true;
}
