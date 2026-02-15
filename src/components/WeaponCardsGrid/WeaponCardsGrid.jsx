import React from "react";
import WeaponCard from "../WeaponCard/WeaponCard";

function WeaponCardsGrid(props) {
    const {weapons, col} = props;

    const weaponCardsCol = weapons.map((weapon) => {
        return (
            <div key={weapon.uniqueName} className="col">
                <WeaponCard
                    name={weapon.name}
                    imageName={weapon.imageName}
                    category={weapon.category}
                />
            </div>
        )
    });

    return (
        <div className={`row 
                row-cols-${col.xs}
                row-cols-sm-${col.sm}
                row-cols-md-${col.md}
                row-cols-lg-${col.lg}
                row-cols-xl-${col.xl}
        `}>
            {weaponCardsCol}
        </div>
    )
}

export default WeaponCardsGrid;
