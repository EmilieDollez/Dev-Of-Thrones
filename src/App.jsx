import { useEffect, useState } from 'react'
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

import './styles/index.css'

export default function App() {

const [zenMode, setZenMode] = useState(false)
const [ApiData, setApiData] = useState([])
const [Categories, setCategories] = useState([])
const [loading, setLoading] = useState(true)

const fetchArticles = async (url) => {
  const res = await fetch(url);
  const result = await res.json();
  setApiData(result)
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

      <Posts
        loading={loading}
        zenMode={zenMode}
        ApiData={ApiData}
      />

      <Footer />

    </div>
  );
}


