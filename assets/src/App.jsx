import Header from "./components/Header";
import Main from "./components/Main";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Nabimenu from "./components/Nabimenu";

export default function App() {
  return (
    <div>
    <div class="FlexBox1">
      <Header class="flex-item11"/>
      <Nabimenu class="flex-item12"/>
    </div>
    <div class="FlexBox2">
      <Welcome class="flex-item21"/>
      <Main class="flex-item22"/>
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
}