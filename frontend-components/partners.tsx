import Image from 'next/image';
import React from 'react';

export function Partners() {
	return (
		<section className="partners">
			<div className="container text-center">
				<h2>Our partner schools</h2>
				<p>We collaborate with 200+ leading universities and companies</p>
				<div
					data-aos="fade-left"
					data-aos-duration="1500"
					className="partners-list swiper"
				>
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div className="partner_logo">
								<Image
									width={100}
									height={100}
									src="/assets/images/patnars/Group 13047.png"
									alt=""
								/>
							</div>
						</div>

						<div className="swiper-slide">
							<div className="partner_logo">
								<Image
									width={100}
									height={100}
									src="/assets/images/patnars/Group 13055.png"
									alt=""
								/>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="partner_logo">
								<Image
									width={100}
									height={100}
									src="/assets/images/patnars/Group 13064.png"
									alt=""
								/>
							</div>
						</div>

						<div className="swiper-slide">
							<div className="partner_logo">
								<Image
									width={100}
									height={100}
									src="/assets/images/patnars/Group 13071.png"
									alt=""
								/>
							</div>
						</div>

						<div className="swiper-slide">
							<div className="partner_logo">
								<Image
									width={100}
									height={100}
									src="/assets/images/patnars/Group 13080.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
