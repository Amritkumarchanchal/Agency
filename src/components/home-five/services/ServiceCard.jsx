import { Link } from "react-router-dom";
function ServiceCard({ service: { title, description, img } }) {
	return (
		<div className="Svision-marketing-services-item">
			<div className="Svision-marketing-services-icon">
				<img src={img} alt="icon" />
				<h3>{title}:</h3>
			</div>
			<div className="Svision-marketing-services-data">
				<p>{description}</p>
			</div>
			<div className="Svision-marketing-services-btn">
				<Link
					className="Svision-default-btn Svision-default-btn-outline pill outline-white marketing-services-btn"
					to="/single-service"
				>
					Choose Service
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
