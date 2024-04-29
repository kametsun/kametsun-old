import Header from "@kametsun/components/Header";
import MainLayout from "@kametsun/layouts/MainLayout";
import Footer from "@kametsun/components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WishlistLayout from "@kametsun/layouts/WishlistLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  const adminURL = import.meta.env.VITE_ADMIN_URL;

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/wishlist" element={<WishlistLayout />} />
          <Route path={adminURL} element={<AdminLayout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
