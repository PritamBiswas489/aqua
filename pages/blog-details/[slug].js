import Head from 'next/head';

import './BlogDetails.scss';
import './BlogDetailsResponsive.scss';
import './Blog.scss';
import './BlogResponsive.scss';
import Container from '@/containers/Container';
import {  getBlogDetails, SettingsContent } from '@/helpers/data_utils';
import BlogLatestNews from '@/components/BlogLatestNews/BlogLatestNews';
import config from '@/helpers/config';
const {REACT_APP_RESOURCE_URL} = config();
import moment from 'moment';
function BlogDetailPage(props) {
  const recentBlog = props.blogDetails.data.recentBlog;
  const blog = props.blogDetails.data.blogDetail;
  return (
    <>
      <Head>
        <title>Blog details page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="blogTitle">
				<h2>blog details</h2>
			</section>
			<section className="p-v-40 blogDetails">
				<div className="container">
					<div className="row">
						<div className="col-lg-9 col-md-9 col-sm-12 col-12">
							<div className="relative">
								<div className="box-img fullwidth relative">
									<img src={blog?.img ? `${REACT_APP_RESOURCE_URL}/${blog?.img}` : blogOne.src} alt="" />
								</div>
								<div className="box-date bgColor">
									<div className="date">
										{moment(blog?.createdAt).format('DD-MM-YYYY')[0]}
										<span>{moment(blog?.createdAt).format('DD-MM-YYYY')[1]}</span>
									</div>
									<div className="month">{moment(blog?.createdAt).format('MMM')}</div>
								</div>
							</div>
							<div className="box-content p-l-0 mt-3">
								{/* <div className="meta-tag">
									<div className="info d-flex">
										<div className="item blogAuthor">
											Posted By : <a href="#">John Smith</a>
										</div>
										<div className="item views">
											<a href="#">
												<i className="fa fa-user" /> View : 56
											</a>
										</div>
									</div>
								</div> */}
								<h4
									dangerouslySetInnerHTML={{
										__html: blog?.title ?? `Many people limit themselves`,
									}}
								></h4>
								<div
									className="blogText blog-entry fullwidth m-b-20"
									dangerouslySetInnerHTML={{
										__html: blog?.description ?? `Many people limit themselves`,
									}}
								></div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-12 col-12">
							<BlogLatestNews data={recentBlog} />
						</div>
					</div>
				</div>
			</section>
    </>
  )
}
export default Container(BlogDetailPage);

export async function getServerSideProps(context){
  const {params, req, res} = context;
  const slug  = params.slug;
  return {
      props:{
        settingsContent : await SettingsContent(),
        blogDetails:await getBlogDetails(slug),
        
      },
  };
}