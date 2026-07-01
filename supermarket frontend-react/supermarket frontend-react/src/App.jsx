import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/products";
import Sales from "./pages/Sales";
import SaleDetails from "./pages/SaleDetails";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Productsspage from "./pages/productsspage";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized page";

import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Productsspage" element={<Productsspage />} />

        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Manager", "Cashier"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
              <Products />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customers"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
              <Customers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sales"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Manager", "Cashier"]}>
              <Sales />
            </ProtectedRoute>
          }
        />

        <Route
          path="/saledetails"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Manager", "Cashier"]}>
              <SaleDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <Reports />
            </ProtectedRoute>
          }
        />

        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;