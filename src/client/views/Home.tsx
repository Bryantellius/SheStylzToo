import * as React from "react";

const Home: React.FC<IHomeProps> = () => {
  return (
    <main className="container">
      <div className="test my-2 shadow bg-dark"></div>
      <div className="test my-2 shadow bg-dark"></div>
      <div className="test my-2 shadow bg-dark"></div>
      <div className="test my-2 shadow bg-dark"></div>
      <div className="test my-2 shadow bg-dark"></div>
    </main>
  );
};

export interface IHomeProps {}

export default Home;
