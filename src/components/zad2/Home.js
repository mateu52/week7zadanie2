import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";

function Home(){

    return(
            <div>
                <h1>Home</h1>
                <Link to="/list">List</Link>
            </div>
    );
}
export default Home;