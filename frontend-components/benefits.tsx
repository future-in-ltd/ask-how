import Image from 'next/image';
import React from 'react';

export function Benefits() {
	return (
		<section className="benefits">
			<div className="container">
				<h2>Benefit of our service to schools</h2>
				<div className="row">
					<div
						data-aos="fade-right"
						data-aos-duration="1500"
						className="col-lg-6 order-2 order-lg-1"
					>
						<div className="content">
							<h3>Personalized learning</h3>
							<p>
								We are providing 1:1 Private tutoring services where our tutors
								can assist the student with personalized learning opportunities
								for students. Who may struggle with certain subjects or need
								extra help in any concept, resulting in a more individualized
								educational experience. Our tutors assess each student's
								strengths and shortcomings using a standardised process to
								improve the learning environment for the students. Tutors also
								help students with study tips to improve their way of studying.
							</p>
						</div>
					</div>
					<div
						data-aos="zoom-in"
						data-aos-duration="1500"
						className="col-lg-6 order-1 order-lg-2 text-center"
					>
						<Image
							width={100}
							height={100}
							src="/assets/images/benifites/learning.png"
							alt=""
						/>
					</div>
				</div>
				<div className="row mt-60 gy-4">
					<div
						data-aos="zoom-in"
						data-aos-duration="1500"
						className="col-lg-6 text-center"
					>
						<Image
							width={100}
							height={100}
							src="/assets/images/benifites/engagement.png"
							alt=""
						/>
					</div>
					<div
						className="col-lg-6"
						data-aos="fade-left"
						data-aos-duration="1500"
					>
						<div className="content">
							<h3>Increased student engagement</h3>
							<p>
								Tutoring students online is a bit challenging task but our
								online tutoring platform has been equipped with interactive
								tools such as audio, video, chat, and virtual whiteboard to
								collaborate the student with the tutors online and work on the
								problem in real-time. This makes online tutoring a more engaging
								learning experience for students. And individual tutoring also
								helps tutors to provide complete assistance to students. Thereby
								helping them in their Academic success.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
