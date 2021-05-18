import React , { useState, useEffect} from 'react';
import "./App.css";
import Recipe from './Recipe';


const App = () => {
  const APP_ID = "996f71eb";
  const APP_KEY = "152d70cb1a1c9e66a19d438977900521";
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);



  const getRecipes = async () => {
   const response = await fetch (
     `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
   const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);


  };
  
  
  return(
    <div className="App">
      <form action="" className="form">
        <input type="text" />
        <button type="submit"> search</button>
      </form>
      {recipes.map(recipe => (
          <Recipe 
          key = {recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image ={recipe.recipe.image}/>


        ))
      }
      
    </div>
  );
};


export default App;