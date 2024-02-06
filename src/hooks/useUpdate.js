import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useUpdate = (updateUrl) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleUpdate = async (updateData) => {//functon to update data
    try {
      setLoading(true);
      const response = await axios.put(updateUrl, updateData);
      setLoading(false);
      navigate("/students")
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return [ handleUpdate, loading, error ]; 
};

export default useUpdate;
