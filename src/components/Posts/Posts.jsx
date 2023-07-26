import Post from "../Post/Post";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

function Posts({ loading, zenMode, articles, categories}) {

  const params = useParams()
  const article = articles.find(article => article.id === Number(params.postId))
  // console.log(article)
  
  return (
    <main className="posts w-full px-12 mb-20">
      {loading ? (
        <Spinner />
      ) : (  
          <div className={`posts-list ${zenMode ? "" : "flex flex-wrap gap-2"}`}>
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

            {/* {article && articles.map((article) =>
                    <Post
                      key={article.id}
                      id={article.id}
                      title={article.title}
                      excerpt={article.excerpt}
                      category={article.category.slug}
                      zenMode={zenMode}
                      categories={categories}
                    />
                    )  
            }  */}

            {/* {!params.categoryName && !params.postId && articles
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
            } */}
          </div>
        )}
      </main>
    );
  }

export default Posts;
