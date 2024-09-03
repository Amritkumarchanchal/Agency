import LogoDarkImg from "../../../assets/images/logo/logo-dark.svg";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
function Footer() {
	return (
		<footer className="Svision-footer-section7 bg-light8 Svision-section-padding4">
			<div className="container">
				<div className="Svision-section-title bricolage-font p-0">
					<FooterTop />
				</div>

				<div className="Svision-footer-top7">
					<div className="Svision-footer-info-column">
						<div className="Svision-footer-info-item">
							<a href="">
								<img src={LogoDarkImg} alt="Logo" />
							</a>
						</div>
						<div className="Svision-footer-info-item">
							<h5>Our address:</h5>
							<p>
								4517 Washington Ave.
								<br /> Manchester, Kentucky 39495
							</p>
						</div>
						<div className="Svision-footer-info-item">
							<h5>Give us a call:</h5>
							<a href="tel:456-7890">(123) 456-7890</a>
							<a href="tel:456-7890">(088) 123-4567</a>
						</div>
						<div className="Svision-footer-info-item">
							<h5>Send us an email:</h5>
							<a href="mailto:info@mthemeus.com">info@mthemeus.com</a>
						</div>
					</div>
				</div>
				<div className="Svision-footer-bottom seven">
					<FooterBottom />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
