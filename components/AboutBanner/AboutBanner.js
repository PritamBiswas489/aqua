import React from 'react';
import './AboutBanner.scss';
import './AboutBannerResponsive.scss';
import aboutBanner from '@/assets/images/common-image/about/about-banner.png';
import Link from 'next/link';
import config from '@/helpers/config';
const {REACT_APP_RESOURCE_URL} = config();
const AboutBanner = ({aboutData}) => {
	const content =  JSON.parse(aboutData.content); 
	return (
		<>
			<div className="aboutBanner d-flex align-items-center relative">
				<div className="container">
					<div className="row">
						<div className="aboutBannerImg">
							<img src={content?.banner?.img ? `${REACT_APP_RESOURCE_URL}/${content?.banner?.img}` : aboutBanner.src} alt="banner img" />
						</div>
						<div className="col-7">
							<div className="aboutCont">
								<h2 dangerouslySetInnerHTML={{ __html: content?.banner?.title ?? 'We’re experts at helping businesses reach their true potential' }}></h2>
								<p
									dangerouslySetInnerHTML={{
										__html:
											content?.banner?.description ??
											`The focal point of all our services is to enhance brand visibility on the market using cutting-edge technology and our expertise in production. We
								have a team of experienced tech professionals with a proven track record of generating a staggering amount of revenues through strategic planning.`,
									}}
								></p>
								<Link href="/contact" className="caseStudy">
									Talk to us <i className="fas fa-long-arrow-alt-right"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutBanner;
