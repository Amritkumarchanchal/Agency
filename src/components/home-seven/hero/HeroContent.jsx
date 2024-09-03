import { Link } from "react-router-dom";
import TitleShapImg from "../../../assets/images/v7/title-shape.png";
function HeroContent() {
	return (
		<div className="Svision-hero-content7">
			<h1>
				We present your brand creatively
				<span className="Svision-hero-shape-title2">
					<img className="Svision-hero-wave-shape" src={TitleShapImg} alt="Shape Title" />
				</span>
			</h1>
			<p>
				Our advertising agency specializes in creating captivating and visually stunning campaigns that leave a
				lasting impression on audiences to elevate your brand to new heights.
			</p>
			<div className="Svision-hero-btn-wrap m-0">
				<Link className="Svision-default-btn blue-btn2" to="/contact-us">
					<span className="Svision-label-up">Get In Touch</span>
					<span className="Svision-label-up">Get In Touch</span>
				</Link>
				<Link className="Svision-default-btn Svision-default-btn-outline outline-dark" to="/service">
					<span className="Svision-label-up">Explore Our Services</span>
					<span className="Svision-label-up">Explore Our Services</span>
				</Link>
			</div>
		</div>
	);
}

export default HeroContent;
