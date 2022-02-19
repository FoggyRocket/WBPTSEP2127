import { Routes, Route } from "react-router-dom";
import { Home, LogIn, Signup, ProtectedPage, AuthAntd } from "./pages";

function RootNavigation(props) {
  return (
    <Routes>
      <Route path="/" element={<Home {...props} />} />
      <Route path="/signup" element={<Signup {...props} />} />
      <Route path="/login" element={<LogIn {...props} />} />
      <Route path="/protected" element={<ProtectedPage {...props} />} />
      <Route path="/loginAntd" element={<AuthAntd {...props} />} />
      <Route path="/signupAntd" element={<AuthAntd {...props} />} />
    </Routes>
  );
}

export default RootNavigation;
