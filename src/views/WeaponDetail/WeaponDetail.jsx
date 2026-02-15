import React from 'react';
import useWeaponViewModel from '../../viewModels/WeaponViewModel/WeaponViewModel';
import WeaponInfo from '../../components/WeaponInfo/WeaponInfo';
import Loading from '../../components/Loading/Loading'
import { useParams } from 'react-router-dom';

function WeaponDetail() {
  let {name} = useParams();

  const { weapon, loading } = useWeaponViewModel(name);

  if (loading) {
    return <Loading/>;
  }

  return <WeaponInfo weapon={weapon} />;
};

export default WeaponDetail;