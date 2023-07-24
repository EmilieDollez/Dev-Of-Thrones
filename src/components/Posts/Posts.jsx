import Post from "../Post/Post";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

function Posts({ loading, zenMode, articles, categories}) {

  const params = useParams()
  console.log('valeur de params', params)
  
  return (
    <main className="posts mb-6 mx-auto max-mw-800">
      <h1 className="posts-title text-primary font-oswald text-postsXL font-medium leading-postsLeading mb-2 text-center uppercase">
        Dev Of Thrones
      </h1>
      {loading ? (
        <Spinner />
      ) : (  
          <div className={`posts-list  ${!zenMode ? "flex flex-wrap" : ""}`}>

            {params.categoryName && articles
            .filter((article) => article.category.slug === params.categoryName)
            .map((article) => (
                  <Post
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    category={article.category.slug}
                    zenMode={zenMode}
                    categories={categories}
                  />
                ))
            }

            {!params.categoryName && articles
            .map((article) => (
                  <Post
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    category={article.category.slug}
                    zenMode={zenMode}
                    categories={categories}
                  />
                ))
            }
          </div>
        )}
      </main>
    );
  }

export default Posts;
