import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  // Step 1: Input: Here no input is needed
  const [onlineStatus, setOnlineStatus] = useState(true);

  //   Step 2: Built logic
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //   Step 3: Output: What to return
  return onlineStatus;
};

// Step 4: Export the custom hook
export default useOnlineStatus;
