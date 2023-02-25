import Head from 'next/head';
import Container from '@/containers/container';
import { SettingsContent, IndustryContent } from '@/helpers/data_utils';

import HomeSuccessProduct from '@/components/HomeSuccessProduct/HomeSuccessProduct';
import SttBanner from '@/components/SttBanner/SttBanner';
import ServicesTempTwoBody from '@/components/ServicesTempTwoBody/ServicesTempTwoBody';

import config from '@/helpers/config';
const {REACT_APP_RESOURCE_URL} = config();
function InduustryDetailsPage(props) {
  const industryContent = props.industryData.data.industry;
  return (
    <>
      <Head>
        <title>Industry details page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SttBanner industryContent={industryContent} />
			<ServicesTempTwoBody industryContent={industryContent} />
			<HomeSuccessProduct />
    </>
  )
}
export default Container(InduustryDetailsPage);

export async function getServerSideProps(context){
  const {params, req, res} = context;
  const [slug]  = params.slug;
  return {
      props:{
          settingsContent : await SettingsContent(),
          industryData: await IndustryContent(slug)
      }
  };
}