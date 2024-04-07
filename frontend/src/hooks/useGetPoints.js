import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const useGetPoints = () => {
  const [loading, setLoading] = useState(false);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const getPoints = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:4000/api/points/getPoints");
        const data = await res.json();
        if (data.error) throw new Error(data.error);

        setPoints(data);
        console.log(points);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPoints();
  }, []);

  return { loading, points };
};

export default useGetPoints;
