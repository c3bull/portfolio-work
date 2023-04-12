import {useState} from 'react'
import './index.css'
import Header from "./components/Header.jsx";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {

    return (
        <div>
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
