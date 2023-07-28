import { useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails.jsx';

import './styles/index.css'

export default function App() {

const [zenMode, setZenMode] = useState(false)
const [articles, setArticles] = useState([])
const [categories, setCategories] = useState([])
const [loading, setLoading] = useState(true)
const [myArticles, setMyArticles] = useState([])


const fetchArticles = async (url) => {
  const res = await fetch(url);
  const result = await res.json();
  setArticles(result)
}

const fetchCategories = async (url) => {
  const res = await fetch(url);
  const result = await res.json();
  setCategories(result);
}

const fetchMyArticles = async (url) => {
  const res = await fetch(url);
  const result = await res.json();
  setMyArticles(result);
}

useEffect(() => {
  fetchMyArticles("http://localhost:3000/posts")
  setLoading(true)
  fetchArticles("https://oblog-react.vercel.app/api/posts")
  fetchCategories("https://oblog-react.vercel.app/api/categories")
  setTimeout(() => {
    setLoading(false)
  }, 3000)

}, [])

console.log ('mesarticles fetch initial', myArticles)

  return (
    <div className={`m-auto flex flex-col items-center max-w-[1440px] ${zenMode ? "bg-gray-950" : "bg-white"}`}>
        <Header
              categories={categories}
              zenMode={zenMode}
              setZenMode={setZenMode}
            />
        <Routes>
        
          <Route path="/" element={
            <Posts 
                loading={loading}
                zenMode={zenMode}
                articles={articles}
                setArticles={setArticles}
                categories={categories}
                myArticles={myArticles} />}
          />
            <Route
            path="/posts/:categoryName" 
            element={
              <Posts
                loading={loading}
                zenMode={zenMode}
                articles={articles}
                setArticles={setArticles}
                myArticles={myArticles}
                />
            }/>

            <Route
            path="/post/:postId" 
            element={
              <PostDetails
                loading={loading}
                articles={articles}
                zenMode={zenMode}
                myArticles={myArticles}
              />
            }/>
      </Routes>
      <Footer />
    </div>
  );
}


