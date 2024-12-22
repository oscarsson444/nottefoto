import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Spinner from "./spinner";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/login", {
        username: username,
        password: password,
      });
      console.log("Login successful:", response.data);
      // Store the returned token in local storage
      localStorage.setItem("token", response.data.token);
      const decoded = jwtDecode(response.data.token);
      setUser(decoded);
      setLoading(false);
    } catch (error) {
      console.error("Login failed:", error);
      setError(error.response.data);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4">
        <h1 className=" text-white">Nottefoto</h1>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Användarnamn"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Lösenord"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className=" text-white h-10 bg-green-700 hover:bg-green-900 font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          {loading ? <Spinner /> : "Logga in"}
        </button>
        <p className="text-white font-bold">{error}</p>
      </div>
    </div>
  );
}
