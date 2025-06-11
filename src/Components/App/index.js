import React from "react";
import NavBar from "../Header/NavBar";
import Header from "../Header";
import Footer from "../Footer";

export default function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <main>
        <h1>Test</h1>
      </main>
      <Footer />
    </div>
  );
}
