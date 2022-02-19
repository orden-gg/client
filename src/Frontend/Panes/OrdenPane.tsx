import React, { useState } from 'react';
import styled from 'styled-components';

import { ModalName } from '@darkforest_eth/types';

import dfstyles from '../Styles/dfstyles';
import { getOrdenSettings, setOrdenSettings } from '../Utils/OrdenUtils';
import { ModalPane } from '../Views/ModalPane';
import { Padded } from '../Components/CoreUI';
import { RECOMMENDED_MODAL_WIDTH } from '@darkforest_eth/constants';

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

export function OrdenPane({
    visible,
    onClose,
  }: {
    visible: boolean;
    onClose: () => void;
}) {
  const [settings, setSettings] = useState(getOrdenSettings());

  const handleSettingChange = (settingName: string, isSettingChecked: boolean) => {
    const updatedSettings = {...settings};
    
    updatedSettings[settingName].isShow = !isSettingChecked;
    
    setSettings(updatedSettings);
    setOrdenSettings(updatedSettings);
  }
  
  return (
    <ModalPane
        id={ModalName.Orden}
        title={'OrdenGG'}
        visible={visible}
        onClose={onClose}
        // helpContent={HelpContent}
        width={RECOMMENDED_MODAL_WIDTH}
    >
      <HelpContent>
        {
          Object.entries(settings).map(([key, item]) =>(
              <CheckboxGroup key={key}>
                <label>
                  { item.text } <input type='checkbox' checked={item.isShow} onChange={() => handleSettingChange(key, item.isShow)} />
                </label>
              </CheckboxGroup>
            )
          )
        }
      </HelpContent>
    </ModalPane>
  );
}
