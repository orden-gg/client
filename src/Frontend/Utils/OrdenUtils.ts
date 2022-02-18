export const getOrdenSettings = (): Array<OrdenSettings> => {
  const settings = localStorage.getItem('ORDEN_SETTINGS');
  
  return settings ? JSON.parse(settings) as Array<OrdenSettings> : [];
}

// TODO consider to move to a better place
export interface OrdenSettings {
  key: string;
  text: string;
  isShow: boolean;
}

export const setOrdenSettings = (settings: Array<OrdenSettings>) => {
  return localStorage.setItem('ORDEN_SETTINGS', JSON.stringify(settings));
}
