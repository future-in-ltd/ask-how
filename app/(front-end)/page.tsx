import {
	Banner,
	OurService,
	OutTutor,
	Partners,
	Service,
	Subject,
	Testimonial,
} from '@/frontend-components';

export default function Home() {
	return (
		<>
			<Banner />
			<Service />
			<Subject />
			<OurService />
			<Testimonial />
			<Partners />
			<OutTutor />
		</>
	);
}
