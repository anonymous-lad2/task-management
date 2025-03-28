import React, { use } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1>
        Task Management Application
      </h1>
    </div>
  );
}

export default App;
