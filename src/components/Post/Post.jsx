import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Post({title, excerpt, category, zenMode, id, articles}) {

  return (
    <article className={`post p-6 hover:bg-alt ${!zenMode ? "min-[600px]:w-media50" : "min-[600px]:w-full"}`}>
      <Link to={`/post/${id}`}>
      <h2 className="post-title text-darkest text-xl uppercase font-oswald text-postXL font-medium mb-2">{title}</h2>
      <div className="post-category bg-primary text-lightest inline-block font-postM h-9 leading-9 mb-2 px-2 py-auto uppercase">{category}</div>
      <p className="post-excerpt text-color">
        {excerpt}
      </p>
      </Link>
    </article>
  );
}

export default Post;