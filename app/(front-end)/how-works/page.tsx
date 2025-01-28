import Image from 'next/image';
import React from 'react';

export default function Page() {
	return (
		<section className="how-its-works">
			<div>
				<div className="container">
					<div className="top_part">
						<h2>How it works</h2>
						<p>
							FastTutor can help academic support you need at your fingertips,
							and unlock your true potential with our expert tutors.
						</p>
					</div>
				</div>
				<div className="content">
					<ul className="stepstoggle" style={{ overflowX: 'auto' }}>
						<div role="presentation">
							<button className="nav-link  ">Instaconnect</button>
						</div>
						<div role="presentation">
							<button className="nav-link  ">Qdrop</button>
						</div>
						<div role="presentation">
							<button className="nav-link active">ScheduleSmart</button>
						</div>
					</ul>
					<div>
						{/* <!-- start tab 1  --> */}
						<div>
							<section className="bg-arts">
								<div className="container">
									<div className="row">
										<div className="col-md-6">
											<div className="content">
												<h2>InstaConnect</h2>
												<p>
													Need assistance with an assignment or your homework?
													Be at ease; we offer InstaConnect. You can contact our
													knowledgeable tutor for online tutoring at any moment.
													On our whiteboard and chat-based tutoring platform,
													our tutor will work with you one-on-one to help you
													solve problems.
												</p>
											</div>
										</div>
										<div className="col-md-6">
											<div className="youtube_video_area">
												{/* <!-- <Image width={100} height={100} src="/assets/images/youtube video placement.png" alt=""> --> */}
												<iframe
													width="100%"
													height="415"
													src="https://www.youtube.com/embed/tgbNymZ7vqY"
												></iframe>
											</div>
										</div>
									</div>
								</div>
							</section>
							<div
								className="container main-section-for-line"
								id="main-section-for-animation"
							>
								<div className="svg-res-container">
									<svg
										className="linemain"
										viewBox="0 0 677 2106"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											id="linescroll"
											d="M77.9307 9.48351C128.612 -8.50988 253.006 -10.6691 345.133 124.641C460.29 293.779 620.432 231.702 640.224 226.304C639.924 300.077 583.185 444.384 358.628 431.429C77.9307 415.235 32.0475 577.175 1.45874 707.627C69.5337 701.329 238.792 721.662 371.223 853.374C503.654 985.085 627.329 946.639 672.612 910.953C665.415 1000.32 561.773 1172.04 204.784 1143.97C146.006 1146.07 28.6287 1201.91 29.3485 1408.47C106.72 1399.17 278.377 1411.71 346.032 1536.22C413.687 1660.74 593.741 1642.68 675.311 1618.09C655.818 1686.47 559.074 1823.22 328.039 1823.22C39.2448 1823.22 32.9471 1934.78 9.55574 2105.71"
											stroke="#D48F3F"
											strokeWidth="1.5"
										/>
									</svg>
								</div>

								{/* <!-- group one  --> */}
								<div className="d-flex line-design-wrap">
									{/* <!-- group one left  --> */}
									<div className="d-flex line-design-content first">
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/i1.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">Login</h5>
										</div>
										<div>
											<div className="number-count-box">
												<Image
													className="shadow rounded-circle"
													src="/assets/images/how/count-1.svg"
													alt=""
													width={100}
													height={100}
												/>
											</div>
										</div>
										<div className="mobile-line-art first"></div>
									</div>
									{/* <!-- group one middle  --> */}
									<div className="d-flex flex-column line-middle-column">
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-1.svg"
												alt=""
											/>
										</div>
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-2.svg"
												alt=""
											/>
										</div>
									</div>

									{/* <!-- group one right  --> */}

									<div
										style={{ paddingTop: '16%' }}
										className="d-flex line-design-content"
									>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													data-aos-anchor=".count-1"
													className="shadow rounded-circle count-2-1st"
													src="/assets/images/how/count-2.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
										</div>
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/i2.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">
												Clicks on Instaconnect button
											</h5>
										</div>

										<div className="mobile-line-art"></div>
									</div>
								</div>

								{/* <!-- group two  --> */}

								<div className="d-flex line-design-wrap">
									{/* <!-- group two left  --> */}
									<div className="d-flex line-design-content first">
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/i3.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">select subject</h5>
										</div>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle count-3-1st i-c-3"
													src="/assets/images/how/count-3.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
										</div>
										<div className="mobile-line-art"></div>
									</div>

									{/* <!-- group two middle  --> */}
									<div className="d-flex flex-column line-middle-column">
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-1.svg"
												alt=""
											/>
										</div>
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-2.svg"
												alt=""
											/>
										</div>
									</div>

									{/* <!-- group tow right  --> */}

									<div
										style={{ paddingTop: '16%' }}
										className="d-flex line-design-content"
									>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle"
													src="/assets/images/how/count-4.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
										</div>
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/i4.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">
												Wait in waiting room for tutor
											</h5>
										</div>
										<div className="mobile-line-art"></div>
									</div>
								</div>

								{/* <!-- group three  --> */}
								<div className="d-flex line-design-wrap">
									{/* <!-- group three left  --> */}
									<div className="d-flex line-design-content first">
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/i5.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">Tutor get connected</h5>
										</div>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle"
													src="/assets/images/how/count-5.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
										</div>
										<div className="mobile-line-art"></div>
									</div>

									{/* <!-- group three middle  --> */}
									<div className="d-flex flex-column line-middle-column">
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-1.svg"
												alt=""
											/>
										</div>
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-2.svg"
												alt=""
											/>
										</div>
									</div>

									{/* <!-- group three right  --> */}

									<div
										style={{ paddingTop: '16%' }}
										className="d-flex line-design-content"
									>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle"
													src="/assets/images/how/count-6.svg"
													alt=""
													width={100}
													height={100}
												/>
											</div>
										</div>
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/i6.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">
												Conversation with Tutor
											</h5>
										</div>
										<div className="mobile-line-art"></div>
									</div>
								</div>

								{/* <!-- group four  --> */}
								<div className="d-flex line-design-wrap">
									{/* <!-- group four left  --> */}
									<div className="d-flex line-design-content first">
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/i7.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">Doubt cleared</h5>
										</div>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle"
													src="/assets/images/how/count-7.svg"
													alt=""
													width={100}
													height={100}
												/>
											</div>
										</div>
										{/* <!-- <div className="mobile-line-art"></div> --> */}
									</div>

									{/* <!-- group four middle  --> */}
									<div
										style={{ opacity: 0 }}
										className="d-flex flex-column line-middle-column noSelect"
									>
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-1.svg"
												alt=""
											/>
										</div>
									</div>

									{/* <!-- group four right  --> */}
									<div className="last-items noSelect" style={{ opacity: 0 }}>
										<div className="d-flex">
											<div>
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle"
													src="/assets/images/how/count-4.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
											<div className="line-design-body wow bounceInUp">
												<div>
													<Image
														width={100}
														height={100}
														src="/assets/images/how/i7.svg"
														alt=""
													/>
												</div>
												<h5 className="text-center mt-3">
													A Tutor will solve it
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- end line  design --> */}
						</div>
						{/* <!-- start tab 2  --> */}
						<div>
							<section className="bg-arts">
								<div className="container">
									<div className="row">
										<div className="col-md-6">
											<div className="content">
												<h2>QDrop</h2>
												<p>
													Hate waiting for too long to get your query solved? No
													worries, just drop your question in the ‘Drop a
													question’ service and our expert tutor will revert
													with proper guidance and help that you need. Our
													tutors will not provide a solution but in fact they
													will make students understand the whole concept.
													Through this feature students can move ahead with
													other topics without being stuck on a single question.
													Schedule a session
												</p>
											</div>
										</div>
										<div className="col-md-6">
											<div className="youtube_video_area">
												{/* <!-- <Image width={100} height={100} src="/assets/images/youtube video placement.png" alt=""> --> */}
												<iframe
													width="100%"
													height="415"
													src="https://www.youtube.com/embed/tgbNymZ7vqY"
												></iframe>
											</div>
										</div>
									</div>
								</div>
							</section>
							<div className="container main-section-for-line">
								<svg
									className="linemain2"
									width="674"
									height="1409"
									viewBox="0 0 674 1409"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										id="linescroll2"
										d="M77.9307 9.48351C128.612 -8.50988 253.006 -10.6691 345.133 124.641C460.29 293.779 620.432 231.702 640.224 226.304C639.924 300.077 583.185 444.384 358.628 431.429C77.9307 415.235 32.0475 577.175 1.45874 707.627C69.5337 701.329 238.792 721.662 371.223 853.374C503.654 985.085 627.329 946.639 672.612 910.953C665.415 1000.32 561.773 1172.04 204.784 1143.97C146.006 1146.07 28.6287 1201.91 29.3485 1408.47"
										stroke="#D48F3F"
										strokeWidth="1.5"
									/>
								</svg>
								{/* <!-- group one  --> */}
								<div className="d-flex line-design-wrap">
									{/* <!-- group one left  --> */}
									<div className="d-flex line-design-content first">
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/i1.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">Login</h5>
										</div>
										<div>
											<div className="number-count-box">
												<Image
													className="shadow rounded-circle"
													src="/assets/images/how/count-1.svg"
													alt=""
													width={100}
													height={100}
												/>
											</div>
										</div>
										<div className="mobile-line-art first"></div>
									</div>
									{/* <!-- group one middle  --> */}
									<div className="d-flex flex-column line-middle-column">
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-1.svg"
												alt=""
											/>
										</div>
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-2.svg"
												alt=""
											/>
										</div>
									</div>

									{/* <!-- group one right  --> */}

									<div
										style={{ paddingTop: '16%' }}
										className="d-flex line-design-content"
									>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													data-aos-anchor=".count-1"
													className="shadow rounded-circle count-2-1st"
													src="/assets/images/how/count-2.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
										</div>
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/q2.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">Clicks on QDrop</h5>
										</div>

										<div className="mobile-line-art"></div>
									</div>
								</div>

								{/* <!-- group two  --> */}
								<div className="d-flex line-design-wrap">
									{/* <!-- group two left  --> */}
									<div className="d-flex line-design-content first">
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/q3.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">
												Fill the form and submit
											</h5>
										</div>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle count-3-1st q-c-3"
													src="/assets/images/how/count-3.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
										</div>
										<div className="mobile-line-art"></div>
									</div>

									{/* <!-- group two middle  --> */}
									<div className="d-flex flex-column line-middle-column">
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-1.svg"
												alt=""
											/>
										</div>
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-2.svg"
												alt=""
											/>
										</div>
									</div>

									{/* <!-- group tow right  --> */}

									<div
										style={{ paddingTop: '16%' }}
										className="d-flex line-design-content"
									>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle q-c-4"
													src="/assets/images/how/count-4.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
										</div>
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/q4.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">
												A Tutor will solve it
											</h5>
										</div>
										<div className="mobile-line-art"></div>
									</div>
								</div>

								{/* <!-- group three  --> */}
								<div className="d-flex line-design-wrap">
									{/* <!-- group three left  --> */}
									<div className="d-flex line-design-content first">
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/q5.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">
												You get answer of your query
											</h5>
										</div>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle"
													src="/assets/images/how/count-5.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
										</div>
										{/* <!-- <div className="mobile-line-art"></div> --> */}
									</div>

									{/* <!-- group three middle  --> */}
									<div
										style={{ opacity: 0 }}
										className="d-flex flex-column line-middle-column"
									>
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-1.svg"
												alt=""
											/>
										</div>
									</div>

									{/* <!-- group three right  --> */}
									<div className="last-items" style={{ opacity: 0 }}>
										<div className="d-flex">
											<div>
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle"
													src="/assets/images/how/count-4.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
											<div className="line-design-body wow bounceInUp">
												<div>
													{/* <Image
														src="/assets/images/how/A-Tutor-will-solve-it.svg"
														alt=""
													/> */}
												</div>
												<h5 className="text-center mt-3">
													A Tutor will solve it
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- end line  design --> */}
						</div>
						{/* <!-- start tab 3  --> */}
						<div>
							<section className="bg-arts">
								<div className="container">
									<div className="row">
										<div className="col-md-6">
											<div className="content">
												<h2 className="ScheduleSmart">ScheduleSmart</h2>
												<p>
													Pre booking is always a great idea, so schedule your
													sessions as per your convenience and our tutors will
													be there to help you at the time you will ask them to.
													These tailored sessions will help students to learn
													and understand better according to their time and
													convenience. In one-to-one sessions with experienced
													tutors, students can get proper guidance for the
													subject which will lead to better understanding. Above
													everything these customized scheduled sessions can
													turn a dreaded subject into a fun subject.
												</p>
											</div>
										</div>
										<div className="col-md-6">
											<div className="youtube_video_area">
												{/* <!-- <Image width={100} height={100} src="/assets/images/youtube video placement.png" alt=""> --> */}
												<iframe
													width="100%"
													src="https://www.youtube.com/embed/tgbNymZ7vqY"
												></iframe>
											</div>
										</div>
									</div>
								</div>
							</section>
							<div className="container main-section-for-line">
								<svg
									className="linemain3"
									width="674"
									height="1409"
									viewBox="0 0 674 1409"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										id="linescroll3"
										d="M77.9307 9.48351C128.612 -8.50988 253.006 -10.6691 345.133 124.641C460.29 293.779 620.432 231.702 640.224 226.304C639.924 300.077 583.185 444.384 358.628 431.429C77.9307 415.235 32.0475 577.175 1.45874 707.627C69.5337 701.329 238.792 721.662 371.223 853.374C503.654 985.085 627.329 946.639 672.612 910.953C665.415 1000.32 561.773 1172.04 204.784 1143.97C146.006 1146.07 28.6287 1201.91 29.3485 1408.47"
										stroke="#D48F3F"
										strokeWidth="1.5"
									/>
								</svg>
								{/* <!-- group one  --> */}
								<div className="d-flex line-design-wrap">
									{/* <!-- group one left  --> */}
									<div className="d-flex line-design-content first">
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/i1.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">Login</h5>
										</div>
										<div>
											<div className="number-count-box">
												<Image
													alt=""
													width={100}
													height={100}
													className="shadow rounded-circle"
													src="/assets/images/how/count-1.svg"
												/>
											</div>
										</div>
										<div className="mobile-line-art first"></div>
									</div>
									{/* <!-- group one middle  --> */}
									<div className="d-flex flex-column line-middle-column">
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-1.svg"
												alt=""
											/>
										</div>
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-2.svg"
												alt=""
											/>
										</div>
									</div>

									{/* <!-- group one right  --> */}

									<div
										style={{ paddingTop: '16%' }}
										className="d-flex line-design-content"
									>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													data-aos-anchor=".count-1"
													className="shadow rounded-circle count-2-1st"
													src="/assets/images/how/count-2.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
										</div>
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/s2.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">
												Clicks on ScheduleSmart
											</h5>
										</div>

										<div className="mobile-line-art"></div>
									</div>
								</div>

								{/* <!-- group two  --> */}
								<div className="d-flex line-design-wrap">
									{/* <!-- group two left  --> */}
									<div className="d-flex line-design-content first">
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/s3.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">
												Fill out form , select time <br />
												and subject and topic
											</h5>
										</div>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle count-3-1st s-c-3"
													src="/assets/images/how/count-3.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
										</div>
										<div className="mobile-line-art"></div>
									</div>

									{/* <!-- group two middle  --> */}
									<div className="d-flex flex-column line-middle-column">
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-1.svg"
												alt=""
											/>
										</div>
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-2.svg"
												alt=""
											/>
										</div>
									</div>

									{/* <!-- group tow right  --> */}

									<div
										style={{ paddingTop: '16%' }}
										className="d-flex line-design-content"
									>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle s-c-4"
													src="/assets/images/how/count-4.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
										</div>
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/s4.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">
												Tutor accept the request
											</h5>
										</div>
										<div className="mobile-line-art"></div>
									</div>
								</div>

								{/* <!-- group three  --> */}
								<div className="d-flex line-design-wrap">
									{/* <!-- group three left  --> */}
									<div className="d-flex line-design-content first">
										<div className="line-design-body wow bounceInUp">
											<div>
												<Image
													width={100}
													height={100}
													src="/assets/images/how/s5.svg"
													alt=""
												/>
											</div>
											<h5 className="text-center mt-3">
												Join at scheduled time
											</h5>
										</div>
										<div>
											<div className="number-count-box">
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle"
													src="/assets/images/how/count-5.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
										</div>
										{/* <!-- <div className="mobile-line-art"></div> --> */}
									</div>

									{/* <!-- group three middle  --> */}
									<div
										style={{ opacity: 0 }}
										className="d-flex flex-column line-middle-column noSelect"
									>
										<div className="mt-4">
											<Image
												width={100}
												height={100}
												src="/assets/images/how/line-1.svg"
												alt=""
											/>
										</div>
									</div>

									{/* <!-- group three right  --> */}
									<div className="last-items noSelect" style={{ opacity: 0 }}>
										<div className="d-flex">
											<div>
												<Image
													data-aos="zoom-in"
													className="shadow rounded-circle"
													src="/assets/images/how/count-4.svg"
													width={100}
													height={100}
													alt=""
												/>
											</div>
											<div className="line-design-body wow bounceInUp">
												<div>
													<Image
														src="/assets/images/how/A-Tutor-will-solve-it.svg"
														alt=""
														width={100}
														height={100}
													/>
												</div>
												<h5 className="text-center mt-3">
													A Tutor will solve it
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- end line  design --> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
