function TestimonialCard({ testimonial: { rating, title, description, author, designation, img } }) {
	return (
		<div className="col-lg-6">
			<div className="Svision-testimonial-wrap">
				<div className="Svision-testimonial-rating">
					<ul>
						{[...Array(rating)].map(() => (
							<li key={crypto.randomUUID()}>
								<i className="icon-star"></i>
							</li>
						))}
					</ul>
				</div>
				<div className="Svision-testimonial-data">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div className="Svision-testimonial-author">
					<div className="Svision-testimonial-author-thumb">
						<img src={img} alt={title} />
					</div>
					<div className="Svision-testimonial-author-data">
						<p>
							{author} <span>{designation}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
