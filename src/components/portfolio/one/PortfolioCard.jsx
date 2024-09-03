import { Link } from "react-router-dom";
import LinkImg from "../../../assets/images/icon/link2.svg";

function PortfolioCard({ portfolio: { title, description, img } }) {
	return (
		<div className="Svision-project-wrap3">
			<div className="Svision-project-thumb3">
				<img src={img} alt={title} />

				<Link to="/single-portfolio" className="Svision-project-link">
					<img src={LinkImg} alt="Link" />
				</Link>
			</div>
			<div className="Svision-project-data3">
				<h3>
					<Link to="/single-portfolio">{title}</Link>
				</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default PortfolioCard;
