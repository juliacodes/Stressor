import React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import ClassGrid from "../components/ClassGrid";

function Home() {
  return (
    <Layout>
      <Navbar />
      <Main />
      <ClassGrid />
    </Layout>
  );
}

export default Home;
