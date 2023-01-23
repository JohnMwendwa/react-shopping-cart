import { Link } from "react-router-dom";

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
    <header>
      <nav>
        <ul>
          {navigation.map((navItem) => (
            <li key={navItem.name}>
              <Link to={navItem.href}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
