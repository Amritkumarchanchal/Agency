import FaqAccordion from "./FaqAccordion";

function Faq() {
	return (
		<div className="section Svision-section-padding3">
			<div className="container">
				<div className="Svision-section-title center libre-font">
					<h2>Get answers to all your questions</h2>
				</div>
				<div className="accordion Svision-accordion-wrap5" id="Svision-accordion">
					<FaqAccordion />
				</div>
			</div>
		</div>
	);
}

export default Faq;
