import React from 'react';
// import { Link } from 'react-router-dom';
import './HomeAppSection.scss';
import './HomeAppSectionResponsive.scss';
import service from '@/assets/images/common-image/what-we-do/service.png';
import oneSvg from '@/assets/images/common-image/what-we-do/1.png';
 
 
function HomeAppSection({homeContent}) {
	const homeData = JSON.parse(homeContent);
	return (
		<>
			<section className="whatWeDo">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="insustryRound relative">
								<div className="insustryRoundInner d-flex align-items-center justify-content-center">
									<div className="text-center iriInner">
										<span>
											<img src={service.src} alt="" />
										</span>
										<h5 dangerouslySetInnerHTML={{ __html: homeData?.service?.title ?? `Service` }}></h5>
										<p
											dangerouslySetInnerHTML={{
												__html: homeData?.service?.description ?? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, obcaecati.`,
											}}
										></p>
									</div>
								</div>
								<div className="insustryRoundLeft">
									<div className="irRoundedBox lirb-1 d-flex align-items-center left-30 relative">
										<div className="irRoundedBoxCont">
											<h6 dangerouslySetInnerHTML={{ __html: homeData?.service?.letftItem?.title1 ?? `Lorem, ipsum dolor.` }}></h6>
											<p
												dangerouslySetInnerHTML={{
													__html:
														homeData?.service?.letftItem?.description1 ??
														`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem assumenda `,
												}}
											></p>
										</div>
										<div className="irRoundedBoxIcon">
											<span>
												<img src={oneSvg.src} alt="" />
											</span>
										</div>
									</div>

									<div className="irRoundedBox lirb-2 d-flex align-items-center relative">
										<div className="irRoundedBoxCont">
											<h6 dangerouslySetInnerHTML={{ __html: homeData?.service?.letftItem?.title2 ?? `Lorem, ipsum dolor.` }}></h6>
											<p
												dangerouslySetInnerHTML={{
													__html:
														homeData?.service?.letftItem?.description2 ??
														`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem assumenda `,
												}}
											></p>
										</div>
										<div className="irRoundedBoxIcon">
											<span>
												<img src={service.src} alt="" />
											</span>
										</div>
									</div>

									<div className="irRoundedBox lirb-3 d-flex align-items-center left-30 relative">
										<div className="irRoundedBoxCont">
											<h6 dangerouslySetInnerHTML={{ __html: homeData?.service?.letftItem?.title3 ?? `Lorem, ipsum dolor.` }}></h6>
											<p
												dangerouslySetInnerHTML={{
													__html:
														homeData?.service?.letftItem?.description3 ??
														`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem assumenda `,
												}}
											></p>
										</div>
										<div className="irRoundedBoxIcon">
											<span>
												<img src={service.src} alt="" />
											</span>
										</div>
									</div>
								</div>

								<div className="insustryRoundRight">
									<div className="irRoundedBox rirb-1 d-flex align-items-center right-30 relative">
										<div className="irRoundedBoxIcon">
											<span>
												<img src={service.src} alt="" />
											</span>
										</div>
										<div className="irRoundedBoxCont">
											<h6 dangerouslySetInnerHTML={{ __html: homeData?.service?.rightItem?.title4 ?? `Lorem, ipsum dolor.` }}></h6>
											<p
												dangerouslySetInnerHTML={{
													__html:
														homeData?.service?.rightItem?.description4 ??
														`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem assumenda `,
												}}
											></p>
										</div>
									</div>

									<div className="irRoundedBox rirb-2 d-flex align-items-center relative">
										<div className="irRoundedBoxIcon">
											<span>
												<img src={service.src} alt="" />
											</span>
										</div>
										<div className="irRoundedBoxCont">
											<h6 dangerouslySetInnerHTML={{ __html: homeData?.service?.rightItem?.title5 ?? `Lorem, ipsum dolor.` }}></h6>
											<p
												dangerouslySetInnerHTML={{
													__html:
														homeData?.service?.rightItem?.description5 ??
														`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem assumenda `,
												}}
											></p>
										</div>
									</div>

									<div className="irRoundedBox rirb-3 d-flex align-items-center right-30 relative">
										<div className="irRoundedBoxIcon">
											<span>
												<img src={service.src} alt="" />
											</span>
										</div>
										<div className="irRoundedBoxCont">
											<h6 dangerouslySetInnerHTML={{ __html: homeData?.service?.rightItem?.title6 ?? `Lorem, ipsum dolor.` }}></h6>
											<p
												dangerouslySetInnerHTML={{
													__html:
														homeData?.service?.rightItem?.description6 ??
														`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem assumenda `,
												}}
											></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HomeAppSection;
