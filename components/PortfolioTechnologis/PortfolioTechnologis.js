import React from 'react';
import './PortfolioTechnologis.scss';
import './PortfolioTechnologisResponsive.scss';
import react from 'assets/images/common-image/react.svg';
import angular from '@/assets/images/common-image/angular.svg';
import wordpress from '@/assets/images/common-image/wordpress.svg';
import laravel from '@/assets/images/common-image/laravel.svg';

import config from '@/helpers/config';
const {REACT_APP_RESOURCE_URL} = config();


const PortfolioTechnologis = ({portfolioDtlContent}) => {
	const portfolioDtlData = portfolioDtlContent?.portfolioDetailData?.content ? JSON.parse(portfolioDtlContent?.portfolioDetailData?.content) : '';

	return (
		<>
			<section className="PortfolioTechnologis">
				<div className="container">
					<div className="row">
						<div className="col-12 d-flex flex-wrap justify-content-center">
							<div className="technologiesList d-flex flex-wrap align-items-center">
								<h4>TECHNOLOGIES </h4>
								<ul className="d-flex align-items-center">
									{
										portfolioDtlData?.mainSection?.technologyImg?.map((val, i) => (
											<li key={`techonology-${i}`}>
												<span>
													<img src={val ? `${REACT_APP_RESOURCE_URL}/${val}` : react} alt="" />
												</span>
											</li>
										))
									}
									 
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PortfolioTechnologis;
