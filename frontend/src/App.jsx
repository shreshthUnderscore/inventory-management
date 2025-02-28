import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/category");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {data.map((data) => (
          <Link to={data.name} key={data.id}>
            <button key={data.id}>{data.name}</button>
          </Link>
        ))}
      </ul>
    </div>
  );
}
