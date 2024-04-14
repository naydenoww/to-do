import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';


function App() {
    return (
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
    root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
