import { Link } from "react-router-dom";
import ArrowRight4Img from "../../../assets/images/icon/arrow-right4.svg";
function ServiceCard({ service: { title, description, img } }) {
	return (
		<div className="Svision-iconbox-wrap3">
			<div className="Svision-iconbox-icon3">
				<img src={img} alt="Icon" />
			</div>
			<div className="Svision-iconbox-data3">
				<h3>{title}</h3>
				<p>{description}</p>
				<Link className="Svision-service-icon" to="/single-service">
					<img src={ArrowRight4Img} alt="ArrowRight4Img" />
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
