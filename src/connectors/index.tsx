import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { Injected } from './injected';
import { WalletConnect } from './walletConnect';
import { WalletLink } from './walletlink';

export enum ConnectorType {
  INJECTED = 'injected',
  WALLET_CONNECT = 'walletConnect',
  WALLET_LINK = 'walletLink',
}

export const getConnector = (
  type: ConnectorType,
): WalletLinkConnector | InjectedConnector | WalletConnectConnector => {
  switch (type) {
    case ConnectorType.INJECTED:
      return Injected;
    case ConnectorType.WALLET_CONNECT:
      return WalletConnect;
    case ConnectorType.WALLET_LINK:
      return WalletLink;
    default:
      return Injected;
  }
};
