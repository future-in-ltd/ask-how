import Image from 'next/image';
import React from 'react';

export function Banner() {
	return (
		<section className="hero d-flex align-items-center">
			<div className="container">
				<div className="row align-items-center flex-column-reverse flex-lg-row">
					<div className="col-lg-6 pe-lg-0 hero_left">
						<div className="hero_big_text">
							<h1>
								"Unlock your academic potential with
								<span className="hero_big_text_sheap text-nowrap">
									FastTutor<span className="text_main">'</span>s
								</span>
								lightning <br className="d-none md:d-md-block" />
								speed!"
							</h1>
						</div>
						<div className="hero_bottom_text">
							<p>
								Get the academic support you need at your fingertips, and unlock
								your true potential with our expert tutors.
							</p>
						</div>
						<div className="hero_bottom-button">
							<button className="btn_brand">Let’s Get Started</button>
							<a href="./how-works.html" className="btn_transparent">
								<svg
									width="15"
									height="21"
									viewBox="0 0 15 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2.5 0.5C1.83696 0.5 1.20107 0.763392 0.732233 1.23223C0.263392 1.70107 0 2.33696 0 3V18C0 18.663 0.263392 19.2989 0.732233 19.7678C1.20107 20.2366 1.83696 20.5 2.5 20.5H14.375C14.5408 20.5 14.6997 20.4342 14.8169 20.3169C14.9342 20.1997 15 20.0408 15 19.875C15 19.7092 14.9342 19.5503 14.8169 19.4331C14.6997 19.3158 14.5408 19.25 14.375 19.25H2.5C2.16848 19.25 1.85054 19.1183 1.61612 18.8839C1.3817 18.6495 1.25 18.3315 1.25 18H13.75C14.0815 18 14.3995 17.8683 14.6339 17.6339C14.8683 17.3995 15 17.0815 15 16.75V3C15 2.33696 14.7366 1.70107 14.2678 1.23223C13.7989 0.763392 13.163 0.5 12.5 0.5H2.5ZM3.4375 3.625H11.5625C11.8111 3.625 12.0496 3.72377 12.2254 3.89959C12.4012 4.0754 12.5 4.31386 12.5 4.5625C12.5 4.81114 12.4012 5.0496 12.2254 5.22541C12.0496 5.40123 11.8111 5.5 11.5625 5.5H3.4375C3.18886 5.5 2.9504 5.40123 2.77459 5.22541C2.59877 5.0496 2.5 4.81114 2.5 4.5625C2.5 4.31386 2.59877 4.0754 2.77459 3.89959C2.9504 3.72377 3.18886 3.625 3.4375 3.625Z"
										fill="#7531AB"
									/>
								</svg>
								Get know more
							</a>
						</div>
					</div>
					<div className="col-lg-6 ps-lg-0">
						<div className="hero_Image">
							<Image
								width={1000}
								height={1000}
								src="/assets/images/hero-model.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
