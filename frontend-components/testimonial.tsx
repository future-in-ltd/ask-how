import Image from 'next/image';
import React from 'react';

export function Testimonial() {
	return (
		<section className="testimonials">
			<div className="container">
				<p className="sub_heading">Testimonials</p>
				<h2>What Our Student Says</h2>
				<div
					data-aos="fade-left"
					data-aos-duration="1500"
					className="testimonials_list"
				>
					<div className="swiper mySwiper">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="tumbnile_area">
									<Image
										width={100}
										height={100}
										src="/assets/images/slider/1.png"
										alt=""
									/>
								</div>
								<div className="content">
									<h3>Emma Williams</h3>
									<p>Student</p>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="tumbnile_area">
									<Image
										width={100}
										height={100}
										src="/assets/images/slider/2.png"
										alt=""
									/>
								</div>
								<div className="content">
									<h3>Ava Smith</h3>
									<p>Student</p>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="tumbnile_area">
									<Image
										width={100}
										height={100}
										src="/assets/images/slider/3.png"
										alt=""
									/>
								</div>
								<div className="content">
									<h3>Oliver Davis</h3>
									<p>Student</p>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="tumbnile_area">
									<Image
										width={100}
										height={100}
										src="/assets/images/slider/4.png"
										alt=""
									/>
								</div>
								<div className="content">
									<h3>Henry Miller</h3>
									<p>Student</p>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="tumbnile_area">
									<Image
										width={100}
										height={100}
										src="/assets/images/slider/5.png"
										alt=""
									/>
								</div>
								<div className="content">
									<h3>Mia Lucas</h3>
									<p>Student</p>
								</div>
							</div>
						</div>
						<div className="navigation-area-of-slide row align-items-center">
							<div className="col-md-6">
								<div className="bar"></div>
							</div>
							<div className="col-md-6">
								<div className="btnsof-nav">
									<div className="btn-prev">
										<svg
											width="8"
											height="14"
											viewBox="0 0 8 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7 0.971191L1 6.97119L7 12.9712"
												stroke="white"
												strokeWidth="1.2"
												strokeLinecap="square"
											/>
										</svg>
									</div>
									<div className="btn-next">
										<svg
											width="8"
											height="14"
											viewBox="0 0 8 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M1 12.9712L7 6.97119L1 0.971191"
												stroke="white"
												strokeWidth="1.2"
												strokeLinecap="square"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
