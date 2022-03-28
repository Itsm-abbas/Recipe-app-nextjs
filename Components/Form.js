import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import style from "../styles/form.module.css";
import { useRouter } from "next/router";
const Form = ({ path, placeholder, IsSmall }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    router.push(`${path}?search=${search}`);
  };
  return (
    <div
      className={`${style.form_wrapper} ${IsSmall ? "form_wrapper_small" : ""}`}
    >
      <form onSubmit={formHandler}>
        <input
          className={style.input}
          type="text"
          name="search"
          value={search}
          placeholder={placeholder}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={`${style.btn} btn`} type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Form;
