import { LocationId } from '@darkforest_eth/types';
import React, { useCallback } from 'react';
import { BroadcastPane, BroadcastPaneHelpContent } from '../Panes/BroadcastPane';
import { HatPane } from '../Panes/HatPane';
import {
  ManagePlanetArtifactsHelpContent,
  ManagePlanetArtifactsPane,
  PlanetInfoHelpContent,
} from '../Panes/ManagePlanetArtifacts/ManagePlanetArtifactsPane';
import { PlanetInfoPane } from '../Panes/PlanetInfoPane';
import { UpgradeDetailsPane, UpgradeDetailsPaneHelpContent } from '../Panes/UpgradeDetailsPane';
import {
  TOGGLE_BROADCAST_PANE,
  TOGGLE_HAT_PANE,
  TOGGLE_PLANET_ARTIFACTS_PANE,
  TOGGLE_PLANET_INFO_PANE,
  TOGGLE_UPGRADES_PANE,
} from '../Utils/ShortcutConstants';
import { ModalHandle } from '../Views/ModalPane';
import { MaybeShortcutButton } from './MaybeShortcutButton';

export function OpenPaneButton({
  modal,
  title,
  element,
  helpContent,
  shortcut,
}: {
  modal: ModalHandle;
  title: string;
  element: () => React.ReactElement;
  helpContent?: React.ReactElement;
  shortcut?: string;
}) {
  const open = useCallback(() => {
    modal.push({
      title,
      element,
      helpContent,
    });
  }, [title, element, helpContent, modal]);

<<<<<<< HEAD
  useOnUp(shortcutKey, open);

  return (
    <AlignCenterHorizontally style={{ width: '100%' }} key={shortcutKey}>
      <ShortcutButton
        style={{ flexGrow: 1 }}
        wide
        onClick={open}
        shortcutKey={shortcutKey}
        shortcutDisabled={shortcutDisabled}
      >
        <CenteredText>{title}</CenteredText>
      </ShortcutButton>
    </AlignCenterHorizontally>
=======
  return (
    <MaybeShortcutButton
      size='stretch'
      onClick={open}
      onShortcutPressed={open}
      shortcutKey={shortcut}
      shortcutText={shortcut}
    >
      {title}
    </MaybeShortcutButton>
>>>>>>> slytherin
  );
}

export function OpenHatPaneButton({
  modal,
  planetId,
}: {
  modal: ModalHandle;
  planetId: LocationId | undefined;
}) {
  return (
    <OpenPaneButton
      modal={modal}
      title='Hat'
      shortcut={TOGGLE_HAT_PANE}
      element={() => <HatPane modal={modal} initialPlanetId={planetId} />}
    />
  );
}

export function OpenBroadcastPaneButton({
  modal,
  planetId,
}: {
  modal: ModalHandle;
  planetId: LocationId | undefined;
}) {
  return (
    <OpenPaneButton
      modal={modal}
      title='Broadcast'
      shortcut={TOGGLE_BROADCAST_PANE}
      element={() => <BroadcastPane modal={modal} initialPlanetId={planetId} />}
      helpContent={BroadcastPaneHelpContent()}
    />
  );
}

export function OpenUpgradeDetailsPaneButton({
  modal,
  planetId,
}: {
  modal: ModalHandle;
  planetId: LocationId | undefined;
}) {
  return (
    <OpenPaneButton
      modal={modal}
      title='Upgrade'
      shortcut={TOGGLE_UPGRADES_PANE}
      element={() => <UpgradeDetailsPane modal={modal} initialPlanetId={planetId} />}
      helpContent={UpgradeDetailsPaneHelpContent()}
    />
  );
}
export function OpenManagePlanetArtifactsButton({
  modal,
  planetId,
}: {
  modal: ModalHandle;
  planetId: LocationId | undefined;
}) {
  return (
    <OpenPaneButton
      modal={modal}
      title='Inventory'
      shortcut={TOGGLE_PLANET_ARTIFACTS_PANE}
      element={() => <ManagePlanetArtifactsPane modal={modal} initialPlanetId={planetId} />}
      helpContent={ManagePlanetArtifactsHelpContent()}
    />
  );
}

export function OpenPlanetInfoButton({
  modal,
  planetId,
}: {
  modal: ModalHandle;
  planetId: LocationId | undefined;
}) {
  return (
    <OpenPaneButton
      modal={modal}
      title='Info'
      shortcut={TOGGLE_PLANET_INFO_PANE}
      element={() => <PlanetInfoPane initialPlanetId={planetId} />}
      helpContent={PlanetInfoHelpContent()}
    />
  );
}
