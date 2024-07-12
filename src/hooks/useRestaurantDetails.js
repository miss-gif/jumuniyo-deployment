import { useState, useEffect } from "react";
import { fetchRestaurantDetails } from "../api/fetchRestaurantDetails";

const useRestaurantDetails = restaurantId => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRestaurantDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchRestaurantDetails(restaurantId);
        setRestaurantDetails(data.resultData);
        console.log("data.resultData", data.resultData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getRestaurantDetails();
  }, [restaurantId]);

  return { restaurantDetails, loading, error };
};

export default useRestaurantDetails;
