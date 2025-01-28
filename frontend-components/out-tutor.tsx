import React from 'react';

export function OutTutor() {
	return (
		<section className="our-tutor">
			<div className="container">
				<div className="row align-items-center">
					<div
						data-aos="fade-right"
						data-aos-duration="1500"
						className="col-lg-6"
					>
						<div className="youtube_video_area">
							<iframe
								width="100%"
								src="https://www.youtube.com/embed/K-3cH6ZSzkY"
							></iframe>
						</div>
					</div>
					<div
						data-aos="fade-left"
						data-aos-duration="1500"
						className="col-lg-6"
					>
						<div className="content">
							<h2>Our Tutor</h2>
							<p>
								At FastTutor, we strive to provide the best quality tutoring
								service by hiring highly qualified tutors who hold Master's
								degrees in the subject they teach and have been tutoring for
								years. It is challenging to find such skilled tutors having a
								thorough knowledge of their subject matter, but our team
								dedicatedly conducts standardized training to ensure that we
								recruit only the best tutor. The tutor training module is
								designed considering various aspects such as subject knowledge,
								fluency in speaking English, Methodology of tutoring, and
								technical skills for online tutoring. Our tutors can address
								advanced subject matters up to the college-level with ease and
								do have the experience of coursework provided by the schools. We
								have have expert tutors  in various subjects such as Calculus,
								Statistics, Pre-calculus, Physics, Chemistry, Biology, Business,
								Economics, Finance, etc. Tutoring online makes it very easy for
								the tutors to share their wisdom of knowledge with the students.
							</p>
							<a href="./request-demo.html">
								<button className="btn_brand">Request Demo</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
