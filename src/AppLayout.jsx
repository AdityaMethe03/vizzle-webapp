import About from "./components/About";
import Footer from "./components/Footer";
import Homesection from "./components/Homesection";
import LaunchingPage from "./components/LaunchingPage";
import Navbar from "./components/Navbar";
import Faq from "./components/Faq";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Homesection />
      <About />
      <LaunchingPage />
      <Faq />
      <Footer />
    </div>
  );
}

export default AppLayout;
