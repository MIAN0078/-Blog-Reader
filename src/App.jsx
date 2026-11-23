import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Category from "./pages/Category";
import About from "./pages/About";
import Story from "./pages/about/Story";
import Contact from "./pages/about/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="post/:slug" element={<Post />} />
          <Route path="category/:name" element={<Category />} />

          {/* Nested routes */}
          <Route path="about" element={<About />}>
            <Route index element={<Story />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}