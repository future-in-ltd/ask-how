import Image from 'next/image';
import React from 'react';

export function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="row footer_options text-center text-md-start">
					<div className="col-xl-3 col-sm-6">
						<Image
							className="footer-logo"
							src="/assets/images/whitelogo.png"
							alt=""
						/>
						<p>
							Get the academic support you need at your fingertips, and unlock
							your true potential with our expert tutors.
						</p>
					</div>
					<div className="col-xl-2 col-sm-6 offset-xl-1">
						<h2>Menu</h2>
						<a href="#">Assignment Help</a>
						<a href="#">Online Tutoring</a>
						<a href="#">Homework Help</a>
						<a href="#">Writing Help</a>
						<a href="#">Physics</a>
					</div>
					<div className="col-xl-2 col-sm-6">
						<h2>Links</h2>
						<a href="#">Blog</a>
						<a href="#">Join as a Tutor</a>
						<a href="#">Make Payment</a>
						<a href="#">About Us</a>
						<a href="#">Refund Policy</a>
					</div>
					<div className="col-xl-2 col-sm-6 contact-info">
						<h2>Contact Info</h2>
						<div>
							<a className="flex" href="tel:+910000000000">
								<i className="fa-solid fa-phone me-2"></i>
								<span> +91 0000000000 </span>
							</a>
						</div>
						<div>
							<a className="flex" href="mailto:support@fasttutor.co">
								<i className="fa-regular fa-envelope me-2"></i>
								<span>support@fasttutor.co</span>
							</a>
						</div>
					</div>
					<div className="col-xl-2 col-sm-6 text-xl-end">
						<h2 className="mb-0 mb-xl-2">Social Media</h2>
						<div className="social_icons justify-content-xl-end">
							<a href="#" target="_blank" rel="noopener noreferrer">
								<i className="fa-brands fa-facebook-f"></i>
							</a>
							<a
								href="https://www.instagram.com/itsfasttutor/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a
								href="https://www.youtube.com/@itsfasttutor"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-youtube"></i>
							</a>
							<a
								href="https://twitter.com/itsfasttutor"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-twitter"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="copyright_text d-flex">
					<p>Copyright © 2023 Fasttutor.co All Rights Reserved.</p>
					<p className="mx-3">|</p>
					<p>
						<a target="_blank" href="https://futureinltd.com/">
							Designed with <span style={{ color: 'red' }}>❤</span> by Future
							Innovation LTD
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
