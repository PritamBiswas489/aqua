import Head from 'next/head';
import './HowWeWork.scss';
 
import HomeSuccessProduct from '@/components/HomeSuccessProduct/HomeSuccessProduct';
import HomePartner from '@/components/HomePartner/HomePartner';
import HowWeWorkBanner from '@/components/HowWeWorkBanner/HowWeWorkBanner';
import HowWeWorkInnerContent from '@/components/HowWeWorkInnerContent/HowWeWorkInnerContent';
 
import { HowWeWorkContent, SettingsContent  } from '@/helpers/data_utils';

import Container from '@/containers/Container';

 

function HowWeWork(props) {
       
    
    const howWeWorkContent = props.howWeWorkContent.data.howWeWorkData;
 
    return (
      <>
        <Head>
          <title>How we work</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <HowWeWorkBanner howWeWorkContent = {howWeWorkContent} />
        <HowWeWorkInnerContent howWeWorkContent = {howWeWorkContent} />
        <HomeSuccessProduct />
        <HomePartner />
        
      </>
    );  
}
export default  Container(HowWeWork);

export async function getStaticProps({ req, res }){
  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=10, stale-while-revalidate=59'
  // )
  return {
      props:{
        settingsContent : await SettingsContent(),
        howWeWorkContent: await HowWeWorkContent()
      },
      revalidate:60000
  };
}

