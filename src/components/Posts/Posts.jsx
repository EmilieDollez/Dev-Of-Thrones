import Post from "../Post/Post";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

function Posts({ loading, zenMode, articles, categories, myArticles}) {
  console.log('type data', typeof myArticles.data)
  console.log('test data', myArticles)
  console.log('test data2', myArticles.data)

  const params = useParams()
  
  return (
    <main className="posts w-full px-12 mb-20">
      {loading ? (
        <Spinner />
      ) : (  
          <div className={`posts-list ${zenMode ? "" : "flex flex-wrap gap-2"}`}>

            {!params.categoryName && myArticles.data
            .map((article) => (
                  <Post
                    key={article.ID}
                    id={article.ID}
                    title={article.post_title}
                    excerpt={article.post_content}
                    category={article.terms}
                    zenMode={zenMode}
                    categories={categories}
                  />
                ))
            }

            {params.categoryName && articles
            .filter((article) => article.category.slug === params.categoryName)
            .map((article) => (
                  <Post
                    id={article.ID}
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
