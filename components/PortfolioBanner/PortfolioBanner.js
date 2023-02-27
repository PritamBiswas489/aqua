import React from 'react';
import './PortfolioBanner.scss';
import proDtlBann from '@/assets/images/common-image/portfolio/prodetails-1.jpg';
import config from '@/helpers/config';
const {REACT_APP_RESOURCE_URL} = config();

const PortfolioBanner = ({portfolioDtlContent}) => {
	// alert();
	const portfolioDtlData = portfolioDtlContent?.portfolioDetailData?.content ? JSON.parse(portfolioDtlContent?.portfolioDetailData?.content) : '';
	//console.log(portfolioDtlData)
	return (
		<>
			<section className="proDtlBann">
				<img src={portfolioDtlData?.mainSection?.bannerImg ? `${REACT_APP_RESOURCE_URL}/${portfolioDtlData?.mainSection?.bannerImg}` : proDtlBann.src} alt="" />
			</section>
		</>
	);
};

export default PortfolioBanner;
