import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Sigin from "./pages/Sigin"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./componets/Header"

export default function App() {
  return <BrowserRouter>
  {/*header*/}
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/sign-in" element={<Sigin/>}></Route>
    <Route path="/sign-up" element={<Signup/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
}

