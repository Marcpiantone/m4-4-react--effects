import React, { useEffect } from "react";

function useKeydown(code, callback) {
  const handleKeydown = (ev) => {
    if (ev.code === code) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
}

export default useKeydown;
