import LogoLargImg from "../../../assets/images/v3/logo-large.svg";
import { Link } from "react-router-dom";
function Footer() {
	return (
		<footer className="Svision-footer-section">
			<div className="container">
				<div className="Svision-footer-top2">
					<Link to="/">
						<img src={LogoLargImg} alt="Logo" />
					</Link>
				</div>
				<div className="Svision-footer-bottom three">
					<div className="row">
						<div className="col-xl-6">
							<div className="Svision-copywright three">
								<p>&copy;Copyright 2024, All Rights Reserved by Mthemeus</p>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="Svision-footer-menu2">
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About Us</Link>
									</li>
									<li>
										<Link to="/service">Services</Link>
									</li>
									<li>
										<Link to="/portfolio-one">Projects</Link>
									</li>
									<li>
										<Link to="/">Pages</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
