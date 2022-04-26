import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export const Home = () => {
    const [user, setuser] = useState([]);
    const navigate = useNavigate();
    const getUser = () => {
        axios.get('http://localhost:3000/getAllUser').then((res) => {
            // console.log(res.data);
            setuser(res.data.data);
        })
    }
    useEffect(() => {
        getUser();
    }, [])

    
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        user.map((item) => {
                            return (
                                <tr>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td><button className='btn btn-danger' onClick={()=>{navigate(`/user/${item._id}`)}}>Get</button></td>
                                </tr>
                            )
                        })
                    }
                    {/* <th scope="row">1</th>

                        <td>Otto</td> */}

                </tbody>
            </table>
        </div>
    )
}
