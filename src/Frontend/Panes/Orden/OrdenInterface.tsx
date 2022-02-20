import React, { useState } from 'react';
import styled from 'styled-components';

import dfstyles from '../../Styles/dfstyles';
import { Padded } from '../../Components/CoreUI';
import { OrdenSettings } from '../../Utils/OrdenUtils';
import { Highlighs } from './Components/Highlights';

const CheckboxGroup = styled(Padded)`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 999999;
  color: ${dfstyles.colors.text};
`;

export function OrdenInterface({ordenInterfaceSettings} : {ordenInterfaceSettings: OrdenSettings}) {
//   const [ordenInterface, setOrdenInterface] = useState(ordenInterfaceSettings);

  // const renderAllies = () => {
  //   return (
  //     <OrdenSettingsWrapper
  //       text='Show allies'
  //       handleChangeSetting={ () => handleChangeSetting('alliesShow') }
  //     >
  //     </OrdenSettingsWrapper>
  //   )
  // }

  return (
    ordenInterfaceSettings.highLightsShow ?  <Highlighs /> : null
  );
}
