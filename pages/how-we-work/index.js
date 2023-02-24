import Head from 'next/head';
import './HowWeWork.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import HomeSuccessProduct from '@/components/HomeSuccessProduct/HomeSuccessProduct';
import HomePartner from '@/components/HomePartner/HomePartner';
import HowWeWorkBanner from '@/components/HowWeWorkBanner/HowWeWorkBanner';
import HowWeWorkInnerContent from '@/components/HowWeWorkInnerContent/HowWeWorkInnerContent';
import { useState, useEffect } from 'react';
import { SettingsContent, HowWeWorkContent } from '@/helpers/data_utils';

 export default function Home(props) {
  const settingsContent = props.settingsContent;
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  const howWeWorkContent = props.howWeWorkContent.data.howWeWorkData;
 

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) {
        return null;
  } else {
        return (
          <>
            <Head>
              <title>How we work</title>
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header settings={settingsContent}></Header>
            <HowWeWorkBanner howWeWorkContent = {howWeWorkContent} />
            <HowWeWorkInnerContent howWeWorkContent = {howWeWorkContent} />
            <HomeSuccessProduct />
            <HomePartner />
            <Footer></Footer>
          </>
        );
  }
}
export async function getServerSideProps({ req, res }){
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  return {
      props:{
        settingsContent : await SettingsContent(),
        howWeWorkContent: await HowWeWorkContent()
      }
  };
}

