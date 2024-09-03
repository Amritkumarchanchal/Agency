import { Link } from "react-router-dom";
import NextImg from "../../../assets/images/v6/next.svg";
function BlogCard({ blog: { title, content, category, date, img } }) {
	return (
		<div className="col-lg-6">
			<div className="Svision-blog-wrap2">
				<div className="Svision-blog-thumb2">
					<Link to="/single-blog">
						<img src={img} alt={title} />
					</Link>
				</div>
				<div className="Svision-blog-content2">
					<div className="Svision-blog-meta2">
						<ul>
							<li>{category}</li>
							<li>{date}</li>
						</ul>
					</div>
					<Link to="/single-blog">
						<h3>{title}</h3>
					</Link>
					<p>{content}</p>
					<Link className="Svision-blog-btn" to="/single-blog">
						<img src={NextImg} alt="next" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default BlogCard;
