import { useEffect, useState } from "react";
import "./index.css";
function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUserJSON = localStorage.getItem("user");
    if (storedUserJSON) {
      const storedUser = JSON.parse(storedUserJSON);
      setUser(storedUser);
    }
  }, []);

  const renderUserCard = () => {
    if (!user) return null;

    return (
      <div className="user-card">
        <h2>{user.name}</h2>
        <h3>Email: {user.email}</h3>
        <h4>Password:{user.password}</h4>
        {/* Boshqa ma'lumotlar */}
      </div>
    );
  };

  return (
    <div className="home-container">
      <h1>Welcome to Home Page</h1>
      {renderUserCard()}
      {/* Boshqa komponent kodlari */}
    </div>
  );
}

export default Home;
