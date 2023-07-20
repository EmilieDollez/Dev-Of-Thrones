import Posts from "../Posts/Posts";

function Header({categories, zenMode, setZenMode}) {
  
const handleClick = () => {
    if(zenMode) {
      setZenMode(false)
    } else {
      setZenMode(true)
    }
  }
  
  return (
    <header className="border-b-2 border-solid color-alt p-6 text-center">
      <nav className="flex justify-center max-[600px]:flex-wrap">
        <a 
          className="cursor-pointer inline-block h-6 leading-6 color-darkest mx-4 no-underline text-headerM hover:underline hover:text-primary" href="#header">  
            Accueil
        </a>
        {categories.map((category) => (
          <a key={category.id} 
            className="menu-link cursor-pointer inline-block h-6 leading-6 color-darkest mx-4 no-underline text-headerM hover:text-primary hover:underline" href="#header">
              {category.name}
          </a>
        ))}
        <button 
          className="h-6 bg-primary text-lightest mx-4 px-4 text-headerM relative w-48 overflow-hidden rounded-lg group"
          onClick={handleClick}
          type="button">
            <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[600ms] ease-out group-hover:w-full"></div>
            <span className="relative group-hover:text-white">
                {`${!zenMode ? "Activer le mode zen" : "Désactiver le mode zen"}`}
            </span>
        </button>
      </nav>
    </header>
  );
}

export default Header;