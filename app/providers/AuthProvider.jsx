"use client";
import React, { useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
