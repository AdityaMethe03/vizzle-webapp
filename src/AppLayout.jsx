import { useRef, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Homesection from "./components/Homesection";
import LaunchingPage from "./components/LaunchingPage";
import Navbar from "./components/Navbar";
import Faq from "./components/Faq";

function AppLayout() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const launchingRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div>
      <Navbar />
      <Homesection
        launchingRef={launchingRef}
        aboutRef={aboutRef}
        setIsFormOpen={setIsFormOpen}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={launchingRef}>
        <LaunchingPage isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      </div>
      <Faq />
      <Footer />
    </div>
  );
}

export default AppLayout;
