import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "UI/UX Design",
		description:
			"Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		description:
			"Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Web development",
		description:
			"Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Social Media Manager",
		description:
			"We manage your social media accounts, creating posts and engaging with your audience. Let us help you grow your online presence.",
		icon: "icon-design-thinking",
	},
];

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Ayush Ranjan",
		designation: "CEO of Svision",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Yash",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Sharnya Goyal",
		designation: "Project Manager",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Prabhat Ranjan",
		designation: "Web Developer",
		img: Team4Img,
	},
];

function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default HomeOne;
