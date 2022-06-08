import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const user = false;
  const router = useRouter();

  return (
    <header className="py-5 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="font-bold text-">
            Next~<span className="text-red-700">Rentals</span>{" "}
          </a>
        </Link>
        <nav className="flex items-center">
          <ul className="flex items-center">
            <li
              className={`mx-5 text-lg hover:text-red-700 ${
                router.pathname === "/cart" ? "text-red-700" : ""
              }`}
            >
              <Link href="/cart">Cart</Link>
            </li>
            {user && (
              <li
                className={`mx-5 text-lg hover:text-red-700 ${
                  router.pathname === "/create" ? "text-red-700" : ""
                }`}
              >
                <Link href="/create">Create</Link>
              </li>
            )}
          </ul>
          <ul className="flex items-center">
            {user ? (
              <>
                <li
                  className={`mx-5 text-lg hover:text-red-700 ${
                    router.pathname === "/account" ? "text-red-700" : ""
                  }`}
                >
                  <Link href="/account">Account</Link>
                </li>
                <li className="ml-5 text-lg hover:text-red-700">
                  <Link href="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li
                  className={`mx-5 text-lg hover:text-red-700 ${
                    router.pathname === "/login" ? "text-red-700" : ""
                  }`}
                >
                  <Link href="/login">Login</Link>
                </li>
                <li
                  className={`mx-5 text-lg hover:text-red-700 ${
                    router.pathname === "/signup" ? "text-red-700" : ""
                  }`}
                >
                  <Link href="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
