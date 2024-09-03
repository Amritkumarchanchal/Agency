import { Link } from "react-router-dom";
import Shape1Img from "../../../assets/images/v5/shape1.png";
function Hero() {
	return (
		<div className="Svision-hero-section5 green-bg">
			<div className="container">
				<div className="Svision-hero-content5">
					<h1>
						Increase your brand awareness
						<span className="Svision-hero-shape-title">
							digitally
							<img className="Svision-hero-wave-shape" src={Shape1Img} alt="Shape" />
						</span>
					</h1>
					<p>
						As a digital marketing agency, we specialize in providing a range of online marketing and
						advertising-related services. We help businesses and individuals promote your product, service,
						or brand through various digital channels.
					</p>
					<div className="Svision-hero-btn-wrap center">
						<Link className="Svision-default-btn pill corn-btn" to="/contact-us">
							<span className="Svision-label-up">Let's Talk</span>
							<span className="Svision-label-up">Let's Talk</span>
						</Link>
						<Link className="Svision-default-btn Svision-default-btn-outline pill outline-white" to="/service">
							<span className="Svision-label-up">Explore Our Services</span>
							<span className="Svision-label-up">Explore Our Services</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
