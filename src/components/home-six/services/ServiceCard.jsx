import ArrowDarkImg from "../../../assets/images/v6/arrow-dark.svg";
import { Link } from "react-router-dom";
function ServiceCard({ service: { title, description, img, bgColor } }) {
	return (
		<div className={`Svision-iconbox-wrap8 ${bgColor}`}>
			<div className="Svision-iconbox-icon8">
				<img src={img} alt="icon" />
			</div>
			<div className="Svision-iconbox-data8">
				<h3>{title}</h3>
				<p>{description}</p>
				<Link to="/single-service">
					<img src={ArrowDarkImg} alt="Arrow" />
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
