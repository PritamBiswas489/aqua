import React from 'react';
 
import MyPlayer from '../MyPlayer';

import 'video-react/dist/video-react.css';
import './HomeVideoSection.scss';
import './HomeVideoSectionResponsive.scss';
import { useState, useEffect } from 'react';
 
 
import Link from 'next/link';
 import Image from 'next/image';
import review from '@/assets/images/common-image/review.png';


function HomeVideoSection({homeContent}) {
	const homeData = JSON.parse(homeContent);
	const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
		// alert('sasa');
      setHasWindow(true);
    }
  }, []);
	return (
		<>
			<section className="relative videoBoxWrap">
				<div className="container-fluid p-h-30">
					<div className="row">
						<div className="videoWrap">
							<div className="videoWrapInner waterEffect">
								{/* <ReactPlayer url='../../video/video1.mov' controls={true} /> */}
								{/* <Player playsInline  src="video1.mov" /> */}
								{hasWindow &&  <MyPlayer
								homeData={homeData}
								
								
								></MyPlayer> }

								 
							</div>
						</div>
						<div className="boxWrap">
							<div className="boxWrapInner">
								<div
									className="nectar-highlighted-text font_size_61px "
									data-style="full_text"
									data-exp="default"
									data-user-color="true"
									style={{ color: '#000000' }}
									data-using-custom-color="true"
									data-animation-delay="false"
									data-color="#ffd74b"
									data-color-gradient
								>
									<h2
										dangerouslySetInnerHTML={{
											__html:
												homeData?.VdoSection?.description ??
												`Through bold digital designs, innovative development &amp; unique SEO techniques,&nbsp;
										<em className="animated">we’ve snagged a few awards.</em>`,
										}}
									></h2>
								</div>

								<span className="link_wrap">
									<Link href={'/'} className="link_text">
										LEARN MORE ABOUT US
									</Link>
								</span>

								<div className="clRev">
									<Image src={review} alt="" />
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HomeVideoSection;
