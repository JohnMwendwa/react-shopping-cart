import { NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Store",
    href: "/store",
  },
];

export default function NavBar() {
  return (
    <header className="shadow-md flex items-center justify-between mx-auto py-4 px-4 sm:px-6 lg:px-8 max-w-7xl  w-full">
      <nav>
        <ul className="flex items-baseline space-x-4">
          {navigation.map((navItem) => (
            <li key={navItem.name}>
              <NavLink
                to={navItem.href}
                className={({ isActive }) =>
                  isActive
                    ? "outline outline-blue-600 px-3 py-2 "
                    : "px-3 py-2 hover:outline hover:bg-blue-600 hover:text-white"
                }
              >
                {navItem.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button className="w-12 h-12 fill-blue-700 rounded-full outline outline-1 outline-gray-400 p-3 relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
        <div className="rounded-full flex justify-center items-center bg-red-600 absolute -bottom-1 -right-2 w-6 h-6 text-white">
          3
        </div>
      </button>
    </header>
  );
}
