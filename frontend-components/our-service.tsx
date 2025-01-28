import Image from 'next/image';
import React from 'react';

export function OurService() {
	return (
		<section className="our-features">
			<div className="container text-center">
				<h2>Our features</h2>
				<div className="row gy-4">
					<div
						className="col-md-6 col-xl-3"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<div className="features_card">
							<div className="features_card_image">
								<Image
									width={100}
									height={100}
									src="/assets/images/our-features/247.png"
									alt=""
								/>
							</div>
							<div className="features_card_content">
								<h3>24*7 Tutor availability</h3>
								<p>
									Our tutors are always available for study support and guidance
									regardless of location or time zone. In addition to being
									convenient, flexible, and accessible to learners of all ages
									and backgrounds, this one-to-one approach to tutoring offers
									many benefits which are  not found in traditional classroom
									environments. Our dedicated team of tutors are always there to
									assist students after school and before exams.
								</p>
							</div>
						</div>
					</div>
					<div
						className="col-md-6 col-xl-3"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<div className="features_card">
							<div className="features_card_image">
								<Image
									width={100}
									height={100}
									src="/assets/images/our-features/interactive.png"
									alt=""
								/>
							</div>
							<div className="features_card_content">
								<h3>Interactive Whiteboard</h3>
								<p>
									Getting help through online tutoring can be difficult but our
									Whiteboard makes it easy. Using the whiteboard students have
									the opportunity to engage with tutors online effectively. Our
									Whiteboard is equipped with all essential tools, including a
									pencil, text tool, and equation editor, to facilitate
									effective communication. The Whiteboard ensures that there is
									no lag, creating a seamless experience that mirrors an actual
									in-person session between the tutor and the student.
								</p>
							</div>
						</div>
					</div>
					<div
						className="col-md-6 col-xl-3"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<div className="features_card">
							<div className="features_card_image">
								<Image
									width={100}
									height={100}
									src="/assets/images/our-features/multi.png"
									alt=""
								/>
							</div>
							<div className="features_card_content">
								<h3>Multi-device compatibility</h3>
								<p>
									Laptops, iPads, mobile phones, and other compatible devices
									can be used to access assistance
								</p>
							</div>
						</div>
					</div>

					<div
						className="col-md-6 col-xl-3"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<div className="features_card">
							<div className="features_card_image">
								<Image
									src="/assets/images/our-features/customized.png"
									width={100}
									height={100}
									alt=""
								/>
							</div>
							<div className="features_card_content">
								<h3>Customized service</h3>
								<p>
									Tutoring services that are tailored to meet the specific
									academic needs of a school or educational institution. These
									services are created to support the curriculum, instructional
									strategies, and learning goals of the institution. And are
									well-planned for students’ understanding and improvement in
									their performance. Along with the subject and homework help,
									we also help students with their test preps.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
