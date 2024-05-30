import { useEffect, useState } from "react";
import { api } from "backend-api";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const getApi = async () => {
      const res = await api.$get();
      const data = await res.json();
      setMessage(data.message);
    };

    getApi();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#11111b]">
        <h1 className="text-[#cdd6f4] text-3xl">
          Api Message:{" "}
          <span className="py-2 px-1 bg-[#ff9fae] text-white">{message}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
