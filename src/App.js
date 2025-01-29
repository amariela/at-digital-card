import "./styles.css";
import Home from "./Home";
import About from "./About";
import Navigation from "./components/Navigation";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";


export default function App() {
    return (
        <div className="App h-100 d-flex flex-column justify-content-between align-items-center p-4">
            <Navigation />
            <Container className="my-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/experience" element={<Experience />} />*/}
                    <Route path="/project" element={<Project />} /> 
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Container>


        </div>
    );
}
