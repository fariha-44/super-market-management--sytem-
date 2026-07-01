import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  ShoppingCart,
} from "lucide-react";

import { login } from "../Services/logindservices";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      const response = await login({
        username: username,
        password: password,
      });

      // Save logged in user
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert(response.data.message);

      navigate("/dashboard");

    } catch (err) {

      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Unable to connect to the server.");
      }

    } finally {

      setLoading(false);

    }
  };

  return (

    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600')",
      }}
    >

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative w-full max-w-md bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8">

        {/* Logo */}

        <div className="flex flex-col items-center">

          <div className="bg-green-600 p-5 rounded-full shadow-lg">
            <ShoppingCart size={40} className="text-white" />
          </div>

          <h1 className="text-4xl font-bold text-white mt-6">
            SuperMart
          </h1>

          <p className="text-green-200 mt-2">
            Management System
          </p>

          <p className="text-gray-200 mt-3">
            Login to continue
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-6"
        >

          {/* Username */}

          <div className="relative">

            <User
              size={20}
              className="absolute left-4 top-4 text-gray-500"
            />

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full bg-white rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>

          {/* Password */}

          <div className="relative">

            <Lock
              size={20}
              className="absolute left-4 top-4 text-gray-500"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white rounded-xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-500"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          {/* Error */}

          {error && (
            <div className="bg-red-500/20 border border-red-400 rounded-xl p-3 text-white text-center">
              {error}
            </div>
          )}

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

      </div>

    </main>

  );
}

export default Login;