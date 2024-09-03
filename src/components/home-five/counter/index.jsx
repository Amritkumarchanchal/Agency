import CountUp from "react-countup";
function Counter() {
	return (
		<div className="Svision-counter-section2">
			<div id="Svision-counter"></div>
			<div className="container">
				<div className="Svision-counter-wrap5">
					<div className="Svision-counter-data5">
						<h2>
							<span className="Svision-counter">
								<CountUp end={100} duration={3} redraw={true} enableScrollSpy />
							</span>
							+
						</h2>
						<p>Years of experience</p>
					</div>
					<div className="Svision-counter-data5">
						<h2>
							<span data-percentage="85" className="Svision-counter"></span>
							<CountUp end={85} duration={3} redraw={true} enableScrollSpy />k
						</h2>
						<p>Active monthly users</p>
					</div>
					<div className="Svision-counter-data5">
						<h2>
							<span className="Svision-counter">
								<CountUp end={60} duration={3} redraw={true} enableScrollSpy />
							</span>
							k+
						</h2>
						<p>Project completed</p>
					</div>
					<div className="Svision-counter-data5">
						<h2>
							<span className="Svision-counter">
								<CountUp end={4.8} duration={3} redraw={true} enableScrollSpy decimals="1" />
							</span>
							/5
						</h2>
						<p>Total success rate</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Counter;
