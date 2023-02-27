import React from 'react';
import './TheProblem.scss';
import './TheProblemResponsive.scss';
 

const TheProblem = ({portfolioDtlContent}) => {
	const portfolioDtlData = portfolioDtlContent?.portfolioDetailData?.content ? JSON.parse(portfolioDtlContent?.portfolioDetailData?.content) : '';
	return (
		<>
			<section className="theProblem">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12">
							<div className="theProblemInner text-center">
								<h2 dangerouslySetInnerHTML={{ __html: portfolioDtlData?.problemSection?.heading ?? `The Problem` }}></h2>
								<p dangerouslySetInnerHTML={{
									__html: portfolioDtlData?.problemSection?.description ?? `Horizon's site was dated in its appearance and lacked a human touch, presenting itself as too serious and corporate. With their goal of allowing
									young people to feel comfortable with themselves, overcome tough challenges and flourish in the world, it was important to them that their new
									website design portrayed this and was both friendly, unintimidating and highly accessible.` }}>

								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default TheProblem;
