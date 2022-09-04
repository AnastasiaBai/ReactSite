import React from "react";
import Category from "../components/Category";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Promo from "../components/Promo";
 export default function Home(){
    return(
      <Layout>
        <Category/>
        <Promo/>
        <Main/>
      </Layout>
    );
 }