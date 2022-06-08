import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-5 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="font-bold text-2xl">
            Next~<span className="text-red-700">Rentals</span>{" "}
          </a>
        </Link>
        <nav>
          <ul className="flex items-center">
            <li className="mx-5 text-lg">
              <Link href="/login">Login</Link>
            </li>
            <li className="ml-5 text-lg">
              <Link href="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
