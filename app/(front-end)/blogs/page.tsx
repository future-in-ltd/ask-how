import React from 'react';
import dummyData from './data';
import { BlogCards } from '@/frontend-components';

export default function Page() {
	return (
		<section className="blogs">
			<div className="container">
				<div className="row" data-aos="fade-up" data-aos-duration="1500">
					{dummyData.map((item: any) => (
						<BlogCards key={item.id} item={item} />
					))}
				</div>
				<div className="pagination">
					<a href="#" className="current-page">
						1
					</a>
					<a href="#">2</a>
					<a href="#">3</a>
					<a href="#">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_371_1741)">
								<path
									d="M4.15332 13.4867L5.33332 14.6667L12 8.00004L5.33332 1.33337L4.15332 2.51337L9.63999 8.00004L4.15332 13.4867Z"
									fill="#444444"
								/>
							</g>
							<defs>
								<clipPath id="clip0_371_1741">
									<rect width="16" height="16" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
