import About from "./components/About";
import Footer from "./components/Footer";
import Homesection from "./components/Homesection";
import LaunchingPage from "./components/LaunchingPage";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Homesection />
      <About />
      <LaunchingPage />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default AppLayout;
