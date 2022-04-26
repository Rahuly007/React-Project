import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Components/Home'
import { Users } from '../Components/Users'

export const Router = () => {
    return (
        <div>
            {/* <!-- As a link --> */}
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
            </nav>

            {/* <!-- As a heading --> */}
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Navbar</span>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user/:id' element={<Users />} />
            </Routes>
        </div>
    )
}
