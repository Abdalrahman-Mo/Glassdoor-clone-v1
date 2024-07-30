import Nav from "./components/Nav";
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route index path="/" element={<Jobs />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companies" element={<Companies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
