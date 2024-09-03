import FaqAccordion from "./FaqAccordion";

function Faq() {
	return (
		<div className="section Svision-section-padding">
			<div className="container">
				<div className="Svision-section-title center clash-grotesk">
					<h2>Ask us if you have doubts or questions</h2>
				</div>
				<div className="row">
					<FaqAccordion />
				</div>
			</div>
		</div>
	);
}

export default Faq;
