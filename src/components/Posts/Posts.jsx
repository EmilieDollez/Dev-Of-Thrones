import Post from "../Post/Post";
import Spinner from "../Spinner/Spinner";

function Posts({ loading, zenMode, ApiData }) {

  return (
    <main className="posts mb-6 mx-auto max-mw-800">
      <h1 className="posts-title text-primary font-oswald text-postsXL font-medium leading-postsLeading mb-2 text-center uppercase">
        Dev Of Thrones
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className={`posts-list  ${!zenMode ? "flex flex-wrap" : ""}`}>
          {ApiData.map((article) => (
            <Post
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              zenMode={zenMode}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Posts;
