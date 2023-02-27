import Head from 'next/head';
import { SettingsContent, AboutPageContent } from '@/helpers/data_utils';

import './About.scss';
import './About.responsive.scss';

import AboutBanner from '@/components/AboutBanner/AboutBanner';
import AboutStory from '@/components/AboutStory/AboutStory';
import HomePartner from '@/components/HomePartner/HomePartner';
import AboutOurValue from '@/components/AboutOurValue/AboutOurValue';
import Container from '@/containers/Container';
import config from '@/helpers/config';

const AboutUsPage  = (props) => {
  const {aboutData} = props.aboutContent.data;
  return (
    <>
      <Head>
        <title>About us page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <AboutBanner aboutData={aboutData} />
      <AboutStory aboutData={aboutData} />
      <HomePartner />
      <AboutOurValue  aboutData={aboutData} />
       
    </>
  );
}
export default Container(AboutUsPage);
export async function getStaticProps({ req, res }){
  
  return {
      props:{
        aboutContent: await AboutPageContent(),
        settingsContent : await SettingsContent(),
      },
      revalidate:config.revalidate
  };
}

