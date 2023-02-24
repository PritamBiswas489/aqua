import { useEffect } from 'react';
import '@/styles/globals.css';
import '@/assets/custom-fonts/stylesheet.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/style.scss';
import '@/assets/styles/build.css';
import dynamic from 'next/dynamic';

import "nprogress/nprogress.css";
const TopProgressBar = dynamic(
  () => {
    return import("components/TopProgressBar");
  },
  { ssr: false },
);
import Layout from '@/components/Layout/Layout';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Layout><TopProgressBar /><Component {...pageProps} /></Layout>
}
