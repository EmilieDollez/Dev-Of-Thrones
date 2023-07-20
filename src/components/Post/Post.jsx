function Post({title, excerpt, category, zenMode}) {
  return (
    <article className={`post p-6 hover:bg-alt ${!zenMode ? "min-[600px]:w-media50" : "min-[600px]:w-full"}`}>
      <h2 className="post-title text-darkest text-xl uppercase font-oswald text-postXL font-medium mb-2">{title}</h2>
      <div className="post-category bg-primary text-lightest inline-block font-postM h-9 leading-9 mb-2 px-2 py-auto uppercase">{category.name}</div>
      <p className="post-excerpt text-color">
        {excerpt}
      </p>
    </article>
  );
}

export default Post;