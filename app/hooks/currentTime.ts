import { useState, useEffect } from "react";

export function useCurrentTime() {
    const [currentTime, setCurrentTime] = useState(getCurrentTime());
  
    useEffect(() => {
      const timerId = setInterval(() => {
        setCurrentTime(getCurrentTime());
      }, 60000);
  
      return () => {
        clearInterval(timerId);
      };
    }, []);
  
    function getCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
  
      return `${hours}:${minutes}`;
    }
  
    return currentTime;
  }
  