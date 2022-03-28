import React from "react";
import Form from "../Components/Form";
import Image from "next/image";
import style from "../styles/foodDb.module.css";
const FoodDatabase = ({ data }) => {
  return (
    <>
      <Form placeholder={"Search food"} path={"/foodDb"} IsSmall="true" />
      <section className={style.food_container}>
        <div className={style.food_wrapper}>
          {data.map((item) => {
            return Object.keys(item).map((key, index) => {
              const value = item[key];
              return (
                <>
                  <div className={style.food_label}>{value.label} </div>
                  <div className={style.food_image}>
                    <Image
                      src={value.image}
                      width="750px"
                      height="500px"
                      alt={value.label}
                    />
                  </div>
                  <div className={style.food_detail}>
                    <div>
                      <h2>💥 Category</h2>
                      <ul>
                        <li>{value.category}</li>
                      </ul>
                    </div>
                    <div className={style.food_nutrients}>
                      <h2>💥 Nutrients</h2>
                      <ul>
                        {Object.keys(value.nutrients).map((key, index) => {
                          return (
                            <li key={index}>
                              {key} : {value.nutrients[key]}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </>
              );
            });
          })}
        </div>
      </section>
    </>
  );
};

export default FoodDatabase;
export const getServerSideProps = async (context) => {
  const api_id = process.env.FOOD_API_ID;
  const api_key = process.env.FOOD_API_KEY;
  const foodname = context.query.search || "apple";
  const data = await fetch(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=${api_id}&app_key=${api_key}&ingr=${foodname}&nutrition-type=cooking`
  );
  const result = await data.json();
  return {
    props: {
      data: result.parsed,
    },
  };
};
