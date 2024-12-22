import Login from "../components/login";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Albums from "../components/albums";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 > Date.now()) {
        setUser(decoded);
      } else {
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.log("No token found");
    }
  }, []);

  if (user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Albums user={user} setUser={setUser} />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen">
        <Login setUser={setUser} />
      </div>
    );
  }
}
