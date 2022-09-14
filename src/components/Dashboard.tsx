import React from "react";
import Cover from "./Cover";
import Collection from "./photo/Collection";
import Header from "./header/Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Cover />
      <Collection />
    </div>
  );
};

export default Dashboard;
