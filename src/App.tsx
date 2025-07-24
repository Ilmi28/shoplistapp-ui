import {Routes, Route} from "react-router-dom";
import {Home} from "@/components/pages/home.tsx";
import {Login} from "@/components/pages/login.tsx";
import {Register} from "@/components/pages/register.tsx";

function App() {

    return (
    <>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
        </Routes>
    </>
  )
}

export default App
