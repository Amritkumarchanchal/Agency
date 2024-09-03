import { Link } from "react-router-dom";
import Shape4Img from "../../../assets/images/v2/shape4.png";
import StarImg from "../../../assets/images/v2/star.png";
function CallToAction() {
	return (
		<div className="Svision-cta-section Svision-section-padding extra-side-margin position-relative">
			<div className="container">
				<div className="Svision-cta-wrap">
					<h2>Join us on your path to future success</h2>
					<Link className="Svision-default-btn" to="/contact-us">
						<span className="Svision-label-up">Contact Us</span>
						<span className="Svision-label-up">Contact Us</span>
					</Link>
				</div>
			</div>
			<div className="Svision-cta-shape1">
				<img src={Shape4Img} alt="Shape4Img" />
			</div>
			<div className="Svision-cta-shape2">
				<img src={StarImg} alt="StarImg" />
			</div>
		</div>
	);
}

export default CallToAction;
