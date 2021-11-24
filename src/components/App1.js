import React from 'react';
import UserList from './UserList';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";

function App1(){

    return(
        
            <div>
                <h1>User list</h1>
                <UserList />
                
            </div>
        
        
    );
}
export default App1;