import { Link } from "react-router-dom";
import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";
function ServiceCard({ service: { title, description, icon } }) {
	return (
		<div className="col-lg-6">
			<div className="Svision-iconbox-wrap">
				<div className="Svision-iconbox-icon">
					<i className={`${icon}`}></i>
				</div>
				<div className="Svision-iconbox-data">
					<h3>{title}</h3>
					<p>{description}</p>
					<Link to="/single-service" className="Svision-icon">
						<img src={ArrowRightImg} alt="arrow right" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;
