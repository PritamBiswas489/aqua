import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './HomeBanner.scss';
import './HomeBanner.responsive.scss';
import qImage from '@/assets/images/common-image/q.svg';
import mobBan from '@/assets/images/common-image/home-mobile-ban.jpg';
import config from '@/helpers/config';
const {REACT_APP_RESOURCE_URL} = config();
 
function HomeBanner({homeContent}) {
    const homeData = JSON.parse(homeContent);
	//console.log(homeData);
	return (
		<>
			<section className="banner d-flex justify-content-between align-items-center mobNone">
				<div className="bannerLeft">
					<h6>Introducingh</h6>
					<h2 dangerouslySetInnerHTML={{ __html: homeData?.banner?.title ?? `Hire a developer and monetize your business with <span>AquaLeaf IT Solutions</span>` }}></h2>
					<div
						dangerouslySetInnerHTML={{
							__html:
								homeData?.banner?.description ??
								`Bring your go-to-market teams together to deliver personalized customer experiences in real time – so you can increase your revenue, shorten your sales
						cycles, and strengthen your brand.`,
						}}
					></div>
				</div>
				<div className="bannerRight">
					<div className="qSvg">
					<img src={homeData?.banner?.img ? `${REACT_APP_RESOURCE_URL}/${homeData?.banner?.img}` : qImage.src} alt="" />
					</div>
				</div>
			</section>
			<section className="homeBanMobArea">
			<img src={homeData?.banner?.mobileImg ? `${REACT_APP_RESOURCE_URL}/${homeData?.banner?.mobileImg}` : mobBan.src} alt="" />
				<div className="bannerLeft">
					<h6>Introducingh</h6>
					<h2 dangerouslySetInnerHTML={{ __html: homeData?.banner?.title ?? `Hire a developer and monetize your business with <span>AquaLeaf IT Solutions</span>` }}></h2>
					<div
						dangerouslySetInnerHTML={{
							__html:
								homeData?.banner?.description ??
								`Bring your go-to-market teams together to deliver personalized customer experiences in real time – so you can increase your revenue, shorten your sales
						cycles, and strengthen your brand.`,
						}}
					></div>
				</div>
			</section>
		</>
	);
}

export default HomeBanner;
