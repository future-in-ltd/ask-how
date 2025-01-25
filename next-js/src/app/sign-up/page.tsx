import Link from 'next/link';
import React from 'react';

export default function Page() {
	return (
		<section className="container-fluid sign-up-page px-0">
			<div className="row mx-0">
				<div className="col-lg-5 col-md-12 px-0">
					<div className="left_side_area">
						<div>
							<div className="logo text-center">
								<img src="/assets/images/whitelogo.png" alt="" />
							</div>
							<h2>Get Started with FastTutor !</h2>
							<div className="list-style-pages">
								<p>
									<span>
										<svg
											width="36"
											height="36"
											viewBox="0 0 36 36"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.5 31.5C6.675 31.5 5.9685 31.206 5.3805 30.618C4.7925 30.03 4.499 29.324 4.5 28.5V7.5C4.5 6.675 4.794 5.9685 5.382 5.3805C5.97 4.7925 6.676 4.499 7.5 4.5H28.5C29.325 4.5 30.0315 4.794 30.6195 5.382C31.2075 5.97 31.501 6.676 31.5 7.5V28.5C31.5 29.325 31.206 30.0315 30.618 30.6195C30.03 31.2075 29.324 31.501 28.5 31.5H7.5ZM7.5 28.5H28.5V7.5H7.5V28.5ZM15.9 23.6625C16.1 23.6625 16.2875 23.631 16.4625 23.568C16.6375 23.505 16.8 23.399 16.95 23.25L25.4625 14.7375C25.7375 14.4625 25.875 14.125 25.875 13.725C25.875 13.325 25.725 12.975 25.425 12.675C25.15 12.4 24.8 12.2625 24.375 12.2625C23.95 12.2625 23.6 12.4 23.325 12.675L15.9 20.1L12.6375 16.8375C12.3625 16.5625 12.025 16.425 11.625 16.425C11.225 16.425 10.875 16.575 10.575 16.875C10.3 17.15 10.1625 17.5 10.1625 17.925C10.1625 18.35 10.3 18.7 10.575 18.975L14.85 23.25C15 23.4 15.1625 23.506 15.3375 23.568C15.5125 23.63 15.7 23.6615 15.9 23.6625Z"
												fill="white"
											/>
										</svg>
									</span>
									24*7 Tutor availability
								</p>
								<p>
									<span>
										<svg
											width="36"
											height="36"
											viewBox="0 0 36 36"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.5 31.5C6.675 31.5 5.9685 31.206 5.3805 30.618C4.7925 30.03 4.499 29.324 4.5 28.5V7.5C4.5 6.675 4.794 5.9685 5.382 5.3805C5.97 4.7925 6.676 4.499 7.5 4.5H28.5C29.325 4.5 30.0315 4.794 30.6195 5.382C31.2075 5.97 31.501 6.676 31.5 7.5V28.5C31.5 29.325 31.206 30.0315 30.618 30.6195C30.03 31.2075 29.324 31.501 28.5 31.5H7.5ZM7.5 28.5H28.5V7.5H7.5V28.5ZM15.9 23.6625C16.1 23.6625 16.2875 23.631 16.4625 23.568C16.6375 23.505 16.8 23.399 16.95 23.25L25.4625 14.7375C25.7375 14.4625 25.875 14.125 25.875 13.725C25.875 13.325 25.725 12.975 25.425 12.675C25.15 12.4 24.8 12.2625 24.375 12.2625C23.95 12.2625 23.6 12.4 23.325 12.675L15.9 20.1L12.6375 16.8375C12.3625 16.5625 12.025 16.425 11.625 16.425C11.225 16.425 10.875 16.575 10.575 16.875C10.3 17.15 10.1625 17.5 10.1625 17.925C10.1625 18.35 10.3 18.7 10.575 18.975L14.85 23.25C15 23.4 15.1625 23.506 15.3375 23.568C15.5125 23.63 15.7 23.6615 15.9 23.6625Z"
												fill="white"
											/>
										</svg>
									</span>
									Interactive Whiteboard
								</p>
								<p>
									<span>
										<svg
											width="36"
											height="36"
											viewBox="0 0 36 36"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.5 31.5C6.675 31.5 5.9685 31.206 5.3805 30.618C4.7925 30.03 4.499 29.324 4.5 28.5V7.5C4.5 6.675 4.794 5.9685 5.382 5.3805C5.97 4.7925 6.676 4.499 7.5 4.5H28.5C29.325 4.5 30.0315 4.794 30.6195 5.382C31.2075 5.97 31.501 6.676 31.5 7.5V28.5C31.5 29.325 31.206 30.0315 30.618 30.6195C30.03 31.2075 29.324 31.501 28.5 31.5H7.5ZM7.5 28.5H28.5V7.5H7.5V28.5ZM15.9 23.6625C16.1 23.6625 16.2875 23.631 16.4625 23.568C16.6375 23.505 16.8 23.399 16.95 23.25L25.4625 14.7375C25.7375 14.4625 25.875 14.125 25.875 13.725C25.875 13.325 25.725 12.975 25.425 12.675C25.15 12.4 24.8 12.2625 24.375 12.2625C23.95 12.2625 23.6 12.4 23.325 12.675L15.9 20.1L12.6375 16.8375C12.3625 16.5625 12.025 16.425 11.625 16.425C11.225 16.425 10.875 16.575 10.575 16.875C10.3 17.15 10.1625 17.5 10.1625 17.925C10.1625 18.35 10.3 18.7 10.575 18.975L14.85 23.25C15 23.4 15.1625 23.506 15.3375 23.568C15.5125 23.63 15.7 23.6615 15.9 23.6625Z"
												fill="white"
											/>
										</svg>
									</span>
									Multi-device compatibility
								</p>
								<p>
									<span>
										<svg
											width="36"
											height="36"
											viewBox="0 0 36 36"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.5 31.5C6.675 31.5 5.9685 31.206 5.3805 30.618C4.7925 30.03 4.499 29.324 4.5 28.5V7.5C4.5 6.675 4.794 5.9685 5.382 5.3805C5.97 4.7925 6.676 4.499 7.5 4.5H28.5C29.325 4.5 30.0315 4.794 30.6195 5.382C31.2075 5.97 31.501 6.676 31.5 7.5V28.5C31.5 29.325 31.206 30.0315 30.618 30.6195C30.03 31.2075 29.324 31.501 28.5 31.5H7.5ZM7.5 28.5H28.5V7.5H7.5V28.5ZM15.9 23.6625C16.1 23.6625 16.2875 23.631 16.4625 23.568C16.6375 23.505 16.8 23.399 16.95 23.25L25.4625 14.7375C25.7375 14.4625 25.875 14.125 25.875 13.725C25.875 13.325 25.725 12.975 25.425 12.675C25.15 12.4 24.8 12.2625 24.375 12.2625C23.95 12.2625 23.6 12.4 23.325 12.675L15.9 20.1L12.6375 16.8375C12.3625 16.5625 12.025 16.425 11.625 16.425C11.225 16.425 10.875 16.575 10.575 16.875C10.3 17.15 10.1625 17.5 10.1625 17.925C10.1625 18.35 10.3 18.7 10.575 18.975L14.85 23.25C15 23.4 15.1625 23.506 15.3375 23.568C15.5125 23.63 15.7 23.6615 15.9 23.6625Z"
												fill="white"
											/>
										</svg>
									</span>
									Customized service
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-12 col-lg-7">
					<div className="right_side_from">
						<div>
							<h2>Join our community</h2>

							<div className="pb-3">
								<div className="iti">
									<input type="tel" name="phone" />
								</div>
							</div>

							<input type="email" placeholder="Email" />
							<input type="text" placeholder="Mobile No" />
							<div className="submit_area row">
								<div className="col-md-7 order-2 order-md-1">
									<p>
										Already have an Account ?
										<Link href="/sign-in">Login Now</Link>
									</p>
								</div>
								<div className="col-md-5 order-1 order-md-2 text-center text-md-end mb-3">
									<button
										data-bs-toggle="modal"
										data-bs-target="#regModal2"
										className="btn_submit"
									>
										continue
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="close_btn custom-change">
				<span className="btn_close" data-bs-dismiss="modal" aria-label="Close">
					X
				</span>
			</div>
		</section>
	);
}
