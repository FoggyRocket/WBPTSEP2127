import { Routes, Route } from "react-router-dom";
import {Home,LogIn,Signup,ProtectedPage} from './pages'


function RootNavigation(props){
    return(
        <Routes>
            <Route path="/" element={<Home {...props}/>} />
            <Route path="/signup" element={<Signup {...props}/>} />
            <Route path="/login" element={<LogIn {...props}/>} />
            <Route path="/protected" element={<ProtectedPage {...props}/>} />
        </Routes>
    )
    
}


export default RootNavigation;