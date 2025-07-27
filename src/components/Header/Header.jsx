import { useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import { useModal } from "../../contexts/ModalContext";

const Header = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const handleLogoutClick = () => {
    openModal({
      title: "Confirm Logout",
      message: "Are you sure you want to log out?",
      onConfirm: () => {
        const token = localStorage.getItem("authToken");
        if (token) {
          localStorage.removeItem("authToken");
          navigate("/");
        }
      },
    });
  };

  return (
    <header className="bg-[#2563eb] text-white px-6 py-4 shadow-md fixed top-0 w-full z-[100]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <img
              src={images.IrisLogo}
              alt="IRIS Logix"
              className="h-10 w-auto object-contain"
            />
          </div>
          <span className="text-2xl font-bold tracking-wide">IRIS Logix</span>
        </div>

        <nav aria-label="Main navigation" className="w-full sm:w-auto">
          <ul className="flex flex-row sm:space-x-4 space-x-2 sm:space-y-0 w-full sm:w-auto items-center">
            <li>
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full sm:w-auto bg-white text-[#2563eb] hover:bg-gray-100 px-2 sm:px-5 py-2 rounded-lg font-medium transition duration-300 border border-transparent hover:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-white sm:text-[16px] text-[12px]"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/about")}
                className="w-full sm:w-auto bg-white text-[#2563eb] hover:bg-gray-100 px-2 sm:px-5 py-2 rounded-lg font-medium transition duration-300 border border-transparent hover:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-white sm:text-[16px] text-[12px]"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/team")}
                className="w-full sm:w-auto bg-white text-[#2563eb] hover:bg-gray-100 px-2 sm:px-5 py-2 rounded-lg font-medium transition duration-300 border border-transparent hover:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-white sm:text-[16px] text-[12px]"
              >
                My Team
              </button>
            </li>
            <li>
              <button
                onClick={handleLogoutClick}
                className="w-full sm:w-auto bg-white text-[#2563eb] hover:bg-gray-100 px-2 sm:px-5 py-2 rounded-lg font-medium transition duration-300 border border-transparent hover:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-white sm:text-[16px] text-[12px]"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
