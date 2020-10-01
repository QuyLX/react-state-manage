import React, { useContext } from 'react';
import style from './nav.module.css';
import { MovieContext } from './MovieContext';

function Nav() {
    // sử dụng usecontext để sử dụng data từ value,
    // Sử dụng MovieContext nên import
    const [film] = useContext(MovieContext)
    return (
        <div className={style.nav}>
            <h3>Quy LX</h3>
            <p>List of Movies: {film.length}</p>
        </div>
    );
}
export default Nav;