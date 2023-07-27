/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color': '#666',
        'primary': '#e52354',
        'alt': '#ddd',
        'darkest': '#101010',
        'lightest': '#fff',
      },
      fontFamily: {
        roboto: ['Roboto'],
        oswald: ['Oswald'],
      },
      fontSize: {
        'tag': '10px',
        'headerM': '0.8125em',
        'postM': '0.8125em',
        'postXL': '1.3125em',
        'postsXL': '2.125em',
      },
      width: {
        'gutter': '1.5rem',
        'mw-800': '800px',
        'media50': '50%',
      },
      lineHeight: {
        'postsLeading':'4.5rem',
      },
      screens: {
        'mobile': '320px',
        //=> @media (min-width: 320px) { ... }

        'bigMobile':'425px',
        //=> @media (min-width: 425px) { ... }
        
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
  },
},
  plugins: ['@tailwindcss/line-clamp'],
}

