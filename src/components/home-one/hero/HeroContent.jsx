import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import User1Img from "../../../assets/images/v1/user1.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";
function HeroContent() {
	return (
		<div className="Svision-hero-content">
			<h1>
				<span className="Svision-title-animation">
					A creative
					<img src={StarImg} alt="StarImg" />
				</span>{" "}
				MultiMedia Agency
			</h1>
			<p>
				{`We create stunning websites, manage innovative designs, promote your brand, and handle all your Social Media account needs.`}
			</p>
			<div className="Svision-hero-user-wrap">
				<div className="Svision-hero-user-thumb">
					<div className="Svision-hero-user-thumb-item">
						<img src={User1Img} alt="User1Img" />
					</div>
					<div className="Svision-hero-user-thumb-item">
						<img src={User3Img} alt="User3Img" />
					</div>
					<div className="Svision-hero-user-thumb-item">
						<img src={User2Img} alt="User2Img" />
					</div>
				</div>
				<div className="Svision-hero-user-data">
					<p>Believed by more than a hundred people</p>
				</div>
			</div>
			<Link className="Svision-call-btn" to="/contact-us">
				Book a free consultation <i className="icon-call"></i>
			</Link>
			<div className="Svision-hero-shape">
				<img src={ShapeImg} alt="ShapeImg" />
			</div>
		</div>
	);
}

export default HeroContent;
