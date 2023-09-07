"use client";
import Loader from "@/components/Loader/Loader";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user) {
      if (typeof window !== "undefined") {
        setUser(localStorage.getItem("user"));
      } else {
        setUser(null);
      }
    }
    setLoading(false);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {loading ? <Loader /> : children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
