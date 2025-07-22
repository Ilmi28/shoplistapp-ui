import {Routes, Route} from "react-router-dom";
import {Home} from "@/components/pages/home.tsx";
import {Login} from "@/components/pages/login.tsx";

function App() {

    return (
    <>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
        </Routes>
    </>
  )
}

export default App
