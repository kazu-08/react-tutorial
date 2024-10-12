import Header from "./components/Header";
import Main from "./components/Main";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Nabimenu from "./components/Nabimenu";

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Welcome/>
      <Nabimenu/>
      <Footer />
    </div>
  );
}