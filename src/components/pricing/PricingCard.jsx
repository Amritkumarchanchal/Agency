import { Link } from "react-router-dom";
import CheckImg from "../../assets/images/icon/check.svg";
function PricingCard({ plan: { title, description, price, features, highlighted }, frequency }) {
	return (
		<div className="col-xl-4 col-md-6">
			<div className="Svision-pricing-wrap2">
				<div className="Svision-pricing-header2">
					<h5>{title}</h5>
				</div>
				<div className="Svision-pricing-price2">
					<h2>
						$
						{price.map((item) => {
							if (item.id === frequency.id) {
								return item.value;
							}
						})}
					</h2>
				</div>
				<div className="Svision-pricing-description">
					<p>{description}</p>
				</div>
				<div className="Svision-pricing-body2">
					<ul>
						{features.map((feature) => (
							<li key={feature}>
								<img src={CheckImg} alt="check" />
								{feature}
							</li>
						))}
					</ul>
				</div>
				<Link className={`Svision-pricing-btn2 ${highlighted && "active"}`} to="/pricing">
					Select the package
				</Link>
			</div>
		</div>
	);
}

export default PricingCard;
