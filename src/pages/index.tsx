import React, { useEffect } from 'react';
import styled from 'styled-components';
import Web3 from 'web3';
import { HttpProvider } from 'web3-core';
import { useWeb3React } from '@web3-react/core';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { ConnectorType, getConnector } from '../connectors';

const Index = (): JSX.Element => {
  const { account, library, activate, deactivate } = useWeb3React();

  const disconnect = (): void => {
    if (account && account.length > 0) {
      deactivate();
    }
  };

  const connect = async (type: ConnectorType): Promise<void> => {
    try {
      disconnect();
      await activate(getConnector(type));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (account?.length > 0 && library) {
      (async () => {
        const web3 = library as Web3;
        const sig = await web3.eth.personal.sign('Hi there', account, 'hi');
        console.log(sig);
      })();
    }
  }, [account, library]);

  return (
    <PageWrapper>
      <AboutContainer>
        <Header>Web3 Next.JS Boilerplate</Header>
        <AboutText>
          This is a boilerplate made to speed up creation of Next.JS using Web3.
          This boilerplate is set up with ESlint, Prettier, and Typescript as
          well as a basic styled-components setup.{' '}
        </AboutText>
        <CreatedByText>
          Created by{' '}
          <Link href="https://twitter.com/0xTotten" target="_blank">
            Totten
          </Link>
          <br />
          Buy me a coffee! 0x5E8FF4A5F37DD800c83D237213559D176A55CcDd
        </CreatedByText>
        <IconsContainer>
          <Link href="https://github.com/Tott3n" target="_blank">
            <SiGithub />
          </Link>
          <Link href="https://twitter.com/0xTotten" target="_blank">
            <SiTwitter />
          </Link>
        </IconsContainer>
      </AboutContainer>
      <ButtonsContainer>
        <Button onClick={() => connect(ConnectorType.INJECTED)}>
          Connect to MetaMask
        </Button>
        <Button onClick={() => connect(ConnectorType.WALLET_LINK)}>
          Connect to WalletLink
        </Button>
        <Button onClick={() => connect(ConnectorType.WALLET_CONNECT)}>
          Connect to WalletConnect
        </Button>
        <Button onClick={() => disconnect()}>Disconnect</Button>
      </ButtonsContainer>
      {account?.length > 0 && <Header>Active address: {account}</Header>}
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 10px 5px;
  width: 150px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${Button}:not(:last-child) {
    margin-bottom: 10px;
  }

  margin-bottom: 10px;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const Header = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
`;

const AboutText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  inline-size: 400px;
  overflow-wrap: break-word;
  text-align: center;
  margin-bottom: 20px;
`;

const CreatedByText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
  line-height: 20px;
`;

const Link = styled.a`
  color: #3498db;
  text-decoration: underline;
  color: #fff;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #3498db;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  ${Link}:not(:last-child) {
    margin-right: 10px;
  }

  ${Link} {
    font-size: 26px;
  }
`;

export default Index;
