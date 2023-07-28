import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PostDetails({zenMode, myArticles, loading}) {
  
  const params = useParams();
  console.log('id article :', params.postId)
  const [currentArticle, setCurrentArticle] = useState([])

  const fetchCurrentArticle = async (url) => {
    console.log('url',url)
    const res = await fetch(url);
    const result = await res.json();
    setCurrentArticle(result.data)
  }

  useEffect(() => {
    fetchCurrentArticle(`http://localhost:3000/posts/${params.postId}`)
  }, [])
  
  console.log('ID recherché', params.postId)
  console.log('article recherché', currentArticle)

return (
  <article className={`post-detail mt-44 post p-6 hover:bg-alt w-full min-w-[320px] max-bigMobile:mt-56 ${!zenMode ? "" : "min-[768px]:w-full bg-gray-950"}`}>
  <h2 className="post-detail text-darkest uppercase font-oswald text-postXL text-center font-medium mb-2">{currentArticle.post_title}</h2>
  <div>
        {/* {currentArticle.data.terms
          .map((category) => ( */}
          <div key="id" className="post-category bg-primary text-lightest inline-block font-postM h-9 leading-9 mb-2 px-2 py-auto uppercase">{}</div>
          {/* ))
        } */}
  </div>
 <p className={`post-excerpt text-color text-center text-justify ${!zenMode ? "" : "min-[600px]:w-full bg-gray-600"}`} dangerouslySetInnerHTML={{__html:currentArticle.post_content}}>
    </p>
   </article>
)
  } 

  