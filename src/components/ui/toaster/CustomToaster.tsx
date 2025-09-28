import React from "react";
import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          backgroundColor: "white",
          color: "var(--color-gray-1)",
          minWidth: "250px",
          padding: "10px",
        },
      }}
    />
  );
};

export default CustomToaster;
