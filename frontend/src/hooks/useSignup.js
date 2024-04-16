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
    school, // Change 'Profile' to 'profilePic'
    profilePic,
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
      const pictureData = await uploadProfilePicture(profilePic);
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          password,
          confirmPassword,
          profilePic: pictureData.url,
          email,
          standard,
          school,
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

  const uploadProfilePicture = async (file) => {
    try {
      const formData = new FormData();
      formData.append("my_file", file);

      const res = await fetch("http://localhost:4000/api/auth/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      return data;
    } catch (error) {
      throw new Error("Error uploading profile picture");
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
