import { useEffect, useState } from "react";
import { userType } from "./App";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  friends: {
    id: number;
    name: string;
  }[];
};

const User = () => {
  const [users, setUsers] = useState<User[]>([]);

  const isAdmin = localStorage.getItem("role")! == "admin";
  const isSuperUser = localStorage.getItem("role")! == "super_user";

  const navigate = useNavigate();
  useEffect(() => {
    if (!userType.includes(localStorage.getItem("role")!)) navigate("/login");

    fetch("http://localhost:3000/users")
      .then((response: Response) => {
        response.json().then((response) => {
          const data = response as unknown as User[];
          setUsers(data);
        });
      })
      .catch((error: unknown) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <section className="m-20">
        <h3 className="font-bold text-lg mb-5">Users</h3>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs uppercase bg-primary text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S/N
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                {(isAdmin || isSuperUser) && (
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                )}
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                {isAdmin && (
                  <th scope="col" className="px-6 py-3">
                    IP Address
                  </th>
                )}
                <th scope="col" className="px-6 py-3">
                  Friends
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr className="bg-white border-b" key={`user-${index}`}>
                  <th scope="row" className="px-6 py-4">
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{user.first_name}</td>
                  <td className="px-6 py-4">{user.last_name}</td>
                  {(isAdmin || isSuperUser) && (
                    <th className="px-6 py-4">{user.email}</th>
                  )}
                  <td className="px-6 py-4">{user.gender}</td>
                  {isAdmin && <td className="px-6 py-4">{user.ip_address}</td>}
                  <td className="px-6 py-4">
                    {user.friends.map((item) => item.name).join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default User;
