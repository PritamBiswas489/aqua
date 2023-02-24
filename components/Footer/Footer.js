import React from 'react';
import './Footer.scss';
import './Footer.responsive.scss';
 
import Link from 'next/link';
import Image from 'next/image';
import qImage from 'assets/images/common-image/q.svg';

import { BsEnvelopeFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';

function Footer() {
	 
	return (
		<>
			<footer>
				<div className="footerTop">
					<div className="container-fluid p-h-40">
						<div className="row justify-content-between">
							<div className="col-lg-3 col-md-3 col-sm-4 col-12 mobHide">
								<div className="footerBoxLogo">
									<Image src={qImage} alt="" />
									<ul className="d-flex">
										<li>
											<Link href="/">
												<i className="fab fa-facebook"></i>
											</Link>
										</li>
										<li>
											<Link href="/">
												<i className="fab fa-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="/">
												<i className="fab fa-linkedin"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-4 col-6">
								<div className="footerBox">
									<h5>Services</h5>
									<ul>
										<li>
											<Link href="">Hire PHP Developers</Link>
										</li>
										<li>
											<Link href="">Hire CodeIgniter Developers</Link>
										</li>
										<li>
											<Link href="">Hire Symfony Developers</Link>
										</li>
										<li>
											<Link href="">Hire Python Developers</Link>
										</li>
										<li>
											<Link href="">Hire Django Developers</Link>
										</li>
										<li>
											<Link href="">Hire PHP Developers</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-2 col-sm-4 col-6">
								<div className="footerBox">
									<h5>Pages</h5>
									<ul>
										<li>
											<Link href="">About us</Link>
										</li>
										<li>
											<Link href="">How we work</Link>
										</li>
										<li>
											<Link href="">Case Studies</Link>
										</li>
										<li>
											<Link href="">Career</Link>
										</li>
										<li>
											<Link href="">Blog</Link>
										</li>
										<li>
											<Link href="">Get in Touch</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-12 col-12">
								<div className="footerBoxContact">
									<h5>Contact Us</h5>
									<ul>
										<li>
											<Link href="">
												<BsEnvelopeFill /> contact@goodcore.co.uk
											</Link>
										</li>
										<li>
											<Link href="">
												<MdPhone /> 020 8781 6903
											</Link>
										</li>
									</ul>
									<p>
										GoodCore Software Ltd. Airport House, Purley Way, Croydon CR0 0XZ Registered in England and Wales Company No. 11461678, VAT Reg. No. 303
										2679 24{' '}
									</p>
									<p>Based out of the UK. Providing software development services and support to clients all over the world.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footerBtm">
					<div className="container-fluid ph-40">
						<div className="row justify-content-between">
							<div className="col">
								<ul className="d-flex flex-wrap">
									<li>
										<Link href="">Terms & Conditions</Link>
									</li>
									<li>
										<Link href="">Cookies Policy</Link>
									</li>
									<li>
										<Link href="">Privacy Policy</Link>
									</li>
									<li>
										<Link href="">Recruitment Policy</Link>
									</li>
									<li>
										<Link href="">Information Security Policy</Link>
									</li>
									<li>
										<Link href="">Sitemap</Link>
									</li>
								</ul>
							</div>
							<div className="col-auto">© Copy Right.{new Date().getFullYear()} . All Rights Reserved.</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
