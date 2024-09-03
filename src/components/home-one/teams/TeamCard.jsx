import { Link } from "react-router-dom";
function TeamCard({ team: { name, designation, img } }) {
	return (
		<div className="col-xl-3 col-md-6">
			<div className="Svision-team-wrap">
				<div className="Svision-team-thumb">
					<img src={img} alt={name} />
					<div className="Svision-social-icon team-social">
						<ul>
							<li>
								<a href="">
									<i className="icon-twitter"></i>
								</a>
							</li>
							<li>
								<a href="">
									<i className="icon-facebook"></i>
								</a>
							</li>
							<li>
								<a href="">
									<i className="icon-instagram"></i>
								</a>
							</li>
							<li>
								<a href="">
									<i className="icon-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="Svision-team-data">
					<Link to="/single-team">
						<h3>{name}</h3>
					</Link>
					<p>{designation}</p>
				</div>
			</div>
		</div>
	);
}

export default TeamCard;
