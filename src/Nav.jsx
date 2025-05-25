import React from "react";
import { NavLink} from "react-router-dom";

const Nav = () => {
  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "BCA", path: "/bca" },
    { id: 3, name: "Hackathons", path: "/hackathons" },
    { id: 4, name: "Data", path: "/data" },
    { id: 5, name: "Hosting", path: "/hosting" },
    { id: 6, name: "Live", path: "/live" },
  ];
// const location = useLocation();

  return (
    <div>
      <h1>Navbar</h1>
      <div>
        <ul className="flex justify-center items-center gap-4">
        {
            links.map((link) =>
            {
                return (
                    <li key={link.id}><a href={link.path}>{link.name}</a></li>
                    );
            }
            )
        }
          
        </ul>
      </div>
    </div>
  );
};

export default Nav;
