import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
import List from './List';
import "./zad2.css";
function Home(){
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
            <div className="bodyApp">
                        <List
                            userData={users} 
                        />
            </div>
    )
    
}
export default Home;