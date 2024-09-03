import Single1Img from "../../../assets/images/portfolio/p_single.png";
import Single2Img from "../../../assets/images/portfolio/p_single2.png";
import Star2Img from "../../../assets/images/v1/star2.png";
const projectResolveSteps = [
	{
		id: crypto.randomUUID(),
		title: "Concept Development",
		text: "Based on the market research findings, the design team began developing conceptual designs for the smart thermostat. They brainstormed ideas, created mood boards, and explored various design directions.",
	},
	{
		id: crypto.randomUUID(),
		title: "Manufacturing and Production",
		text: "Once the design was finalized, the project transitioned to the manufacturing phase. Materials, suppliers, and production processes were carefully selected to ensure quality and cost-effectiveness.",
	},
	{
		id: crypto.randomUUID(),
		title: "Success and Impact",
		text: "The smart home thermostat quickly gained popularity and was well-received in the market. The project was a success, benefiting both the company and the environment.",
	},
];
function PortfolioDetails() {
	return (
		<div className="Svision-project-single-section">
			<div className="container">
				<div className="Svision-project-single-thumb">
					<img src={Single1Img} alt="Single" />
				</div>
				<div className="Svision-project-info-wrap">
					<div className="Svision-project-info">
						<h3>Client:</h3>
						<p>Alfado Company,UK</p>
					</div>
					<div className="Svision-project-info">
						<h3>Date:</h3>
						<p>June</p>
					</div>
					<div className="Svision-project-info">
						<h3>Duration:</h3>
						<p>Two Months</p>
					</div>
					<div className="Svision-project-info">
						<h3>Cost:</h3>
						<p>50k USD</p>
					</div>
				</div>
				<div className="Svision-project-single-wrap">
					<div className="row">
						<div className="col-lg-4 order-lg-2">
							<div className="Svision-project-single-thumb2 ">
								<img src={Single2Img} alt="Single 2" />
							</div>
						</div>
						<div className="col-lg-8">
							<div className="Svision-default-content m-right-gap">
								<h2>
									How we initiate and
									<span className="Svision-title-animation">
										resolve the project
										<span className="Svision-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
									The project began when a leading technology identified a market need for an
									innovative and energy-efficient smart home thermostat.
								</p>
								<div className="Svision-resolve-project-wrap">
									{projectResolveSteps.map((item, index) => (
										<div key={item.id} className="Svision-resolve-project-item">
											<h3>
												{index + 1}. {item.title}:
											</h3>
											<p>{item.text}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioDetails;
