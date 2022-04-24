import React from "react";
import style from "../styles/recipe.module.css";
import RecipeBox from "./RecipeBox";
const Recipe = ({ data, search }) => {
  return (
    <>
      <div className={style.heading}>{search} recipes</div>
      <div className={style.recipeBox_container}>
        {data.map((item) => {
          return <RecipeBox key={item.recipe.uri} item={item.recipe} />;
        })}
      </div>
    </>
  );
};

export default Recipe;
