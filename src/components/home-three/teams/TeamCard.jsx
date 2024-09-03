import { Link } from "react-router-dom";
function TeamCard({ team: { name, designation, img } }) {
	return (
		<div className="col-xl-4 col-md-6">
			<div className="Svision-team-wrap2">
				<div className="Svision-team-thumb2">
					<img src={img} alt={name} />
				</div>
				<div className="Svision-team-data2">
					<Link to="/single-team">
						<h4>{name}</h4>
					</Link>
					<p>{designation}</p>
				</div>
			</div>
		</div>
	);
}

export default TeamCard;
