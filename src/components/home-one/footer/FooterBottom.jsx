import LogoWhiteImg from "../../../assets/images/logo/logo-white.svg";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="Svision-footer-logo">
					<a href="">
						<img src={LogoWhiteImg} alt="Logo" />
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="Svision-copywright one">
					<p> &copy; Copyright 2024, All Rights Reserved by Mthemeus</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
