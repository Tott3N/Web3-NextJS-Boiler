import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { ImSpinner2 } from 'react-icons/im';
import { HiOutlineLogout } from 'react-icons/hi';
import { ConnectorType, getConnector } from '../connectors';
import { rgba } from '../styles/utils';
import ModalComponent from '../components/Modal';

const Index = (): JSX.Element => {
  const { account, library, activate, deactivate } = useWeb3React();
  const [connectModalOpen, setConnectModalOpen] = useState(false);

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

  const openConnectModal = (): void => {
    if (account?.length > 0) {
      return;
    }
    setConnectModalOpen(true);
  };

  // useEffect(() => {
  //   if (account?.length > 0 && library) {
  //     (async () => {
  //       const web3 = library as Web3;
  //       const sig = await web3.eth.personal.sign('Hi there', account, 'hi');
  //       console.log(sig);
  //     })();
  //   }
  // }, [account, library]);

  useEffect(() => {
    if (account?.length) {
      setConnectModalOpen(false);
    }
  }, [account]);

  return (
    <PageWrapper>
      <ModalComponent
        open={connectModalOpen}
        width="250px"
        header="Connect"
        close={() => setConnectModalOpen(false)}
      >
        <ButtonsContainer>
          <Button onClick={() => connect(ConnectorType.INJECTED)}>
            Connect Wallet
          </Button>
          <Button onClick={() => connect(ConnectorType.WALLET_LINK)}>
            Connect Coinbase
          </Button>
          <Button onClick={() => connect(ConnectorType.WALLET_CONNECT)}>
            Connect WalletConnect
          </Button>
        </ButtonsContainer>
      </ModalComponent>
      <TopContainer>
        <Header>{`Web3 Next.JS Boilerplate`}</Header>
        <OutlinedButton
          color="#2D6A4F"
          onClick={account?.length ? disconnect : openConnectModal}
        >
          {account?.length ? (
            <OutlinedButtonInner>
              <span>{`${account.slice(0, 5)}...${account.slice(-4)}`}</span>
              <HiOutlineLogout />
            </OutlinedButtonInner>
          ) : (
            'Connect'
          )}
        </OutlinedButton>
      </TopContainer>
      <AboutContainer>
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
        <RaynContainer>
          <RaynHeader>
            Rayn Labs{' '}
            <Link href="https://twitter.com/raynlabs" target="_blank">
              <SiTwitter />
            </Link>
          </RaynHeader>
          <RaynText>
            Rayn Labs is a collective of Web3 developers working to bring better
            opensource solutions to the decentralized web.{' '}
          </RaynText>
        </RaynContainer>
        <IconsContainer>
          <Link href="https://github.com/Tott3n" target="_blank">
            <SiGithub />
          </Link>
          <Link href="https://twitter.com/0xTotten" target="_blank">
            <SiTwitter />
          </Link>
        </IconsContainer>
      </AboutContainer>
      {account?.length > 0 && <Header>Active address: {account}</Header>}
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
  box-sizing: border-box;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OutlinedButton = styled.button<{ color?: string; spin?: boolean }>`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  border: 2px solid ${({ color }) => color || '#fff'};
  background-color: transparent;
  color: #011627;
  padding: 10px 5px;
  width: 150px;
  font-weight: 500;
  font-size: 15px;
  transition: background 0.1s ease-in-out;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background: ${({ color }) => rgba(color, 0.2) || rgba('#fff', 0.2)};
  }

  svg {
    animation: ${({ spin }) => spin && 'spin 1s infinite linear'};
  }
`;

const OutlinedButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
`;

const OutlinedButtonIcon = styled.div`
  height: min-content;
  width: min-content;
`;

const Button = styled.button`
  background-color: #0353a4;
  color: #edf2fb;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 10px 5px;
  width: 175px;
  height: 40px;
  font-weight: 600;

  &:hover {
    filter: brightness(90%);
    cursor: pointer;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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
  inline-size: 600px;
  overflow-wrap: break-word;
  text-align: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 600px) {
    inline-size: 90%;
  }
`;

const CreatedByText = styled.span`
  font-size: 16px;
  font-weight: 500;
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

const RaynContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

const RaynHeader = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  align-items: center;
  display: flex;

  ${Link} {
    margin-left: 10px;
  }
`;

const RaynText = styled(AboutText)``;

export default Index;
