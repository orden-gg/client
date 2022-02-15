import React, { useEffect, useState } from 'react';
import { EthAddress } from '@darkforest_eth/types';
import { EthConnection, weiToEth } from '@darkforest_eth/network';
import { WHITELIST_CONTRACT_ADDRESS } from '@darkforest_eth/contracts';

import styled, { css } from 'styled-components';

import dfstyles from '../Styles/dfstyles';
import { Table } from '../Views/Table';
import { getEthConnection, loadWhitelistContract } from '../../Backend/Network/Blockchain';

export default function WhitelistPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [ethConnection, setEthConnection] = useState<EthConnection | undefined>();
  const [addresses, setAddresses] = useState<Array<{ address: string, balance: number }>>([]);

  useEffect(() => {
    getEthConnection()
      .then(ethConnection => setEthConnection(ethConnection))
      .catch((e) => {
        alert('error connecting to blockchain');

        console.log(e);
      });
  }, []);

  useEffect(() => {
    const whitelistCallback = async () => {
      if (ethConnection) {
        const whitelist = await ethConnection.loadContract(
          WHITELIST_CONTRACT_ADDRESS,
          loadWhitelistContract
        );
    
        const whitelistAddresses = await whitelist.getAllWhitelistedAccounts();
        const addresses = [];

        for (let i = 0; i < whitelistAddresses.length; i++) {
          const balance = weiToEth(await ethConnection.loadBalance(whitelistAddresses[i] as EthAddress));

          addresses.push({ address: whitelistAddresses[i], balance });
        }
        setIsLoading(false);
        setAddresses(addresses);
      }
    }

    whitelistCallback();
  }, [ethConnection]);
  return <WhitelistContainer alignItems={ isLoading || addresses.length === 0 ? 'center' : 'initial' }>
  {
    isLoading && <span>Loading... (this may take a few seconds)</span>
  }
  {
    (!isLoading && addresses.length > 0) && <WhitelistTable rows={addresses}/>
  }
  {
    (!isLoading && addresses.length === 0) && <span>There are no whitelisted addresses yet</span>
  }
</WhitelistContainer>
}

function WhitelistTable({ rows }: { rows: Array<{ address: string, balance: number }> }) {
  return (
    <TableContainer>
      <Table
        alignments={['l', 'r']}
        headers={[
          <Cell key='address'>address</Cell>,
          <Cell key='balance'>balance</Cell>,
        ]}
        rows={rows}
        columns={[
          (row: { address: string, balance: number }) => (
            <Cell style={{ color: 'white' }}>
              {row.address}
            </Cell>
          ),
          (row: { address: string, balance: number }) => (
            <Cell style={{ color: 'white' }}>{row.balance}</Cell>
          )
        ]}
      />
    </TableContainer>
  );
}

const WhitelistContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ alignItems }: { alignItems: string }) => css`
    align-items: ${alignItems}
  `};
`;

const TableContainer = styled.div`
  display: inline-block;
  border-radius: 2px 2px 0 0px;
  border-bottom: none;
  padding: 16px;
`;

const Cell = styled.div`
  padding: 4px 8px;
  color: ${dfstyles.colors.text};
`;
