import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Users = () => {
    let id = useParams().id
    const [user, setuser] = useState('')
    const getUser = () => {
        axios.get(`http://localhost:3000/getuser/${id}`).then((res) => {
            console.log(res.data.data);
            setuser(res.data.data)
        })
    }
    useEffect(() => {
        getUser();
    }, [])

    return (
        <div>
            <input value={user.name}></input>
        </div>
    )
}
