import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul className = 'row nav'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/characters">Characters</Link></li>
                <li><Link to="/fish">Fish</Link></li>
                <li><Link to="/bugs">Bugs</Link></li>
                <li><Link to="/seacreatures">Sea Creatures</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar