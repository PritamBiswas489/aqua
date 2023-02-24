import React from 'react';
import Link from 'next/link';
import './HomeSuccessProduct.scss';
import './HomeSuccessProductResponsive.scss';
import { HiOutlineArrowLongRight, HiOutlineEnvelope } from 'react-icons/hi2';
function HomeSuccessProduct() {
	return (
		<>
			<section className="yourIdea">
				<div className="container-fluid p-h-30">
					<div className="row">
						<div className="col-12">
							<div className="yourIdeaInner text-center">
								<h2>Let's collaborate</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur illum totam quaerat, magnam a ab natus blanditiis nihil sunt quo incidunt
									at amet quos? Numquam explicabo maxime eligendi, sequi deserunt blanditiis consectetur sed? Quia.{' '}
								</p>
								<ul className="d-flex justify-content-center align-items-center">
									<li>
										<Link href={'#'} className="timeToTalk">
											I'd like to pick a time to talk <HiOutlineArrowLongRight />
										</Link>
									</li>
									<li>
										<Link href={'#'}>
											I Want to email you first <HiOutlineEnvelope />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HomeSuccessProduct;
