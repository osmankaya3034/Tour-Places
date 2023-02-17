import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./helper/data.js";
import "./scss/App.scss"


function App() {
  return (
    <div >
      <Navbar />
      <Header />      
      <Card data={data} />      
      <Footer />
    </div>
  );
}

export default App;