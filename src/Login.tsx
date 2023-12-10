import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userType } from "./App";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mockLoginValidator(username, password);

    setUsername("");
    setPassword("");

    navigate("/");
  };

  const mockLoginValidator = (username: string, password: string) => {
    if (username == "admin" && password == "password") {
      localStorage.setItem("role", "admin");
      return;
    }

    if (username == "super user" && password == "password") {
      localStorage.setItem("role", "super_user");
      return;
    }

    if (username == "user" && password == "password") {
      localStorage.setItem("role", "user");
      return;
    }

    setError("Incorrect username or password");

    setTimeout(() => {
      setError("");
    }, 5000);
  };

  useEffect(() => {
    if (
      localStorage.getItem("role") &&
      userType.includes(localStorage.getItem("role")!)
    ) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="h-[350px] w-[500px] bg-white rounded-md p-10">
        <h3 className="text-center font-bold text-lg mb-5">
          Login to continue
        </h3>
        {!!error && (
          <span className="block text-red-500 text-center">{error}</span>
        )}
        <form className="space-y-5 flex flex-col" onSubmit={onSubmit}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="username" className="font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="bg-white border-2 rounded-md px-4 py-2 text-sm focus:outline-none"
              onChange={(event) => setUsername(event.currentTarget.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-white border-2 rounded-md px-4 py-2 text-sm focus:outline-none"
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-primary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary font-medium rounded-full text-sm px-10 py-2.5 text-center w-[200px] self-center"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
export default Login;
