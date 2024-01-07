import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiTether, SiBinance, SiXrp, SiCardano, SiDogecoin } from 'react-icons/si';
import { TbCurrencySolana } from 'react-icons/tb';
import { BsCoin } from 'react-icons/bs';

export const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'BTC':
      return <FaBitcoin />;
    case 'ETH':
      return <FaEthereum />;
    case 'USDT':
      return <SiTether />;
    case 'BNB':
      return <SiBinance />;
    case 'SOL':
      return <TbCurrencySolana />;
    case 'XRP':
      return <SiXrp />;
    case 'USDC':
      return <BsCoin />; //doesn't have this icon in this icon lib
    case 'ADA':
      return <SiCardano />;
    case 'AVAX':
      return null; //doesn't have this icon in this icon lib
    case 'DOGE':
      return <SiDogecoin />;
    default:
      return null;
  }
};
