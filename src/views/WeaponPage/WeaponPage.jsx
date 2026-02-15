import { useState, useMemo } from "react";
import useWeaponViewModel from "../../viewModels/WeaponViewModel/WeaponViewModel";
import clsx from "clsx";
import style from "./WeaponPage.module.css";
import WeaponCardsGrid from "../../components/WeaponCardsGrid/WeaponCardsGrid";
import WeaponTable from "../../components/WeaponTable/WeaponTable";
import Loading from "../../components/Loading/Loading";

const escapeRegExp = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function searchWeapon(weaponsObj, search) {
  const all = Object.values(weaponsObj ?? {});

  const q = String(search ?? "").trim();
  if (!q) return all;

  const re = new RegExp(escapeRegExp(q), "i");
  return all.filter((w) => re.test(w?.name ?? ""));
}

export default function WeaponPage() {
  const [displayGrid, setDisplayGrid] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { weapon, loading } = useWeaponViewModel();

  const weaponArray = useMemo(
    () => searchWeapon(weapon, searchTerm),
    [weapon, searchTerm]
  );

  if (loading) return <Loading />;

  return (
    <div className="container">
      <div className="input-group mb-3">
        <button type="button" className="input-group-text" onClick={() => setSearchTerm(inputValue)}>Search</button>
        <button type="button" className="input-group-text" onClick={() => { setInputValue(""); setSearchTerm(""); }}>Clear</button>
        <input type="text" className="form-control" placeholder="Weapon name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </div>
      <div className="row justify-content-center">
        <div className="col">
          <div className={style.switch}>
            <div className={clsx(style.option, { [style.active]: displayGrid })} onClick={() => setDisplayGrid(true)}>
              Grid
            </div>
            <div className={clsx(style.option, { [style.active]: !displayGrid })} onClick={() => setDisplayGrid(false)}>
              Table
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col">
          {displayGrid ? (
            <WeaponCardsGrid  weapons={weaponArray} col={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}/>
          ) : (
            <WeaponTable weapons={weaponArray} />
          )}
        </div>
      </div>
    </div>
  );
}