import React, { useState } from "react";
import { useRouter } from "next/router";
import style from "../styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  return (
    <header className={style.header}>
      <div className={style.nav_wrapper}>
        <div className={style.nav_left}>
          <Image src={"/logo.svg"} width="150px" height="35px" alt="logo" />
        </div>
        <div
          className={`${style.nav_right} ${
            toggle ? "navbar_visible__VU3jy" : ""
          }`}
        >
          <ul className={style.nav_right_list}>
            <Link href={"/"} passHref>
              <li
                className={`${router.pathname == "/" ? "active" : ""}`}
                onClick={() => setToggle(false)}
              >
                Home
              </li>
            </Link>
            <Link href={"/foodDb"} passHref>
              <li
                className={router.pathname == "/foodDb" ? "active" : ""}
                onClick={() => setToggle(false)}
              >
                Food Database
              </li>
            </Link>
          </ul>
        </div>
        <div className={style.bars_wrapper}>
          {!toggle ? (
            <FaBars onClick={() => setToggle(true)} />
          ) : (
            <FaTimes onClick={() => setToggle(false)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
