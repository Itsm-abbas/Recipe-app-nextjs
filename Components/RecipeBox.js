import React from "react";
import Image from "next/image";
import style from "../styles/recipe.module.css";
import Link from "next/link";
const RecipeBox = ({ item }) => {
  const uri = item.uri;
  const id = uri.slice(uri.indexOf("_") + 1);
  return (
    <div className={style.recipeBox_wrapper}>
      <Image
        src={item.image}
        height="250px"
        width="250px"
        alt={item.label}
        layout="responsive"
      />
      <div className={style.recipe_detail}>
        <h4>
          {item.label}({item.cuisineType})
        </h4>
        <p>Meal Type : {item.mealType}</p>
        <Link href={`/recipeDetail?id=${id}`}>
          <a className={style.more_btn}>See more</a>
        </Link>
      </div>
    </div>
  );
};

export default RecipeBox;
