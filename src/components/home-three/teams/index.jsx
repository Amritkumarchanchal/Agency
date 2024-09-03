import { Link } from "react-router-dom";
import Team5Img from "../../../assets/images/team/team5.png";
import Team6Img from "../../../assets/images/team/team6.png";
import Team7Img from "../../../assets/images/team/team7.png";
import StarShapeHalfImg from "../../../assets/images/v3/star-shape-half2.png";
import TeamCard from "./TeamCard";
const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Adrew Smith",
		designation: "Senior SEO Manager",
		img: Team5Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jones Jack",
		designation: "Strategy Director",
		img: Team6Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Marsal Straw",
		designation: "SEO Content Writer",
		img: Team7Img,
	},
];
function Teams() {
	return (
		<div className="section Svision-section-padding3 position-relative">
			<div className="container">
				<div className="Svision-section-title familjen-grotesk">
					<div className="row">
						<div className="col-lg-6">
							<h2>Increase revenue with custom SEO</h2>
						</div>
						<div className="col-lg-6 d-flex align-items-center justify-content-end">
							<div className="Svision-title-btn">
								<Link className="Svision-default-btn pill yellow-btn" to="/team">
									<span className="Svision-label-up">Meet our team</span>
									<span className="Svision-label-up">Meet our team</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{teamsData.map((team) => (
						<TeamCard key={team.id} team={team} />
					))}
				</div>
			</div>
			<div className="Svision-star-shape-half ">
				<img src={StarShapeHalfImg} alt="StarShapeHalfImg" />
			</div>
		</div>
	);
}

export default Teams;
