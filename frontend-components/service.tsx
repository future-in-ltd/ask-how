import Image from 'next/image';
import React from 'react';

export function Service() {
	return (
		<section className="our_services text-center">
			<div className="container">
				<h2>Our services</h2>
				<div className="row gy-4 justify-content-center">
					<div className="col-md-6 col-xl-4">
						<div className="service_card">
							<div className="service_card_Image">
								<Image
									width={100}
									height={100}
									src="/assets/images/instahome.png"
									alt=""
								/>
							</div>
							<div className="content">
								<div className="service_card_text">
									<h3>InstaConnect</h3>
									<p>
										If you're uncertain and require prompt assistance,
										Don&apos;t worry, as we provide InstaConnect. You can reach
										out to our skilled tutor at any time for guidance. Our tutor
										will assist you in learning the problem-solving method on
										our user-friendly whiteboard and chat-based tutoring
										platform.
									</p>
								</div>
								<div>
									<a href="./how-works.html">
										Learn more
										<svg
											width="18"
											height="19"
											viewBox="0 0 18 19"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M13.0605 9.50002L6.53023 16.0303L5.46973 14.9698L10.9395 9.50002L5.46973 4.03027L6.53023 2.96977L13.0605 9.50002Z"
												fill="#D48F3F"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-xl-4">
						<div className="service_card">
							<div className="service_card_Image">
								<Image
									width={100}
									height={100}
									src="/assets/images/qdrophome.png"
									alt=""
								/>
							</div>
							<div className="content">
								<div className="service_card_text">
									<h3>QDrop</h3>
									<p>
										If you're looking to avoid long wait times for assistance,
										you can simply submit your question in our "QDrop" feature.
										Our experienced tutor will review it and offer you a
										solution and problem-solving technique. You can expect to
										receive an answer to your question within six hours.
									</p>
								</div>
								<div>
									<a href="./how-works-qdrop.html">
										Learn more
										<svg
											width="18"
											height="19"
											viewBox="0 0 18 19"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M13.0605 9.50002L6.53023 16.0303L5.46973 14.9698L10.9395 9.50002L5.46973 4.03027L6.53023 2.96977L13.0605 9.50002Z"
												fill="#D48F3F"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4">
						<div className="service_card">
							<div className="service_card_Image">
								<Image
									width={100}
									height={100}
									src="/assets/images/sedhome.png"
									alt=""
								/>
							</div>
							<div className="content">
								<div className="service_card_text">
									<h3>ScheduleSmart</h3>
									<p>
										Would you like to arrange a tutoring session that fits your
										schedule? You can utilize ScheduleSmart, which allows you to
										schedule a session at your convenience. Our tutor will be
										available at the designated time to assist you. However,
										please remember to attend the scheduled sessions on time!
									</p>
								</div>
								<div>
									<a href="./how-works-schedule-smart.html">
										Learn more
										<svg
											width="18"
											height="19"
											viewBox="0 0 18 19"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M13.0605 9.50002L6.53023 16.0303L5.46973 14.9698L10.9395 9.50002L5.46973 4.03027L6.53023 2.96977L13.0605 9.50002Z"
												fill="#D48F3F"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
