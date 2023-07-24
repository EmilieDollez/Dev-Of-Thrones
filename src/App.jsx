import { useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

import './styles/index.css'

export default function App() {

const [zenMode, setZenMode] = useState(false)
const [Articles, setArticles] = useState([])
const [Categories, setCategories] = useState([])
const [Loading, setLoading] = useState(true)

const fetchArticles = async (url) => {
  const res = await fetch(url);
  const result = await res.json();
  setArticles(result)
}

const fetchCategories = async (url) => {
  const res = await fetch(url);
  const result = await res.json();
  setCategories(result)
}


useEffect(() => {
  setLoading(true)
  fetchArticles("https://oblog-react.vercel.app/api/posts")
  fetchCategories("https://oblog-react.vercel.app/api/categories")
  setTimeout(() => {
    setLoading(false)
  }, 3500)
}, [])

  return (
    <div className="app">
        <Header
              categories={Categories}
              zenMode={zenMode}
              setZenMode={setZenMode}
            />
        <Routes>
        
          <Route path="/" element={
            <Posts 
                loading={Loading}
                zenMode={zenMode}
                articles={Articles}
                setArticles={setArticles}
                categories={Categories} />}
          />
            <Route
            path="/posts/:categoryName" 
            element={
              <Posts
                loading={Loading}
                zenMode={zenMode}
                articles={Articles}
                setArticles={setArticles}
                categories={Categories}
                 />
            }/>

            <Route
            path="/post/:postId" 
            element={
              <PostDetails
                articles={Articles}
                zenMode={zenMode}
              />
            }/>
      </Routes>
      <Footer />
    </div>
  );
}


