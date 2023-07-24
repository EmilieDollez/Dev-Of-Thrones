import { useParams } from "react-router-dom";

export default function PostDetails({articles, zenMode}) {

const params = useParams();
const article = articles.find(article => article.id === Number(params.postId))

return article && (
    <article className={`post p-6 hover:bg-alt ${!zenMode ? "min-[600px]:w-media50" : "min-[600px]:w-full"}`}>
    <h2 className="post-title text-darkest text-xl uppercase font-oswald text-postXL font-medium mb-2">{article.title}</h2>
    <div className="post-category bg-primary text-lightest inline-block font-postM h-9 leading-9 mb-2 px-2 py-auto uppercase">{}</div>
    <p className="post-excerpt text-color">
      {article.excerpt}
    </p>
  </article>
  );
}
