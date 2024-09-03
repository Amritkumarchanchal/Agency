import { Link } from "react-router-dom";
function TeamCard({ team: { name, designation, img } }) {
	return (
		<div className="col-xl-4 col-md-6">
			<div className="Svision-team-wrap3">
				<div className="Svision-team-thumb3">
					<img src={img} alt="author img" />
				</div>
				<div className="Svision-team-data3">
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
