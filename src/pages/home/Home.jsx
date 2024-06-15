import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Nav from "../../shared/Nav";
import UpcomingTests from "./UpcomingTests";
import Footer from "../../shared/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Health Hub | Home</title>
      </Helmet>
      <div className="h-20">
        <Nav />
      </div>
      <Banner />
      <UpcomingTests />
      <Footer />
    </div>
  );
};

export default Home;
