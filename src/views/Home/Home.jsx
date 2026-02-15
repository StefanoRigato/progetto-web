import React from "react";
import {NavLink} from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import style from "./Home.module.css"

function Home() {

    return (
        <div className="container">
            <div className="row justify-content-center text-center">
                <h2>Progetto Applicazioni Web</h2>
                <h3>Rigato Stefano</h3>
                <Loading/>
                <NavLink to={`/weapon/`}>
                    <h4 className={style.link}>Esplora l'arsenale di Warframe</h4>
                </NavLink>
            </div>
        </div>
    )
}

export default Home;