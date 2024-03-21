import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div className="container mx-auto">
      <Header></Header>
      {/* {navigation.state === "loading" ? (
        <p>loading.......</p>
      ) : (
        <Outlet></Outlet>
      )} */}
      {navigation.state === "loading" ? (
        <p>loading.........</p>
      ) : (
        <Outlet></Outlet>
      )}
      {/* <Outlet></Outlet> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
