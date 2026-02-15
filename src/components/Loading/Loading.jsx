import React from "react";
import style from "./Loading.module.css"
import Logo from "../../assets/img/lotus.png"

function Loading() {
    return (
        <div className="justify-content-center text-center">
            <img className={style.loading}src={Logo}></img>
        </div>
    )  
}

export default Loading