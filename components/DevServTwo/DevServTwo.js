import React from 'react';
import './DevServTwo.scss';
import './DevServTwoResponsive.scss';
import heroOne from '@/assets/images/common-image/dev-serv/1.png';
import config from '@/helpers/config';
const {REACT_APP_RESOURCE_URL} = config();


const DevServTwo = ({ content }) => {
	return (
		<>
			<section className="devServTwoSec d-flex align-items-center relative">
				<div className="devServTwoSecImg">
					<div className="devServTwoSecImgInner">
						<img src={content?.img ? `${REACT_APP_RESOURCE_URL}/${content?.img}` : heroOne.src} alt="" />
					</div>
				</div>
				<div className="devServTwoSecCont">
					<div
						className="devServTwoSecContInner"
						dangerouslySetInnerHTML={{
							__html: content?.description ?? `Web Development`,
						}}
					>
						 
					</div>
				</div>
			</section>
		</>
	);
};

export default DevServTwo;
