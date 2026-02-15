import React, {useState} from 'react';
import style from "./Footer.module.css"

function Footer() {
    return (
        <footer className={style.footer} >
            <div className="container-fluid text-center">
                <h3>API utilizzate: <a href='https://docs.warframestat.us/' className={style.link}>warframestat</a></h3>
            </div>
        </footer>
    )
}

export default Footer;