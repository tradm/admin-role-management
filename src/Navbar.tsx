import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-14 p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Role
          </span>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary/90 font-medium rounded-lg text-sm px-4 py-2 text-center"
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
