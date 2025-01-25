import Image from 'next/image';
import React from 'react';

export default function Loading() {
	return (
		<div className="preloader">
			<Image
				className="preloader-icon"
				src="/assets/images/icon/sample-loader.gif"
				alt="My Site Preloader"
			/>
		</div>
	);
}
