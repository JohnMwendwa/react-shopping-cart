import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  z-index: 0;
  border-radius: 3px;

  :hover {
    transform: scale(102%);
  }

  ::before {
    content: "";
    background: linear-gradient(60deg, purple, #ff0000, blue);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    border-radius: 3px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export default function Home() {
  return (
    <div className="px-4 lg:px-6 py-3 text-center">
      <h1 className="text-center font-medium text-2xl my-4 text">
        Welcome to our Store
      </h1>
      <Button className="border-2 border-gray-700 px-4 py-2 text-white">
        <Link to={"/react-shopping-cart/store"}>Browse our products</Link>
      </Button>
    </div>
  );
}
