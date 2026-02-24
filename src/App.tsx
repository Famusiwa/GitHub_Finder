// import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import { GitHubProvider } from "./context/github/GitHubContext";
import { AlertProvider } from "./context/alert/AlertContext";

const App = () => {
  return (
    <>
      <GitHubProvider>
        <AlertProvider>
          <Router>
            <div className="flex flex-col justify-between h-screen">
              <NavBar title="GitHub Finder" />
              <main className="container mx-auto px-3 pb-8">
                <Alert />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/user/:login" element={<User />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </main>
              {/* <div className="text-center text-sm text-gray-500">
                API URL: {import.meta.env.VITE_API_URL}
              </div> */}
              <Footer />
            </div>
          </Router>
        </AlertProvider>
      </GitHubProvider>
    </>
  );
};

export default App;
