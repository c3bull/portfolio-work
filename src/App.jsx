import './index.css'
import Header from "./components/Header.jsx";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Stack/>
            <Projects/>
            <Experience/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
