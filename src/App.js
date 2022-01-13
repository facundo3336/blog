import "./App.scss";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Posts } from "./pages/Posts/Posts";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { PostDetail } from "./components/PostDetail/PostDetail";
import { CreatePost } from "./components/CreatePost/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetail />}></Route>
        <Route path="/admin/createPost" element={<CreatePost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
