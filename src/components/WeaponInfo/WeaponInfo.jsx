import React from "react";
import style from "./WeaponInfo.module.css"

const WeaponInfo = ({ weapon }) => {
    return (
        <div className="justify-content-center text-center">
            <h2>{weapon.name}</h2>
            <h4>{weapon.category}</h4>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className={style.weaponImage} src={`https://cdn.warframestat.us/img/${weapon.imageName}`} loading="lazy" />
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                    {
                        Object.entries(weapon.damage)
                            .filter(([, value]) => value !== 0)
                            .map(([type, value]) => (
                            <div className="row" key={type}>
                                <div className="col-sm">
                                    <img className={style.damageIcon} src={`/img/${type}.png`} />
                                </div>
                                <div className="col-sm text-start">
                                    <h4>
                                        {type.toUpperCase()}: {Number(value).toFixed(2)}
                                    </h4>
                                </div>
                            </div>
                        ))
                    }   
                    </div>
                </div>
                <div className="row">
                    <h4>
                        {weapon.description}
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default WeaponInfo;