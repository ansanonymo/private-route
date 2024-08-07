import { FaFire } from "react-icons/fa";
import { Link, useResolvedPath } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/context";

export default function Nav() {
  const path = useResolvedPath();
  const pathname = path.pathname;
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    setAuth(null);
  };

  return (
    <nav className="flex flex-wrap justify-between items-center container mx-auto px-2 py-6">
      <div className="text-3xl text-orange-600">
        <Link to="/">
          <FaFire />
        </Link>
      </div>
      <ul className="flex gap-4 flex-wrap cursor-pointer">
        <li className={pathname === "/" ? "text-orange-600" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={pathname === "/profile" ? "text-orange-600" : ""}>
          <Link to="/profile">Profile</Link>
        </li>
        {auth ? (
          <li onClick={handleLogout}>Logout</li>
        ) : (
          <li className={pathname === "/login" ? "text-orange-600" : ""}>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
