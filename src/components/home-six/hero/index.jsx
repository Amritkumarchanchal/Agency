import Shape2Img from "../../../assets/images/v6/shapes2.png";
import NextImg from "../../../assets/images/v6/next.svg";
import NextWhiteImg from "../../../assets/images/v6/next-white.svg";
import TextImg from "../../../assets/images/v6/image.png";
function Hero() {
	return (
		<div className="Svision-hero-section5 bg-light7 position-relative">
			<div className="container">
				<div className="Svision-hero-content6 overflow-hidden">
					<div className="Svision-hero-title">
						<div className="Svision-hero-text">Tailored interior</div>
						<div className="Svision-marquee-one">
							<div className="Svision-infinite">
								{[...Array(18)].map(() => (
									<a key={crypto.randomUUID()} href="">
										<img src={NextImg} alt="next" />
									</a>
								))}
							</div>
						</div>
					</div>
					<div className="Svision-hero-title">
						<div className="Svision-hero-text">design</div>
						<img src={TextImg} alt="TextImg" />
						<div className="Svision-hero-text"> that speaks</div>
					</div>
					<div className="Svision-hero-title">
						<div className="Svision-hero-text">to your style</div>
						<div className="Svision-marquee-two">
							<div className="Svision-infinite two">
								{[...Array(18)].map(() => (
									<a key={crypto.randomUUID()} href="">
										to your style <img src={NextWhiteImg} alt="Next" />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="Svision-p-shape z-index">
				<img src={Shape2Img} alt="Shape" />
			</div>
		</div>
	);
}

export default Hero;
