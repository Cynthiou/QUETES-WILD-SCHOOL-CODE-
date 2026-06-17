import "./App.css";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import UserProfile from "./components/UserProfile";

function App() {
  const [isOnline, setIsOnline] = useState(false);
  return (
    <UserContext value={{ isOnline, setIsOnline }}>
      <UserProfile />
    </UserContext>
  );
}

export default App;
