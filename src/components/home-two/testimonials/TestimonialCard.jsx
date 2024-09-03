import StarImg from "../../../assets/images/v2/star.svg";
function TestimonialCard({ testimonial: { rating, content, author, designation, img } }) {
	return (
		<div className="Svision-testimonial-wrap Svision-testimonial-wrap2">
			<div className="Svision-testimonial-rating">
				<ul>
					{[...Array(rating)].map(() => (
						<li key={crypto.randomUUID()}>
							<img src={StarImg} alt="StarImg" />
						</li>
					))}
				</ul>
			</div>
			<div className="Svision-testimonial-data">
				<p>{`"${content}"`}</p>
			</div>
			<div className="Svision-testimonial-author">
				<div className="Svision-testimonial-author-thumb">
					<img src={img} alt="author" />
				</div>
				<div className="Svision-testimonial-author-data">
					<p>
						{author} <span>{designation}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
