import React, { useState } from 'react';
import styled from 'styled-components';

import dfstyles from '../../Styles/dfstyles';
import { getOrdenSettings, OrdenSettings, setOrdenSettings } from '../../Utils/OrdenUtils';
import { ModalHook, ModalName, ModalPane } from '../../Views/ModalPane';
import { Padded } from '../../Components/CoreUI';

const HelpContent = styled(Padded)`
  width: 300px;
  height: 300px;
  max-height: 500px;
  max-width: 500px;
  overflow-y: scroll;
  text-align: justify;
  color: ${dfstyles.colors.text};
`;

const CheckboxGroup = styled(Padded)`
  color: ${dfstyles.colors.text};
`;

export function OrdenPane({ hook, onUpdateOrdenSettings }: { hook: ModalHook, onUpdateOrdenSettings: (settings: OrdenSettings ) => void }) {
  const [settings, setSettings] = useState(getOrdenSettings());

  const handleSettingChange = (settingName: string, isSettingChecked: boolean) => {
    const updatedSettings = {...settings};
    
    updatedSettings[settingName] = !isSettingChecked;
    
    setSettings(updatedSettings);
    setOrdenSettings(updatedSettings);
    onUpdateOrdenSettings(updatedSettings);
  }

  return (
    <ModalPane hook={hook} title='Orden Pane' name={ModalName.OrdenPane}>
      <HelpContent>
        {
          Object.entries(settings).map( ([name, isShow]) => (
              <CheckboxGroup key={name}>
                <label>
                  { name } <input type='checkbox' checked={settings[name]} onChange={() => handleSettingChange(name, isShow)} />
                </label>
              </CheckboxGroup>
            )
          )
        }
      </HelpContent>
    </ModalPane>
  );
}
