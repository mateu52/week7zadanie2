import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
import UserDetail from '../UserDetail';
function List({userData}){
    const checkVal = (value, text) => {
        if (!value) {
            return text;
        }
        return value;
    }
    return(
        <div className="userCss">
            <Router>
             {userData.map((user) => {
                return (
                   
                        <div key={user.login.uuid} className="userMap">
                                <div className="inMap">    
                                    <p><img alt="foto" src={user.picture.large}></img></p>
                                    <p>
                                    <Link to="/UserDetail">
                                        {checkVal(user.name.first, "Nie podano imienia")} 
                                        {checkVal(user.name.last, "Nie podano nazwiska")}
                                    </Link>
                                    </p>
                                    <p>
                                        {checkVal(user.location.street.name, "brak")}: 
                                        {checkVal(user.location.street.number, "brak")}
                                    </p>
                                    <p>{user.location.city}</p>
                                    <p>{user.email}</p>
                                    <p>{new Date(user.registered.date).toDateString()}</p>
                                </div>
                                
                        </div>
                                    
                   
                )
            })} 
                <Routes> // do naprawy
                    <Route path="UserDetail" element={<UserDetail/>}/>
                </Routes>
            </Router>
        </div>
    )
    
}
export default List;