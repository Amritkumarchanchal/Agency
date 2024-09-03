function TestimonialCard({ testimonial: { author, designation, title, description, img } }) {
	return (
		<div className="Svision-testimonial-slider-column">
			<div className="Svision-testimonial-slider-wrap">
				<div className="Svision-testimonial-slider-thumb">
					<img src={img} alt={title} />
				</div>
				<div className="Svision-testimonial-slider-author">
					<h5>{author}</h5>
					<p>{designation}</p>
				</div>
			</div>
			<div className="Svision-testimonial-slider-data">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default TestimonialCard;
