// hooks/useUpdatePoints.js
import { useState } from "react";

const useUpdatePoints = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updatePoints = async (userId, points) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/points/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, points }),
      });

      if (!response.ok) {
        throw new Error("Failed to update points");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error updating points:", error.message);
      setError("Failed to update points");
      setLoading(false);
    }
  };

  return { loading, error, updatePoints };
};

export default useUpdatePoints;
