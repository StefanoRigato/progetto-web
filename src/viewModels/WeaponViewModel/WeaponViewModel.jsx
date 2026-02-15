import { useState, useEffect } from 'react';
import { WeaponModel } from '../../models/WarframeAPI/WeaponModel/WeaponModel';

const useWeaponViewModel = (name) => {
  const [weapon, setWeapon] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const weaponModel = new WeaponModel();

  const fetchWeaponItem = async () => {
    setLoading(true);
    const data = await weaponModel.fetchWeapon(name);
    setWeapon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchWeaponItem();
  }, [name]);

  return {
    weapon,
    loading
  };
};

export default useWeaponViewModel;