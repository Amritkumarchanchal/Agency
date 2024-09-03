import Video from "./Video";
import Star2Img from "../../../assets/images/v1/star2.png";
import AboutCounter from "./AboutCounter";

function About() {
	return (
		<div className="section Svision-section-padding">
			<div id="Svision-counter"></div>
			<div className="container">
				<div className="Svision-section-title">
					<div className="row">
						<div className="col-lg-7">
							<h2>
								<span className="Svision-title-animation">
									We make your
									<span className="Svision-title-icon">
										<img src={Star2Img} alt="Star2Img" />
									</span>
								</span>{" "}
								business stand out
							</h2>
						</div>
						<div className="col-lg-4 offset-lg-1 d-flex align-items-center">
							<p>
								We work closely with our clients to know their objectives, target audience, unique
								needs, and practical design solutions.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<Video />
					</div>
					<div className="col-lg-4">
						<AboutCounter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
