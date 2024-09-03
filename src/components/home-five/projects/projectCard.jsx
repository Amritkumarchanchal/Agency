import { Link } from "react-router-dom";
function ProjectCard({ project: { title, img, company, category, column } }) {
	return (
		<div className={`col-lg-${column}`}>
			<div className="Svision-project-wrap4">
				<div className="Svision-project-thumb4">
					<img src={img} alt="project" />
					<Link className="Svision-project-view" to="single-portfolio">
						View
					</Link>
				</div>
				<div className="Svision-project-data4">
					<Link to="/single-portfolio">
						<h3>{title}</h3>
					</Link>
					<div className="Svision-project-meta">
						<ul>
							<li>
								<a href="#">{company}</a>
							</li>
							<li>
								<a href="#">{category}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
