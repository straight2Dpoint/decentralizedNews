import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SubmitNews from "./components/SubmitNews";
import NewsCard from "./components/NewsCard";
import VoteSystem from "./components/VoteSystem";
import { NewsProvider } from "./context/NewsContext";

const App = () => {
  return (
    <NewsProvider>
      <div className="app">
        <Navbar />
        <main>
          <SubmitNews />
          <VoteSystem />
          <NewsCard />
        </main>
        <Footer />
      </div>
    </NewsProvider>
  );
};

export default App;