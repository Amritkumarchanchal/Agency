function FeatureCard({ feature: { title, description, img } }) {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="Svision-iconbox-wrap7">
				<div className="Svision-iconbox-icon7">
					<img src={img} alt={title} />
				</div>
				<div className="Svision-iconbox-data7">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default FeatureCard;
