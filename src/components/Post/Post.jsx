import { Link } from "react-router-dom";

function Post({title, excerpt, category, zenMode, id}) {
// console.log(id)
  return (
    <article className={`z-10 post w-full pt-2 pb-4 hover:bg-alt max-bigMobile:px-6 ${!zenMode ? "tablet:w-[calc(50%-4px)]" : "tablet:w-full"}`}>
        <Link to={`/post/${id}`}>
          <h2 className="post-title text-darkest uppercase font-oswald text-postM font-medium mb-2 px-12">{title}</h2>
          
          <div className="flex justify-start gap-3 pl-12">
            {category.filter(cat => cat.name.includes("ans") || cat.name.includes("Jeux") || cat.name.includes("actu")).map((cat) => (
              <div className="post-category bg-primary text-lightest inline-block text-tag h-6 leading-2 mb-2 px-2 pt-1 uppercase">{cat.name}</div>
            ))}
          </div>

          <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-26px)] h-24 bg-amber-300 z-[-1] opacity-80"></div>
          <p className="post-excerpt text-color text-justify px-12 line-clamp-5"
          dangerouslySetInnerHTML={{__html: excerpt}}>
          </p>
          </div>
        
        </Link>
        
    </article>
  );
}

export default Post;