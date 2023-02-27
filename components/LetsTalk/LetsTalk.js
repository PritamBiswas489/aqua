import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import buttonText from '@/assets/images/common-image/button-with-text.svg';
import scheduleCall from '@/assets/images/common-image/schedule-call.svg';
import scheduleProject from '@/assets/images/common-image/schedule-project.svg';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

import Link from 'next/link';
import { useState } from 'react';
import './LetsTalk.scss';
import './LetsTalkResponsive.scss';



const LetsTalk = ({settings}) => {
	const [animate, setAnimate] = useState(0);
	const [showModal, setShowModal] = useState(0);
	const settingsContent = settings?.content ? JSON.parse(settings?.content) : {};
	const handleClick = () => {
		setAnimate(!animate);
	};
	const handleModalOpen = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<div className={animate ? 'consultationHolder active' : 'consultationHolder'}>
				<div className="schCons">
					<button href="javascript:void(0);" className="schConsBtn d-flex align-items-center" onClick={handleClick}>
						<img src={buttonText.src} alt="" />
					</button>
				</div>
				<div className={showModal ? 'consultationInnerWrap inactive' : 'consultationInnerWrap'}>
					<div className="consultationInner">
						<h4>What are you waiting for?</h4>
						<h6>Let's talk</h6>
						<div className="divider"></div>
						<div className="contactItem d-flex align-items-center">
							<div className="ciImg">
								<span>
									<i className="fas fa-phone-alt"></i>
								</span>
							</div>
							<div className="ciDesc">
								<p>Phone number</p>
								<h5>
									<Link href={'#'}>{settingsContent?.phone}</Link>
								</h5>
							</div>
						</div>

						<div className="divider"></div>

						<div className="contactItem d-flex align-items-center">
							<div className="ciImg">
								<span>
									<i className="far fa-envelope"></i>
								</span>
							</div>
							<div className="ciDesc">
								<p>Email address</p>
								<h5>
									<Link href={'#'}>{settingsContent?.emailId}</Link>
								</h5>
							</div>
						</div>

						<div className="divider"></div>

						<div className="contactItem d-flex align-items-center">
							<div className="ciImg">
								<span>
									<i className="fab fa-whatsapp"></i>
								</span>
							</div>
							<div className="ciDesc">
								<p>WhatsApp</p>
								<h5>
									<Link href={'#'}>{settingsContent?.wpNo}</Link>
								</h5>
							</div>
						</div>

						<div className="divider"></div>

						<div className="contactItem d-flex align-items-center">
							<div className="ciImg">
								<span>
									<i class="fab fa-skype"></i>
								</span>
							</div>
							<div className="ciDesc">
								<p>Skype</p>
								<h5>
									<Link href={'#'}>{settingsContent?.skypeId}</Link>
								</h5>
							</div>
						</div>

						<div className="divider"></div>
						

						<div className="shiduleBoxWrap d-flex mt-4">
							<div className="shiduleBox">
								<Link href={'#'}>
									<img src={scheduleCall.src} alt="" /> Schedule a call
								</Link>
							</div>

							<div className="shiduleBox">
								<Link href={'#'} onClick={handleModalOpen}>
									<img src={scheduleProject.src} alt="" />
									Start a project
								</Link>
							</div>
						</div>
					</div>
					<Link href="#" className="consHolClose" onClick={handleClick}>
						<i className="fas fa-times"></i>
					</Link>
				</div>
				<div className={showModal ? 'startProjectInner active' : 'startProjectInner'}>
					<div className="w-100 mb-4">
						<Link href="#" className="backBtn" onClick={handleModalOpen}>
							<MdOutlineKeyboardBackspace /> Back
						</Link>
					</div>

					<div className="w-100 mb-2">
						<h4>Need a digital product or a custom solution? We’re all ears!</h4>
					</div>
					 

					<div className="form-floating mb-3">
						<input type="email" className="form-control applyInput" id="floatingInput" placeholder="Full name" />
						<label htmlFor="floatingInput">Full name</label>
					</div>
					<div className="form-floating mb-3">
						<input type="email" className="form-control applyInput" id="floatingInput" placeholder="Interested In " />
						<label htmlFor="floatingInput">Interested In </label>
					</div>
					<div className="form-floating mb-3">
						<input type="email" className="form-control applyInput" id="floatingInput" placeholder="name@example.com" />
						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating mb-3">
						<PhoneInput
							className="form-control applyInput"
							country={'in'}
							enableSearch={true}
						 
						/>
						<label htmlFor="floatingInput">
							<strong>Contact No</strong>
						</label>
					</div>

					 
					<div className="form-floating mb-3">
						<select className="form-select" id="floatingSelect" aria-label="Floating label select example">
							<option selected>Open this select menu</option>
							<option value={1}>One</option>
							<option value={2}>Two</option>
							<option value={3}>Three</option>
						</select>
						<label htmlFor="floatingSelect">Works with selects</label>
					</div>
					<div className="form-floating mb-3">
						<select className="form-select" id="floatingSelect" aria-label="Floating label select example">
							<option selected>Open this select menu</option>
							<option value={1}>One</option>
							<option value={2}>Two</option>
							<option value={3}>Three</option>
						</select>
						<label htmlFor="floatingSelect">Works with selects</label>
					</div>

					<div className="file-upload mb-3">
						<div className="file-select">
							<div className="file-select-button" id="fileName">
								Choose File
							</div>
							<div className="file-select-name" id="noFile">
								No file chosen...
							</div>
							<input type="file" name="chooseFile" id="chooseFile" />
						</div>
					</div>
					 
					<div className="relative">
						<button type="button" class="sendBtn">
							<span>Send</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default LetsTalk;
