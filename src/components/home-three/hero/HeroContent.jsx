import StarImg from "../../../assets/images/v3/star.svg";
function HeroContent() {
	return (
		<div className="Svision-hero-content3">
			<p>
				<span>#1 SEO agency for fast-growing companies</span>
			</p>
			<h1>Provides the best ranking experience</h1>
			<p>
				We work to improve your business visibility within search engines, boost organic traffic to your website
				and rank for the most valuable keywords.
			</p>
			<div className="Svision-hero-subscription">
				<form action="#">
					<input type="email" placeholder="Enter your email address" />
					<button id="Svision-hero-subscription-btn" type="submit">
						<span className="Svision-label-up">Get started</span>
						<span className="Svision-label-up">Get started</span>
					</button>
				</form>
			</div>
			<div className="Svision-hero-rating">
				<ul>
					<li>
						<img src={StarImg} alt="StarImg" />
						<img src={StarImg} alt="StarImg" />
						<img src={StarImg} alt="StarImg" />
						<img src={StarImg} alt="StarImg" />
						<img src={StarImg} alt="StarImg" />
					</li>
					<li>4.8/5 stars based on 1K client reviews</li>
				</ul>
			</div>
		</div>
	);
}

export default HeroContent;
