import React,{useState, useEffect} from 'react';
import User from './User';
import './UserList.css';
import {
    BrowserRouter as Router,
    Routes,
    Route, Redirect,
    Link
  } from "react-router-dom";
function UserList(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then((response) => response.json())
            .then ((data) => {
                setUsers(data.results);
            })
            .catch(error => console.error(error))
    },[]);
    return (
        <Router>
        <div className="bodyApp">
            <Routes>
                <Route path="/users">
                    <User
                        userData={users} 
                    />
                </Route>
                <Route path="/">
                    <Link to="/users" />
                </Route>
            </Routes>
        </div>
        </Router>
    )
}

export default UserList;
