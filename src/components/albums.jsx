import { useEffect, useState } from "react";
import axios from "axios";

export default function Albums({ user, setUser }) {
  const [albums, setAlbums] = useState([]); // State to store albums

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get("/api/albums", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setAlbums(response.data); // Assuming the data is in response.data
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  console.log(user);
  console.log(albums);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="text-white">Album</h1>
        <ul className="text-white">
          {albums.length > 0 ? (
            albums[0].images.map((image, index) => (
              <img src={image.path} key={index} />
            ))
          ) : (
            <li>Loading...</li>
          )}
        </ul>
        <button
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logga ut
        </button>
      </div>
    </div>
  );
}
