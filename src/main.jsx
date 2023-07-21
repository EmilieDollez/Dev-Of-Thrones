import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'
import Header from './components/Header/Header.jsx'
import Post from './components/Post/Post.jsx'
import Footer from './components/Footer/Footer.jsx'
import Posts from './components/Posts/Posts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
</BrowserRouter>,
)
