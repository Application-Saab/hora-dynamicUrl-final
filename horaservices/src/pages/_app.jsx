// pages/_app.tsx
import '../app/globals.css';
import PageLayout from '@/components/pagelayout';
import store from '../store/store';
import { Provider } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import whatsppicon from "../assets/whatsapp-icon.png";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PageLayout>
        <Component {...pageProps} />
        <div>
          <Link href="https://wa.me/+917338584828/?text=Hi%2CI%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20the%20services" target="_blank">
            <Image className='whatappicon' src={whatsppicon} alt="WhatsApp Icon" />
          </Link>
        </div>
      </PageLayout>
    </Provider>
  );
}

export default MyApp;