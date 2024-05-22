import Header from "@kametsun/components/Header";
import MainLayout from "@kametsun/layouts/MainLayout";
import Footer from "@kametsun/components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WishlistLayout from "@kametsun/layouts/WishlistLayout";
import AdminLayout from "./layouts/AdminLayout";
import ArticleLayout from "./layouts/ArticleLayout";
import ArticleDetail from "./components/ArticleDetail";
import RegisterArticle from "./components/RegisterArticle";

function App() {
  const adminURL = import.meta.env.VITE_ADMIN_URL;

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/wishlist" element={<WishlistLayout />} />
          <Route path="/articles" element={<ArticleLayout />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path={adminURL} element={<AdminLayout />} />
          <Route path={adminURL + "/articles"} element={<ArticleLayout />} />
          <Route
            path={adminURL + "/articles/new"}
            element={<RegisterArticle />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
