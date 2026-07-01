import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  FileText,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {

    localStorage.removeItem("user");

    navigate("/");

  };

  const menuStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-green-600 text-white font-semibold"
        : "hover:bg-slate-700 text-white"
    }`;

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-slate-800 text-white flex flex-col shadow-lg">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">

        <h1 className="text-3xl font-bold text-green-400">
          🛒 SuperMart
        </h1>

        <p className="text-slate-400 text-sm">
          Management System
        </p>

        {/* Logged in user */}
        <div className="mt-4">

          <p className="font-semibold">
            {user?.fullName}
          </p>

          <p className="text-xs text-green-300">
            {user?.role}
          </p>

        </div>

      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">

        <NavLink to="/dashboard" className={menuStyle}>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        {/* Admin + Manager */}
        {(user?.role === "Admin" || user?.role === "Manager") && (
          <>
            <NavLink to="/Productsspage" className={menuStyle}>
              <Package size={20} />
              Products
            </NavLink>

            <NavLink to="/customers" className={menuStyle}>
              <Users size={20} />
              Customers
            </NavLink>
          </>
        )}

        {/* Everyone */}
        <NavLink to="/sales" className={menuStyle}>
          <ShoppingCart size={20} />
          Sales
        </NavLink>

        <NavLink to="/saledetails" className={menuStyle}>
          <FileText size={20} />
          Sale Details
        </NavLink>

        {/* Admin Only */}
        {user?.role === "Admin" && (
          <NavLink to="/reports" className={menuStyle}>
            <FileText size={20} />
            Reports
          </NavLink>
        )}

      </nav>

      {/* Logout */}
      <div className="border-t border-slate-700 p-4">

        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;