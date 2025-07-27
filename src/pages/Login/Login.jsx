import { useState, useCallback, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import { loginUser } from "../../services/loginService";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisible((prev) => !prev);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginUser({ username, password });
      localStorage.setItem("authToken", data.accessToken);
      navigate("/dashboard");
    } catch (err) {
      const message =
        err?.response?.data?.message || err.message || "Login failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const passwordToggleImage = useMemo(
    () =>
      passwordVisible ? images.passwordVisibleImg : images.passwordDisableImg,
    [passwordVisible]
  );

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div
      id="login-page"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"
    >
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md m-2">
        <div className="text-center mb-8">
          <div className="flex items-center gap-5">
            <img src={images.IrisLogo} alt="IRIS Logix" className=" h-12" />
            <h1 className="text-2xl font-bold text-gray-800">
              Invoice Management System
            </h1>
          </div>
          <p className="text-gray-600 mt-5">Sign in to access your dashboard</p>
        </div>

        {error && (
          <h3 className="mb-4 text-red-600 text-base text-center">{error}</h3>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10"
            />
            <img
              src={passwordToggleImage}
              alt="toggle password visibility"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer"
              aria-label="Toggle password visibility"
              style={{ width: "20px", height: "20px" }}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading || !username || !password}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                loading || !username || !password
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
