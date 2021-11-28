import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
//import UserDetail from './UserDetail';
function App2(){

    return(
        <Router>
            <div>
                <h3>
                    <Link to="/" className="routerLink">Lista</Link>
                </h3>

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route path="/user" element={<UserDetail />} /> */}
                </Routes>    
                
            </div>
        </Router>
    );
}
export default App2;