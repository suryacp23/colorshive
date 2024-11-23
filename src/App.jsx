import React, { useState } from "react";
import { data } from "./data/data.js";

const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [copiedcolor, setCopiedcolor] = useState("");
  const handleCopy = (color) => {
    navigator.clipboard.writeText(color).then(() => {
      setShowAlert(true);
      setCopiedcolor(color);
      setTimeout(() => setShowAlert(false), 2000);
    });
  };
  return (
    <div className="bg-black text-white justify-center items-center">
      {data.map((item) => {
        return (
          <div className="flex flex-col gap-2" key={item.Theme}>
            <div>{item.Theme}</div>
            <div className="flex gap-2">
              <div
                className={`h-20 w-20 rounded-full cursor-pointer text-black flex items-center justify-center`}
                style={{ backgroundColor: item.Background }}
                onClick={() => handleCopy(item.Background)}
              >
                {item.Background}
              </div>
              <div
                className={`h-20 w-20 rounded-full cursor-pointer text-black flex items-center justify-center`}
                style={{ backgroundColor: item.Primary }}
                onClick={() => handleCopy(item.Primary)}
              >
                {item.Primary}
              </div>{" "}
              <div
                className={`h-20 w-20 rounded-full cursor-pointer text-black flex items-center justify-center`}
                style={{ backgroundColor: item.Secondary }}
                onClick={() => handleCopy(item.Secondary)}
              >
                {item.Secondary}
              </div>{" "}
              <div
                className={`h-20 w-20 rounded-full cursor-pointer text-black flex items-center justify-center`}
                style={{ backgroundColor: item.Accent }}
                onClick={() => handleCopy(item.Accent)}
              >
                {item.Accent}
              </div>
            </div>
          </div>
        );
      })}

      {showAlert && (
        <div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 text-black py-2 px-4 rounded shadow-lg"
          style={{ backgroundColor: copiedcolor }}
        >
          Copied: {copiedcolor}
        </div>
      )}
    </div>
  );
};

export default App;
