import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider';

const provider_options = {
  walletconnect:{
    package: WalletConnectProvider,
    options:{
      infuraId: '27e484dcd9e3efcfd25a83a78777cdf1'
    }
  }
};

if (typeof window !== 'undefined') {
  const web3modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions: provider_options 

  });
}

export default function Home() {
  return (
    <div className={styles.container}>
      <button onClick={async () => {
        const provider = await web3modal.connect();
        const web3 = new Web3(provider);
      }} >
        Connect
      </button>
    </div>
  )
}
