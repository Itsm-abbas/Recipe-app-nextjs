import Head from "next/head";
import Form from "../Components/Form";
import Recipe from "../Components/Recipe";
export default function Home({ data, search }) {
  return (
    <>
      <Head>
        <title>DreamRecipe -- {search}</title>
      </Head>
      <Form placeholder={"Search recipe"} path={"/"} />
      <Recipe data={data} search={search} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const search = context.query.search || "chicken";
  const api_id = process.env.RECIPE_API_ID;
  const api_key = process.env.RECIPE_API_KEY;
  const data = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${api_id}&app_key=${api_key}`
  );
  const result = await data.json();
  return {
    props: {
      data: result.hits,
      search,
    },
  };
};
