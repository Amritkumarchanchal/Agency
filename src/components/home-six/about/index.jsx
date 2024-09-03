import CountUp from "react-countup";
import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v6/shapes.png";
import Thumb1Img from "../../../assets/images/v6/thumb-v6-1.png";
function About() {
	return (
		<div className="section dark-bg2 Svision-section-padding position-relative">
			<div id="Svision-counter"></div>
			<div className="container">
				<div className="Svision-section-title light playfair center max-width-xl">
					<h2>We are professional interior design experts</h2>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-2">
						<div className="Svision-v6-thumb1">
							<img src={Thumb1Img} alt="About" />
						</div>
					</div>
					<div className="col-lg-6 d-flex align-items-center">
						<div className="Svision-default-content-wrap">
							<div className="Svision-default-content light large">
								<p>
									We are an experienced interior design firm offering a professional service
									specializing in creating and also enhancing interior spaces for residential,
									commercial or other types of buildings.
								</p>
								<p>
									We are a team of skilled and quality interior designers who are trained and skilled
									in the art and science of designing spaces to meet the functional and aesthetic
									needs of our clients.
								</p>
							</div>
							<div className="Svision-counter-wrap6">
								<div className="Svision-counter-data6">
									<h2>
										<span className="Svision-counter">
											<CountUp end={15} duration={3} redraw={true} enableScrollSpy />
										</span>
										+
									</h2>
									<p>
										Years of work <br /> experience
									</p>
								</div>
								<div className="Svision-counter-data6">
									<h2>
										<span className="Svision-counter">
											<CountUp end={2} duration={3} redraw={true} enableScrollSpy />
										</span>
										k
									</h2>
									<p>
										successful <br /> projects done
									</p>
								</div>
							</div>
							<div className="Svision-extra-mt text-right">
								<Link className="Svision-default-btn green-btn pill shadow-white" to="/contact-us">
									<span>Read Our Story</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="Svision-footer-shape">
				<img src={ShapeImg} alt="Shape" />
			</div>
		</div>
	);
}

export default About;
