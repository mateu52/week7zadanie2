import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
import UserDetail from '../UserDetail';
import Home from './Home';
function List({userData}){
    const [idUser,setIdUser] = useState(null);
    const checkVal = (value, text) => {
        if (!value) {
            return text;
        }
        return value;
    }
    const handleId=(event) => {
        setIdUser(event);
    }
    return(
        <div className="userCss">
             {userData.map((user) => {
                return (
                    <div>
                        <div key={user.login.uuid} className="userMap">
                                <div className="inMap">    
                                    <p><img alt="foto" src={user.picture.large}
                                        onClick={() => {handleId(user.login.uuid)}}
                                    ></img></p>
                                    <p>
                                        {checkVal(user.name.first, "Nie podano imienia")} 
                                        {checkVal(user.name.last, "Nie podano nazwiska")}
                                    
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
                    
                    
                    </div>

                                    
                   
                )
            })}

        </div>
    )
    
}
export default List;