import { Link } from "react-router-dom";
function ServiceCard({ service: { title, description, img } }) {
	return (
		<div className="Svision-service-increase-row">
			<div className="Svision-service-increase-item">
				<img className="swipeimage" src={img} alt="thumb" />
				<div className="Svision-service-increase-title">
					<h3>{title}:</h3>
				</div>
				<div className="Svision-service-increase-body">
					<p>{description}</p>
				</div>
				<Link to="/single-service" className="Svision-service-increase-icon">
					<i className="icon-arrow-right"></i>
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
