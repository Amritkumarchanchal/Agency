import { Link } from "react-router-dom";
import Shape4Img from "../../../assets/images/v5/shape4.png";
function Cta() {
	return (
		<div className="Svision-cta2-section Svision-section-padding extra-side-margin green-bg">
			<div className="container">
				<div className="Svision-cta2-wrap">
					<h2>Have a project in mind? Let's work together!</h2>
					<p>
						We provides exceptional digital marketing services to help businesses grow our clients online
						presence. We guarantee top-notch quality.
					</p>
					<Link className="Svision-default-btn corn-btn pill" to="/contact-us">
						<span className="Svision-label-up">Get In Touch</span>
						<span className="Svision-label-up">Get In Touch</span>
					</Link>
				</div>
			</div>
			<div className="Svision-cta-shape3">
				<img src={Shape4Img} alt="shape" />
			</div>
		</div>
	);
}

export default Cta;
