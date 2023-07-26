import { Link } from "react-router-dom";

function Post({title, excerpt, category, zenMode, id}) {

  return (
    <article className={`z-10 post w-full pt-2 pb-4 border-solid border-2 border-color hover:bg-alt max-bigMobile:px-6 ${!zenMode ? "tablet:w-[calc(50%-4px)]" : "tablet:w-full"}`}>
        <Link to={`/post/${id}`}>
            <h2 className="post-title text-darkest uppercase font-oswald text-postXL font-medium mb-2 px-12">{title}</h2>
            <div className="post-category bg-primary text-lightest inline-block font-postM h-9 leading-9 mb-2 mx-12 px-2 py-auto uppercase">{category}</div>
            <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-26px)] h-24 bg-yellow-300 z-[-1]"></div>
            <p className="post-excerpt text-color text-justify px-12 line-clamp-6">
              {excerpt}
            </p>
            </div>
        
        </Link>
        
    </article>
  );
}

export default Post;