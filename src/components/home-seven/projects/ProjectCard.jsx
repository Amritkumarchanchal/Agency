import { Link } from "react-router-dom";
function ProjectCard({ project: { title, description, img } }) {
	return (
		<div className="Svision-image-resizing-item" style={{ backgroundImage: `url(${img})` }}>
			<div className="Svision-image-resizing-content">
				<Link to="/single-portfolio">
					<h4>#{title}</h4>
				</Link>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ProjectCard;
