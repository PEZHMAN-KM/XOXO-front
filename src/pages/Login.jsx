import React, { useState } from "react";

export default function Login() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-[#3B2A9F]">
        <div className="p-6 shadow-lg rounded-xl bg-black">
          <div className="flex justify-center content-center gap-2 mb-5">
            <a className="text-white content-center" href=".">
              <div
                className="cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? (
                  <svg
                    width="28"
                    height="28"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                  </svg>
                ) : (
                  <svg
                    width="28"
                    height="28"
                    fill="white"
                    class="bi bi-arrow-left-circle-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                    />
                  </svg>
                )}
              </div>
            </a>
            <h1 className="text-white text-3xl content-center font-bold">
              Fill The Form
            </h1>
          </div>
          <form action="">
            <label
              className="flex justify-center content-center flex-col gap-2 mb-3"
              htmlFor=""
            >
              <h1 className="font-bold text-white text-xl">Player One :</h1>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter The Name"
              />
            </label>
            <label
              className="flex justify-center content-center flex-col gap-1"
              htmlFor=""
            >
              <h1 className="font-bold text-white text-xl">Player Two :</h1>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter The Name"
              />
            </label>
            <div className="flex content-center justify-center mt-4">
              <input
                className="text-white bg-orange-400 rounded-md py-1 px-2 hover:scale-x-110 hover:bg-orange-500 hover:font-semibold transition duration-100"
                type="submit"
              />
              <a href="gamedesign" className="text-white">
                GOOOO
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
