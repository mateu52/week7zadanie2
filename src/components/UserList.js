import React,{useState, useEffect} from 'react';
import User from './User';
import './UserList.css';
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
        <div className="bodyApp">
                <User
                    userData={users} 
                />
        </div>
    )
}

export default UserList;