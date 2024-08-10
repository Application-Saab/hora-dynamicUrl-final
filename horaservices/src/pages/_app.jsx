// pages/_app.tsx
import '../app/globals.css';
import PageLayout from '@/components/pagelayout';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';
import Link from 'next/link';
import Image from 'next/image';
import whatsppicon from "../assets/whatsapp-icon.png";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PageLayout>
          <Component {...pageProps} />
          <div>
            <Link href="https://wa.me/+917338584828/?text=Hi%2CI%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20the%20services" target="_blank">
              <Image className='whatappicon' src={whatsppicon} alt="WhatsApp Icon" />
            </Link>
          </div>
        </PageLayout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
