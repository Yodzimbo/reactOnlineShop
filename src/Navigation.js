import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => 
<nav>
    <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/cart'>Carte Page</NavLink></li>
    </ul>
</nav>

export default Navigation;