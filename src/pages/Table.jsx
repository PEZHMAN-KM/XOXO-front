import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch("http://127.0.0.1:8000/top_users", {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      }).then((res) => res.json().then((data) => setUsers(data)));
    }
    loadUsers();
  }, []);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center m-0 p-0 bg-[#3B2A9F]">
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <a
            href="/"
            className="text-cyan-200 mt-2 text-2xl font-bold hover:drop-shadow-lg hover:scale-110 transition-all duration-200 mb-8"
          >
            Back To Home
          </a>
          <table className=" bg-black rounded-2xl table-auto font-bold w-1/3 text-center text-white border-collapse transition duration-150 hover:ring-4 ring-teal-400 ring-offset-[#3B2A9F] ring-offset-4 hover:scale-105">
            <thead className="text-2xl">
              <tr>
                <th>ROW</th>
                <th>NAME</th>
                <th>SCORE</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              {users.map((users, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{users.name}</td>
                  <td>{users.victories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
