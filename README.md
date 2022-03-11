# web3-next-boiler

This repository is a boilerplate for creating a Web3 dApp using Next.JS, styled-components, and `@web3-react`

### Prerequisites
This boilerplate requires [Node.JS](https://nodejs.org/en/) and [yarn](https://github.com/yarnpkg/yarn) to be installed on your computer.
I recommend using `yarn` over `npm`

### Installation
```
git clone https://github.com/Tott3N/Web3-NextJS-Boiler.git
cd web3-nextjs-boiler
rm -rf .git
yarn install
```
After running the above commands, you should be able to run the program using `yarn start`

### Usage
First you will want to edit the `package.json` to reflect your project (Name, repo, author)
After editing the `package.json`, you are ready to start coding!

If you look at `src/pages/index.tsx`, you will see that I have included an example setup of how to use `@web3/react` with Metamask, WalletLink, and WalletConnect, since the packages documentation is a bit vague. I have tested all of these connections using Metamask, Coinbase Wallet, and Ledger Live. The example code connects to your wallet through the click of the button, and when an account is active, requests a signature using `web3.eth.personal`

### Commands
`yarn dev` - Starts the Next.JS dev server
`yarn build` - Builds the Next.JS app with the output being in .next
`yarn start` - Starts the built Next.JS app