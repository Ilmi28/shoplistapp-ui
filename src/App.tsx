import {Routes, Route} from "react-router-dom";
import {Home} from "@/components/pages/home.tsx";
import {Login} from "@/components/pages/login.tsx";
import {Register} from "@/components/pages/register.tsx";
import {About} from "@/components/pages/about.tsx";

function App() {

    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/about" Component={About} />
        </Routes>
  )
}

export default App
