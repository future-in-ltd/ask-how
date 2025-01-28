import {
	Benefits,
	OurService,
	SchoolBanner,
	Service,
} from '@/frontend-components';
import React from 'react';

export default function Page() {
	return (
		<>
			<SchoolBanner />
			<Service />
			<Benefits />
			<OurService />
		</>
	);
}
