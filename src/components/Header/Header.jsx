import { Link } from "react-router-dom";

function Header({categories, zenMode, setZenMode}) {
  
const handleClick = () => {
    if(zenMode) {
      setZenMode(false)
    } else {
      setZenMode(true)
    }
  }
  
  return (
    <>
    <header className={`sticky z-20 flex flex-col justify-center top-0 w-full max-w-[1440px] mx-auto py-2 text-center
                      ${zenMode ? "bg-gray-950" : "bg-white"}`}
                      >
      <nav className="flex flex-wrap justify-center w-full color-alt p-6">
        <Link to="/" 
          className="cursor-pointer inline-block h-6 leading-6 color-darkest mx-4 no-underline text-headerM hover:underline hover:text-primary">  
            Accueil
        </Link>
        {categories.map((category) => (
          <Link to={`/posts/${category.slug}`} key={category.id} 
           className="menu-link cursor-pointer inline-block h-6 leading-6 color-darkest mx-4 no-underline text-headerM hover:text-primary hover:underline"
          >
              {category.name}
          </Link>
        ))}
      </nav> 
        <div className="flex w-fit m-auto">
          <button 
            className="h-6 mb-6 bg-primary text-lightest mx-4 px-4 text-headerM relative w-48 overflow-hidden rounded-lg group"
            onClick={handleClick}
            type="button">
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[600ms] ease-out group-hover:w-full"></div>
              <span className="relative group-hover:text-white">
                  {`${!zenMode ? "Activer le mode zen" : "Désactiver le mode zen"}`}
              </span>
          </button>
        </div>
      <h1 className="posts-title mx-12 text-primary font-oswald text-postsXL font-medium leading-postsLeading mb-2 text-center uppercase border-b-2 border-t-2 border-solid color-alt">
        Geek Ludik
      </h1>
    </header>
    
  </>
  );
}

export default Header;