import { Routes, Route } from "react-router-dom";
import { Home, Login, Profile,User } from "./views";

function Router() {
  return (
    <Routes>
      {/* mis rutas */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      {/* params  */}
      <Route path="/user/:name" element={<User />} />
      {/* 404  v6 */}
      <Route path="*" element={<h1>No existe esa pagina!! bro :(</h1>} />
    </Routes>
  );
}
export default Router;
