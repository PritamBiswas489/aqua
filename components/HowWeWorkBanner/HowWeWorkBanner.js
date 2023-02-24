import React from 'react';
import qImage from '@/assets/images/common-image/q.png';
import Link from 'next/link';
import './HowWeWorkBanner.scss';
import './HowWeWorkBannerResponsive.scss';
import config from '@/helpers/config';
const {REACT_APP_RESOURCE_URL} = config();
function HowWeWorkBanner({howWeWorkContent}) {
	const content = JSON.parse(howWeWorkContent.content);
	 
	return (
		<>
			<section className="howWeWorkBanner d-flex align-items-center relative">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-7">
							<div className="howWeWorkLeft">
								<h2 dangerouslySetInnerHTML={{ __html: content?.banner?.title ?? 'Our Development Process' }}></h2>
								<p
									dangerouslySetInnerHTML={{
										__html:
											content?.banner?.description ??
											`The focal point of all our services is to enhance brand visibility on the market using cutting-edge technology and our expertise in production.
									We have a team of experienced tech professionals with a proven track record of generating a staggering amount of revenues through strategic
									planning.`,
									}}
								>
									{/* The focal point of all our services is to enhance brand visibility on the market using cutting-edge technology and our expertise in production.
									We have a team of experienced tech professionals with a proven track record of generating a staggering amount of revenues through strategic
									planning. */}
								</p>
								<Link href={'/contact'} className="caseStudy">
									Tell Us Your Project
								</Link>
							</div>
						</div>
						<div className="howWeWorkRight">
							<img src={content?.banner?.img ? `${REACT_APP_RESOURCE_URL}/${content?.banner?.img}` : qImage.src} alt="banner" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HowWeWorkBanner;
