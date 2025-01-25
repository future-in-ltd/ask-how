import Image from 'next/image';
import Link from 'next/link';

const BlogCards = ({ item }: any) => {
	return (
		<div className="col-md-6 col-lg-4" key={item.id}>
			<div className="single_blog_card">
				<Link href={item.link}>
					<Image src={item.image} alt={item.title} />
				</Link>
				<div className="content">
					<div className="d-flex info align-items-center justify-content-between">
						<div className="d-flex align-items-center">
							<svg
								width="25"
								height="24"
								viewBox="0 0 25 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19.5 3.99976H17.5V2.99976C17.5 2.73454 17.3946 2.48019 17.2071 2.29265C17.0196 2.10511 16.7652 1.99976 16.5 1.99976C16.2348 1.99976 15.9804 2.10511 15.7929 2.29265C15.6054 2.48019 15.5 2.73454 15.5 2.99976V3.99976H9.5V2.99976C9.5 2.73454 9.39464 2.48019 9.20711 2.29265C9.01957 2.10511 8.76522 1.99976 8.5 1.99976C8.23478 1.99976 7.98043 2.10511 7.79289 2.29265C7.60536 2.48019 7.5 2.73454 7.5 2.99976V3.99976H5.5C4.70435 3.99976 3.94129 4.31583 3.37868 4.87844C2.81607 5.44104 2.5 6.20411 2.5 6.99976V18.9998C2.5 19.7954 2.81607 20.5585 3.37868 21.1211C3.94129 21.6837 4.70435 21.9998 5.5 21.9998H19.5C20.2956 21.9998 21.0587 21.6837 21.6213 21.1211C22.1839 20.5585 22.5 19.7954 22.5 18.9998V6.99976C22.5 6.20411 22.1839 5.44104 21.6213 4.87844C21.0587 4.31583 20.2956 3.99976 19.5 3.99976ZM20.5 18.9998C20.5 19.265 20.3946 19.5193 20.2071 19.7069C20.0196 19.8944 19.7652 19.9998 19.5 19.9998H5.5C5.23478 19.9998 4.98043 19.8944 4.79289 19.7069C4.60536 19.5193 4.5 19.265 4.5 18.9998V11.9998H20.5V18.9998ZM20.5 9.99976H4.5V6.99976C4.5 6.73454 4.60536 6.48019 4.79289 6.29265C4.98043 6.10511 5.23478 5.99976 5.5 5.99976H7.5V6.99976C7.5 7.26497 7.60536 7.51933 7.79289 7.70686C7.98043 7.8944 8.23478 7.99976 8.5 7.99976C8.76522 7.99976 9.01957 7.8944 9.20711 7.70686C9.39464 7.51933 9.5 7.26497 9.5 6.99976V5.99976H15.5V6.99976C15.5 7.26497 15.6054 7.51933 15.7929 7.70686C15.9804 7.8944 16.2348 7.99976 16.5 7.99976C16.7652 7.99976 17.0196 7.8944 17.2071 7.70686C17.3946 7.51933 17.5 7.26497 17.5 6.99976V5.99976H19.5C19.7652 5.99976 20.0196 6.10511 20.2071 6.29265C20.3946 6.48019 20.5 6.73454 20.5 6.99976V9.99976Z"
									fill="#999999"
								/>
							</svg>
							<p className="date">{item.date}</p>
						</div>
						<div>
							<p>by {item.author}</p>
						</div>
					</div>
					<Link href={item.link}>
						<h3>{item.title}</h3>
					</Link>
					<p>{item.description}</p>
					<div>
						<Link href={item.link}>
							Learn more
							<svg
								width="19"
								height="19"
								viewBox="0 0 19 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M13.5605 9.49978L7.03023 16.03L5.96973 14.9695L11.4395 9.49978L5.96973 4.03003L7.03023 2.96953L13.5605 9.49978Z"
									fill="#D48F3F"
								/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCards;
