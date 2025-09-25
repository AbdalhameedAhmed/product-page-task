import MainPage from "@/pages/MainPage";
import "./App.css";
import BreadCrumbs from "./components/BreadCrumbs";
import Header from "./components/Header";
function App() {
  return (
    <>
      <MainPage />
      <Header />
      <BreadCrumbs
        pathArr={[
          "Homepage",
          "Women",
          "Women's Shirts & Tops",
          "Long Sleeve Overshirt, Khaki, 6",
        ]}
      />
    </>
  );
}

export default App;
