import React from 'react';
import './BlogLatestNews.scss';
import './BlogLatestNewsResponsive.scss';
import Link from 'next/link';
import blogOne from '@/assets/images/common-image/bolg/1.jpg';
import config from '@/helpers/config';
const {REACT_APP_RESOURCE_URL} = config();

const BlogLatestNews = ({ data }) => {
	return (
		<>
			<div className="eachBlogPostype">
				<h2 className="recentPostHed">Recent Posts</h2>
				<ul className="recentPostul">
					{data?.map((val, i) => (
						<li>
							<Link href={`/blog-details/${val?.slug}`}>
								<div className="blogRecentprt">
									<img src={val?.img ? `${REACT_APP_RESOURCE_URL}/${val?.img}` : blogOne.src} alt="" />
								</div>
								<div className="blogRightPrt">
									<h5
										dangerouslySetInnerHTML={{
											__html: val?.title ?? `Lorem ipsum dolor sit`,
										}}
									></h5>
									<p
										dangerouslySetInnerHTML={{
											__html: val?.description.substr(0, 50) ?? `Lorem ipsum dolor sit amet consectetur .`,
										}}
									></p>
								</div>
							</Link>
						</li>
					))}
					 
				</ul>
				<div className="clear" />
			</div>
		</>
	);
};

export default BlogLatestNews;
