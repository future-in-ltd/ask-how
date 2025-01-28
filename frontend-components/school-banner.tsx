import Image from 'next/image';
import React from 'react';

export   function SchoolBanner() {
	return (
		<section className="let_join">
			<div className="container">
				<div className="row flex-column-reverse flex-lg-row align-items-center">
					<div
						className="col-lg-6"
						data-aos="fade-right"
						data-aos-duration="1500"
					>
						<h2 className="text-center text-lg-start">
							Let's Join Forces for the <br />
							betterment of academics :
						</h2>
						<p className="text-center text-lg-start">
							In today's complex academic environment, students face new
							challenges that can impact their success. Our online tutoring
							platform offers academic guidance from qualified tutors to help
							students raise their GPAs, boost their self-esteem, and develop
							critical academic skills for use in and beyond the classroom.
						</p>
						<div className="text-center text-lg-start">
							<a
								href="./request-demo.html"
								className="btn_brand d-inline-block"
							>
								Let's talk more
							</a>
						</div>
					</div>
					<div
						data-aos="fade-left"
						data-aos-duration="1500"
						className="col-lg-6 text-center"
					>
						<Image
							width={500}
							height={500}
							src="/assets/images/school/hero.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
