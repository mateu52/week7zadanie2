import React from 'react';
import UserList from './UserList';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";

function App1(){

    return(
        <Router>
            <div>
                <Routes>
                    <Route patch="/">
                        <UserList />
                    </Route>
                </Routes>
            </div>
        </Router>
        
    );
}
export default App1;