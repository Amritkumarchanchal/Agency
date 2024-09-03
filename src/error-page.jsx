import { Link } from "react-router-dom";
import ErrorImg from "/src/assets/images/about/404.png";
import ArrowRightImg from "/src/assets/images/icon/arrow-right.svg";
import Star2Img from "/src/assets/images/v1/star2.png";
export default function ErrorPage() {
	return (
		<div className="section">
			<div className="container">
				<div className="Svision-errors-wrap">
					<div className="Svision-errors-thumb">
						<img src={ErrorImg} alt="Error" />
					</div>
					<div className="Svision-errors-title">
						<h2>
							We can’t find the page
							<span className="Svision-title-animation">
								you are looking for
								<span className="Svision-title-icon">
									<img src={Star2Img} alt="" />
								</span>
							</span>
						</h2>
					</div>
					<Link className="Svision-errors-btn" to="/">
						Return to homepage
						<span>
							<img src={ArrowRightImg} alt="arrow" />
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
