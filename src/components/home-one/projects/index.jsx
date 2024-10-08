import Star2Img from "../../../assets/images/v1/star2.png";
import Project1Img from "../../../assets/images/v1/project1.png";
import Project2Img from "../../../assets/images/v1/project2.png";
import Project3Img from "../../../assets/images/v1/project3.png";
import Project4Img from "../../../assets/images/v1/project4.png";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		description: "Creating responsive, user-friendly, and visually appealing websites that enhance your brand’s online presence and drive engagement.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Ads Account Management",
		description: "Managing your ad accounts across various platforms, optimizing performance, and ensuring your campaigns reach the right audience.",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Brand Promotion",
		description: "Boosting your brand’s visibility through targeted marketing strategies, creative campaigns, and impactful storytelling.",
		img: Project3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Social Media Management",
		description: "Handling your social media presence by crafting engaging content, interacting with followers, and growing your online community.",
		img: Project4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Product Design",
		description: "Developing the look and feel of physical products, aesthetics, and functionality.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Logo and Branding",
		description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
		img: Project2Img,
	},
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg Svision-section-padding">
			<div className="container">
				<div className="Svision-section-title center light">
					<h2>
						Have a wide range of
						<span className="Svision-title-animation">
							creative projects
							<span className="Svision-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
			</div>
			<div className="swiper Svision-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
