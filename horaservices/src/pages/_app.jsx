// pages/_app.tsx
import '../app/globals.css';
import PageLayout from '@/components/pagelayout';
import store from '../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  </Provider>
  );
}

export default MyApp;