import React from "react";
import Head from "next/head";
import Image from "next/image";
import style from "../styles/recipeDetail.module.css";
import { FaStar } from "react-icons/fa";
const Detail = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.label} Recipe</title>
      </Head>
      <section className={style.recipe_container}>
        <div className={style.recipe_wrapper}>
          <div className={style.recipe_label}>{data.label}</div>
          <div className={style.recipe_header}>
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="rating">
              {Math.floor(Math.random() * 1000)} ratings
            </div>
            <div className="mealtype">{data.mealType}</div>
            <div className="cuisinetype">{data.cuisineType}</div>
          </div>
          <div className={style.recipe_image}>
            <Image
              className={style.recipe_images}
              src={data.image}
              width="750px"
              height="500px"
              alt={data.label}
            />
          </div>
          <div className={style.recipe_detail}>
            <div className={style.recipe_ingredients}>
              <h2>💥 Ingredients</h2>
              <ul>
                {data.ingredientLines.map((item) => {
                  return <li key={data.uri}>{item}</li>;
                })}
              </ul>
            </div>
            <div>
              <h2>💥 Calories</h2>
              <ul>
                <li>{data.calories}</li>
              </ul>
            </div>
            <div>
              <h2>💥 Weight</h2>
              <ul>
                <li>{data.totalWeight}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const api_key = process.env.API_KEY;
  const api_id = process.env.API_ID;
  const data = await fetch(
    `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${api_id}&app_key=${api_key}`
  );
  const result = await data.json();
  return {
    props: {
      data: result.recipe,
    },
  };
};
