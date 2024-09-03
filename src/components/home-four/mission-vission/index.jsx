import Shape1Img from "../../../assets/images/v4/shape1.png";
import TextThumb1Img from "../../../assets/images/v4/text-thumb1.png";
import TextThumb2Img from "../../../assets/images/v4/text-thumb2.png";
function MissionVision() {
	return (
		<div className="Svision-content-section position-relative overflow-hidden">
			<div className="container">
				<div className="Svision-section-title arimo-font center full-width p-0">
					<span className="Svision-subtitle">Our mission & vision</span>
					<h2>
						Our mission is to help businesses thrive a fast-paced
						<img src={TextThumb1Img} alt="TextThumb1Img" />
						competitive world by providing expert guidance
						<img src={TextThumb2Img} alt="TextThumb1Img" />& we're here to provide it.
					</h2>
				</div>
			</div>
			<div className="Svision-v4-shape1">
				<img src={Shape1Img} alt="Shape1Img" />
			</div>
		</div>
	);
}

export default MissionVision;
