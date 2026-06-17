import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const UserProfile = () => {
  const { isOnline, setIsOnline } = useContext(UserContext)!;

  return (
    <div>
      {isOnline ? " En ligne" : "Hors ligne"}
      <button onClick={() => setIsOnline(!isOnline)}>Changer statut</button>
    </div>
  );
};

export default UserProfile;
