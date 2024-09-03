import StarImg from "../../../assets/images/v7/star1.png";
function TestimonialCard({ testimonial: { text, rating, author, designation } }) {
	return (
		<div className="Svision-testimonial-slider-wrap2">
			<div className="Svision-testimonial-slider-rating">
				<ul>
					{[...Array(rating)].map(() => (
						<li key={crypto.randomUUID()}>
							<img src={StarImg} alt="star" />
						</li>
					))}
				</ul>
			</div>
			<div className="Svision-testimonial-slider-description">
				<p>{`"${text}"`}</p>
			</div>
			<div className="Svision-testimonial-slider-author-data">
				<span>{author} </span>
				<p>{designation}</p>
			</div>
		</div>
	);
}

export default TestimonialCard;
