import React from "react"
import { useSelector } from "react-redux"

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart)
  return (
    <>
      <nav className="container mx-auto mt-5 flex justify-between  rounded-lg bg-white px-2 py-4 shadow-md shadow-fuchsia-500/20 md:px-8">
        <h2 className="text-3xl font-semibold text-black">
          Redux <span className="text-fuchsia-600">Toolkit</span>{" "}
        </h2>

        <div className="flex space-x-6 px-7">
          <button className="relative hover:text-fuchsia-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <div className="  absolute -top-3 -right-2 rounded-full bg-fuchsia-400 py-1 px-2 text-center text-sm ">
              <p>{amount}</p>
            </div>
          </button>

          <button className="hover:text-fuchsia-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
