import { Link } from "react-router-dom";
import Thumb1Img from "../../../assets/images/v5/thumb1.png";
function About() {
	return (
		<div className="section Svision-section-padding4">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="Svision-content-thumb3 ">
							<img src={Thumb1Img} alt="Thumb" />
						</div>
					</div>
					<div className="col-lg-7 d-flex align-items-center">
						<div className="Svision-default-content libre-font m-left-gap-small">
							<h2>Making your brand bigger than ever</h2>
							<p>
								We help businesses & organizations promote their products, services or brands in the
								online world with 12 years of experience. We have become a leader in digital
								experiences, web design, and branding.{" "}
							</p>
							<p>
								We love what we do with our clients to ensure their positioning and digital
								transformation ensure the business meets every standard.
							</p>
							<div className="Svision-btn-wrap">
								<Link className="Svision-default-btn pill corn-btn" to="/contact-us">
									<span className="Svision-label-up">Explore more</span>
									<span className="Svision-label-up">Explore more</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
