import React from "react";
import {NavLink} from "react-router-dom";
import {defaultImage} from "../../utility/utility";
import style from "./WeaponTable.module.css"

function WeaponTable(props) {
    const {weapons} = props;

    const weaponTableRow = weapons.map((weapon) => {
        return (
            <tr key={weapon.uniqueName}>
                <td>{weapon.name}</td>
                <td>
                    <img style={{ width: '14rem' }} onError={(event) => defaultImage(event)} src={`https://cdn.warframestat.us/img/${weapon.imageName}`}
                         loading="lazy"
                    />
                </td>
                <td>{weapon.category}</td>
                <td>{weapon.type}</td>
                <td><NavLink className={style.action} to={`/weapon/${weapon.name}`}>Details</NavLink></td>
            </tr>
        )
    });

    return (
        <table className={`table ${style.table}`}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Category</th>
                <th>Type</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {weaponTableRow}
            </tbody>
        </table>
    )
}

export default WeaponTable;
