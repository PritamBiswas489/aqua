import React from 'react';
import './DevServOne.scss';
import './DevServOneponsive.scss';
import heroOne from '@/assets/images/common-image/dev-serv/1.png';
import config from '@/helpers/config';
const {REACT_APP_RESOURCE_URL} = config();

const DevServOne = ({ content }) => {
	return (
		<>
			<section className="devServOneSec d-flex align-items-center relative">
				<div className="devServOneSecCont">
					<div
						className="devServOneSecContInner"
						dangerouslySetInnerHTML={{
							__html: content?.description ?? `Web Development`,
						}}
					>
						 
					</div>
				</div>
				<div className="devServOneSecImg">
					<div className="devServOneSecImgInner">
						<img src={content?.img ? `${REACT_APP_RESOURCE_URL}/${content?.img}` : heroOne.src} alt="" />
					</div>
				</div>
			</section>
		</>
	);
};

export default DevServOne;
