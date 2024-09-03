import Logo from "../../assets/images/logo/logo-white.svg";
function Footer() {
	return (
		<footer className="Svision-footer-section dark-bg">
			<div className="container">
				<div className="Svision-footer-bottom">
					<div className="row">
						<div className="col-lg-6">
							<div className="Svision-footer-logo">
								<a href="">
									<img src={Logo} alt="logo" />
								</a>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="Svision-copywright one">
								<p> &copy; Copyright 2024, All Rights Reserved by Mthemeus</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
