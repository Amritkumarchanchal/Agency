import Star2Img from "../../../assets/images/v1/star2.png";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
import Thumb4Img from "../../../assets/images/v1/t_thumb4.png";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Outstanding service and quality!",
		description:
			"Exceptional service from start to finish. The website Svision built for us is not only visually stunning but also functions perfectly. The team was always available to help with our queries and went above and beyond to meet our expectations.",
		author: "Ravi Kumar",
		designation: "Founder@TechSolutions",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Expert ad management",
		description:
			"Svision's expertise in managing our ad accounts has significantly improved our outreach. Our ads are now performing better than ever, thanks to their strategic approach and constant monitoring. Highly recommend their service.",
		author: "Amit Verma",
		designation: "Business Owner",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Effective brand promotion",
		description:
			"Our brand’s visibility has grown tremendously since we started working with Svision. Their creative campaigns and strategic marketing efforts have helped us connect with our target audience in ways we hadn't imagined before.",
		author: "Priya Sharma",
		designation: "CEO@FashionHub",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Social media magic",
		description:
			"Svision’s management of our social media has been nothing short of amazing. They've taken the time to understand our brand and create content that truly resonates with our followers, increasing our engagement significantly.",
		author: "Vikram Singh",
		designation: "Marketing Head",
		img: Thumb4Img,
	},
];

function Testimonial() {
	return (
		<div className="section Svision-section-padding3">
			<div className="container">
				<div className="Svision-section-title center">
					<h2>
						Clients are always
						<span className="Svision-title-animation">
							satisfied with us
							<span className="Svision-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial) => (
						<TestimonialCard key={testimonial.id} testimonial={testimonial} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
