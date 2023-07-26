import { useParams } from "react-router-dom";

export default function PostDetails({articles, zenMode}) {

const params = useParams();
const article = articles.find(article => article.id === Number(params.postId))
// console.log(article)
// console.log('valeur de params', params)

return article && (
    <article className={`post-detail mt-44 post p-6 hover:bg-alt w-full min-w-[320px] max-bigMobile:mt-56 ${!zenMode ? "" : "min-[768px]:w-full bg-gray-950"}`}>
    <h2 className="post-detail text-darkest uppercase font-oswald text-postXL text-center font-medium mb-2">{article.title}</h2>
    <div className="post-category bg-primary text-lightest inline-block font-postM h-9 leading-9 mb-2 px-2 py-auto uppercase">{article.category.slug}</div>
    <p className={`post-excerpt text-color text-justify ${zenMode ? "" : "min-[600px]:w-full bg-gray-600"}`}>
      {article.excerpt}
    </p>
  </article>
  );
}
