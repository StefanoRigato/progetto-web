export class WeaponModel {
  async fetchWeapon(name = "") {
    const response = await fetch(`https://api.warframestat.us/weapons/${name}`);
    const result = await response.json();
    
    return result;
  }

  async fetchWeaponQuery(query) {
    const response = await fetch(`https://api.warframestat.us/weapons/search/${query}`);
    const result = await response.json();
    
    return result;
  }
}