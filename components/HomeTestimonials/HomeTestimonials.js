import React from 'react';
import './HomeTestimonials.scss';
import './HomeTestimonialsResponsive.scss';
import dynamic from 'next/dynamic';
 
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import scheduale from '@/assets/images/common-image/scheduale.jpg';
import google from '@/assets/images/common-image/google-icon.png';
import clutch from '@/assets/images/common-image/clutch-icon.png';
import Link from 'next/link';

import config from '@/helpers/config';
const {REACT_APP_RESOURCE_URL} = config();
 
const HomeTestimonials = ({testimonialData}) => {
	 
	const options = {
		// autoplay: true,
		// autoplayTimeout: 5000,
		smartSpeed: 1200,
		// animateOut: 'fadeOut',
		// loop: true,
		margin: 50,
		nav: true,
		dots: false,
		items: 2,
		// navElement: 'div',
		// navText: ["<i class='fas fa-arrow-alt-circle-left'></i>", "<i class='fas fa-arrow-alt-circle-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: true,
			},
			768: {
				items: 2,
			},
			// 1000: {
			// 	items: 1
			// }
		},
	};
	return (
		<>
			<section className="relative testimonials">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<OwlCarousel className="owl-theme testimonialsSlider" {...options}>
								{testimonialData.length > 0 && (
									<>
										{testimonialData.map((val, i) => (
											<div className="item" key={i}>
												<div className="testiContent">
													<div className="headIcon">
														<img src={val?.logo ? `${REACT_APP_RESOURCE_URL}/${val?.logo}` : google.src} alt="logo" />
													</div>
													<p
														dangerouslySetInnerHTML={{
															__html:
																val?.description ??
																`Getweb is the best software development company we’ve worked with so far. Unlike many developers, they understand UI/UX design on a fundamental
																level and create a smooth user journey no matter the technical difficulties. Highly recommended if you want your digital solution highly
																innovative and impactful!`,
														}}
													></p>
													<div className="d-flex flex-wrap justify-content-between align-items-center">
														<ul className="d-flex align-items-center">
															<li className="clintImg">
																<span>
																	<img src={val?.avatar ? `${REACT_APP_RESOURCE_URL}/${val?.avatar}` : scheduale.src} alt="avatar" />
																</span>
															</li>
															<li className="clintInfo">
																<h5
																	dangerouslySetInnerHTML={{
																		__html: val?.clientName ?? `Jacob Eiting`,
																	}}
																></h5>
																<h6
																	dangerouslySetInnerHTML={{
																		__html: val?.clientDesignation ?? `CEO & Co-Founder`,
																	}}
																></h6>
															</li>
														</ul>
														<div className="link_wrap">
															<a className="link_text" target={'_blank'} href={val?.projectLink} rel="noreferrer">
																View Project
															</a>
														</div>
													</div>
												</div>
											</div>
										))}
									</>
								)}
								 
							</OwlCarousel>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeTestimonials;
