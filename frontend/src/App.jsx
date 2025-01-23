import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts.

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Data</h1>
      <ul>
        <li key={data.id}>{data.name}</li>
      </ul>
    </div>
  );
};

export default App;
