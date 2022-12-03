import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FirstArticle from "./components/FirstArticle";
import Footer from "./components/Footer";
import Ad from "./components/Ad";

function App() {
  return (
    <div className="App">
       {/* Navbar */}
       <Navbar />

      {/* Hero */}
      <Hero />

      {/* Another Add */}
      <Ad />

      {/* NEW AT MUSCLE & STRENGTH */}
      <FirstArticle />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
