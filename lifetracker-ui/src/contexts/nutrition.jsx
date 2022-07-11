import * as React from "react";
import apiClient from "../services/apiClient";
import { useAuthContext } from "./auth";

const NutritionContext = React.createContext(null);

export const NutritionContextProvider = ({ children }) => {
  const [nutritions, setNutritions] = React.useState([]);
  const [initialized, setInitialized] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  //-----------------------------------------------------

  React.useEffect(() => {
    console.log("test");
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) {
        setIsLoggedIn(true);

      }
      if (error) {
        setErrors(error);
        console.log("error:", error);
      }
    };
    const fetchNutritions = async () => {
      const { data, error } = await apiClient.fetchNutrition();
      if (data) {
        setNutritions(data?.nutritions);
        console.log("data", data);
      }
      if (error) {
        setErrors(error);
        console.log("error:", error);
      }
    };

    const token = localStorage.getItem("lifetracker_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
    if (isLoggedIn) {
      fetchNutritions();
    }
    setInitialized(true);
  }, [isLoggedIn, initialized]);

  const nutritionContextValue = {
    initialized,
    setInitialized,
    isLoading,
    setIsLoading,
    errors,
    setErrors,
    nutritions,
    setNutritions,
  };
  return (
    <NutritionContext.Provider value={nutritionContextValue}>
      <>{children}</>
    </NutritionContext.Provider>
  );
};

export const useNutritionContext = () => React.useContext(NutritionContext);
