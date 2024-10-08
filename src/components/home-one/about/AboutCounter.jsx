import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="Svision-counter-wrap">
			<div className="Svision-counter-data">
				<h2 className="Svision-counter-number">
					<span className="Svision-counter">
						<CountUp end={3} duration={0} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Years of experience</p>
			</div>
			<div className="Svision-counter-data">
				<h2 className="Svision-counter-number">
					<span className="Svision-counter">
						<CountUp end={92} duration={3} redraw={true} enableScrollSpy />
					</span>
					s
				</h2>
				<p>Successful projects</p>
			</div>
			<div className="Svision-counter-data">
				<h2 className="Svision-counter-number">
					<span className="Svision-counter">
						<CountUp end={100} duration={3} redraw={true} enableScrollSpy />
					</span>
					%
				</h2>
				<p>Client satisfaction rate</p>
			</div>
		</div>
	);
}

export default AboutCounter;
