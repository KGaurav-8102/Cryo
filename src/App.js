import Starter from './sections/Starter';
import About from '../src/sections/About';
import Why from '../src/sections/why';
import Testimonials from '../src/sections/Testimonials';
import Blogs from '../src/sections/Blogs';
import Footer from '../src/sections/Footer';
import ScrollToTop  from '../src/components/ScrollToTop';
import './App.css';

function App() {
  return (
    <>
    <ScrollToTop />
    <Starter />
    <About />
    <Why />
    <Testimonials />
    <Blogs />
    <Footer />
    </>
  );
}

export default App;
