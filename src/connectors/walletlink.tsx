import { WalletLinkConnector } from '@web3-react/walletlink-connector';

export const WalletLink = new WalletLinkConnector({
  url: process.env.PROVIDER_URL,
  supportedChainIds: [4],
  darkMode: true,
  appName: 'Web3 Next.JS Boiler',
});
