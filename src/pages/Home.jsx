import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";

export const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Yummy Food</h1>
          <p>Best food in Lagos</p>
          <Link to={"/menu"}>
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
