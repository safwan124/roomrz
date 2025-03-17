import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Hotel from "./pages/hotel/Hotel"
import Enquiry from "./pages/enquiry/Enquiry"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
