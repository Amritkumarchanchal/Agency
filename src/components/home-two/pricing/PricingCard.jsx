import { Link } from "react-router-dom";
import LikeImg from "../../../assets/images/v2/like.svg";
function PricingCard({ pricing: { plan, price, img, services, active } }) {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="Svision-pricing-wrap">
				<div className="Svision-pricing-header">
					<img src={img} alt={plan} />
					<h3>{plan}</h3>
				</div>
				<div className="Svision-pricing-price">
					<h2>${price}</h2>
				</div>
				<div className="Svision-pricing-body">
					<ul>
						{services.map((service) => (
							<li key={service}>
								<img src={LikeImg} alt="like" />
								{service}
							</li>
						))}
					</ul>
				</div>
				<Link className={`Svision-default-btn Svision-pricing-btn ${active && "active"}`} to="/pricing">
					Purchase It Now
				</Link>
			</div>
		</div>
	);
}

export default PricingCard;
