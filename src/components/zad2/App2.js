import React from 'react';
import Home from './Home';
import List from './List';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";

function App2(){

    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/list">List</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/list" element={<List/>} />
                </Routes>
            </div>

        </Router>
        
        
    );
}
export default App2;