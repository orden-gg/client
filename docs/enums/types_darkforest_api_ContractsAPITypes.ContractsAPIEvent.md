# Enumeration: ContractsAPIEvent

[\_types/darkforest/api/ContractsAPITypes](../modules/types_darkforest_api_ContractsAPITypes.md).ContractsAPIEvent

## Table of contents

### Enumeration members

- [ArrivalQueued](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#arrivalqueued)
- [ArtifactUpdate](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#artifactupdate)
<<<<<<< HEAD
- [LocationRevealed](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#locationrevealed)
=======
- [LobbyCreated](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#lobbycreated)
- [LocationRevealed](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#locationrevealed)
- [PauseStateChanged](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#pausestatechanged)
>>>>>>> slytherin
- [PlanetClaimed](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#planetclaimed)
- [PlanetTransferred](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#planettransferred)
- [PlanetUpdate](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#planetupdate)
- [PlayerUpdate](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#playerupdate)
- [RadiusUpdated](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#radiusupdated)
<<<<<<< HEAD
- [TxConfirmed](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#txconfirmed)
- [TxInitFailed](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#txinitfailed)
- [TxReverted](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#txreverted)
=======
- [TxCancelled](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#txcancelled)
- [TxConfirmed](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#txconfirmed)
- [TxErrored](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#txerrored)
- [TxPrioritized](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#txprioritized)
- [TxProcessing](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#txprocessing)
- [TxQueued](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#txqueued)
>>>>>>> slytherin
- [TxSubmitted](types_darkforest_api_ContractsAPITypes.ContractsAPIEvent.md#txsubmitted)

## Enumeration members

### ArrivalQueued

• **ArrivalQueued** = `"ArrivalQueued"`

---

### ArtifactUpdate

• **ArtifactUpdate** = `"ArtifactUpdate"`

---

<<<<<<< HEAD
=======
### LobbyCreated

• **LobbyCreated** = `"LobbyCreated"`

---

>>>>>>> slytherin
### LocationRevealed

• **LocationRevealed** = `"LocationRevealed"`

---

<<<<<<< HEAD
=======
### PauseStateChanged

• **PauseStateChanged** = `"PauseStateChanged"`

---

>>>>>>> slytherin
### PlanetClaimed

• **PlanetClaimed** = `"PlanetClaimed"`

---

### PlanetTransferred

• **PlanetTransferred** = `"PlanetTransferred"`

---

### PlanetUpdate

• **PlanetUpdate** = `"PlanetUpdate"`

---

### PlayerUpdate

• **PlayerUpdate** = `"PlayerUpdate"`

---

### RadiusUpdated

• **RadiusUpdated** = `"RadiusUpdated"`

---

<<<<<<< HEAD
=======
### TxCancelled

• **TxCancelled** = `"TxCancelled"`

The transaction was cancelled before it left the queue.

---

>>>>>>> slytherin
### TxConfirmed

• **TxConfirmed** = `"TxConfirmed"`

<<<<<<< HEAD
---

### TxInitFailed

• **TxInitFailed** = `"TxInitFailed"`

---

### TxReverted

• **TxReverted** = `"TxReverted"`
=======
The transaction has been confirmed.

---

### TxErrored

• **TxErrored** = `"TxErrored"`

The transaction has failed for some reason. This
could either be a revert or a purely client side
error. In the case of a revert, the transaction hash
will be included in the transaction object.

---

### TxPrioritized

• **TxPrioritized** = `"TxPrioritized"`

The transaction is queued, but is prioritized for execution
above other queued transactions.

---

### TxProcessing

• **TxProcessing** = `"TxProcessing"`

The transaction has been removed from the queue and is
calculating arguments in preparation for submission.

---

### TxQueued

• **TxQueued** = `"TxQueued"`

The transaction has been queued for future execution.
>>>>>>> slytherin

---

### TxSubmitted

• **TxSubmitted** = `"TxSubmitted"`
<<<<<<< HEAD
=======

The transaction has been submitted and we are awaiting
confirmation.
>>>>>>> slytherin
