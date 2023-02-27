import React from 'react';
import './CarrerComeOnBoard.scss';
import './CarrerComeOnBoardResponsive.scss';

import iconOne from '@/assets/images/common-image/come-on-board/1.svg';
import iconTwo from '@/assets/images/common-image/come-on-board/2.svg';
import iconThree from '@/assets/images/common-image/come-on-board/3.svg';
import iconFour from '@/assets/images/common-image/come-on-board/4.svg';
import iconFive from '@/assets/images/common-image/come-on-board/5.svg';
import iconSix from '@/assets/images/common-image/come-on-board/6.svg';

import staff from '@/assets/images/common-image/staff.webp';
import Link from 'next/link';
import config from '@/helpers/config';
const {REACT_APP_RESOURCE_URL} = config();
 


const CarrerComeOnBoard = ({careerContent}) => {
	const careerData = careerContent?.careerData?.content ? JSON.parse(careerContent?.careerData?.content) : '';
	return (
		<>
			<section className="comeOnBoard">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="w-100 text-center aboutTitle">
								<h2>Ready to come on board?</h2>
							</div>
						</div>
					</div>
					<div className="row g-4 g-lg-5">
						{careerData?.comeOnBoard?.length > 0 ? (
							careerData?.comeOnBoard?.map((val, i) => (
								<div className="col-lg-3 col-md-3 col-sm-6 col-6" key={`come-on-board-${i}`}>
									<Link href="#" className="comeOnBoardBox">
										<span className="cbIcon">
											<img src={val?.img ? `${REACT_APP_RESOURCE_URL}/${val?.img}` : iconTwo} alt="" />
										</span>
										<h3 dangerouslySetInnerHTML={{ __html: val?.title ?? `Front-end Development` }}></h3>
										{parseInt(val?.hiring) === 1 && (
											<div class="ribbon ribbon-top-right">
												<span>Hiring !!</span>
											</div>
										)}
									</Link>
								</div>
							))
						) : (
							<>
								<div className="col-lg-3 col-md-3 col-sm-6 col-6">
									<Link href="/career-inner" className="comeOnBoardBox">
										<span className="cbIcon">
											<img src={iconOne.src} alt="" />
										</span>
										<h3>Back-end Development</h3>
										<div class="ribbon ribbon-top-right">
											<span>Hiring !!</span>
										</div>
									</Link>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-6">
									<Link href="/career-inner" className="comeOnBoardBox">
										<span className="cbIcon">
											<img src={iconTwo.src} alt="" />
										</span>
										<h3>Front-end Development</h3>
										<div class="ribbon ribbon-top-right">
											<span>Hiring !!</span>
										</div>
									</Link>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-6">
									<Link href="/career-inner" className="comeOnBoardBox">
										<span className="cbIcon">
											<img src={iconThree.src} alt="" />
										</span>
										<h3>Project Management</h3>
										<div class="ribbon ribbon-top-right">
											<span>Hiring !!</span>
										</div>
									</Link>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-6">
									<Link href="/career-inner" className="comeOnBoardBox">
										<span className="cbIcon">
											<img src={iconFour.src} alt="" />
										</span>
										<h3>Digital Marketing</h3>
										<div class="ribbon ribbon-top-right">
											<span>Hiring !!</span>
										</div>
									</Link>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-6">
									<Link href="/career-inner" className="comeOnBoardBox">
										<span className="cbIcon">
											<img src={iconFive.src} alt="" />
										</span>
										<h3>Graphics Designer</h3>
										<div class="ribbon ribbon-top-right">
											<span>Hiring !!</span>
										</div>
									</Link>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-6">
									<Link href="/career-inner" className="comeOnBoardBox">
										<span className="cbIcon">
											<img src={iconSix.src} alt="" />
										</span>
										<h3>Mobile Application Development</h3>
										<div class="ribbon ribbon-top-right">
											<span>Hiring !!</span>
										</div>
									</Link>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-6">
									<Link href="/career-inner" className="comeOnBoardBox">
										<span className="cbIcon">
											<img src={iconSix.src} alt="" />
										</span>
										<h3>Mobile Application Development</h3>
										<div class="ribbon ribbon-top-right">
											<span>Hiring !!</span>
										</div>
									</Link>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-6">
									<Link href="/career-inner" className="comeOnBoardBox">
										<span className="cbIcon">
											<img src={iconSix.src} alt="" />
										</span>
										<h3>Mobile Application Development</h3>
										<div class="ribbon ribbon-top-right">
											<span>Hiring !!</span>
										</div>
									</Link>
								</div>
							</>
						)}
					</div>
				</div>
			</section>
			<section className="staffImg">
				<div className="staffImgTitle">
					<h2 dangerouslySetInnerHTML={{ __html: careerData?.section3?.title ?? `Lorem ipsum dolor sit.` }}></h2>
				</div>
				<img src={careerData?.section3?.img ? `${REACT_APP_RESOURCE_URL}/${careerData?.section3?.img}` : staff} alt="" />
			</section>
		</>
	);
};

export default CarrerComeOnBoard;
