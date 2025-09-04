
// import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import {GitHubProvider} from "./context/github/GitHubContext";

const App: React.FC = () => {
  return (
    <>
     <GitHubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <NavBar />
          <main className="container mx-auto px-3 pb-8">
            <Routes>
              <Route path="/" element= {<Home />}/>
              <Route path="/about" element= {<About />}/>
              <Route path="/*" element= {<NotFound />}/>
            </Routes>
         </main>
          <Footer />
        </div>
      </Router>
    </GitHubProvider>
    </>
  );
  
}



export default App
