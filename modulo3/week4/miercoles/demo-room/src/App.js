import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import RootNavigation from "./RootNavigation";
function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const handleLogout = () => {
  };

  const authenticate = (user) => {
    setUser(user);
  };

  return (
    <div className="App">
      <Navbar />
                  {/* {user:{},aut=()=>{}, handle:true} */}
      <RootNavigation {...{user,authenticate,handleLogout} } />
    </div>
  );
}

export default App;
