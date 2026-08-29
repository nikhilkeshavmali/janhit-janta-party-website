import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Initiatives from "./pages/Initiatives";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initiatives />} />
      </Routes>
    </Router>
  );
}

export default App;