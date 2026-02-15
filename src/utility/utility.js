import Lotus from "../assets/img/lotus.png";

export const defaultImage = (onErrorEvent) =>  onErrorEvent.target.src = Lotus;

/*
function filterWeaponsByNameObj(weaponsObj, search) {
    const q = search.trim();
    if (!q) return weaponsObj;

    const re = new RegExp(escapeRegExp(q), "i");

    return Object.fromEntries(
        Object.entries(weaponsObj).filter(([, w]) => re.test(w?.name ?? ""))
    );
}

export const queryWeapon = (weapon, query) => {
    //const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // escape user input
    return Object.values(filterWeaponsByNameObj(weapon, query));
}
    */