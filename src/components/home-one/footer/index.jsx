import FooterBottom from "./FooterBottom";
import FooterContent from "./FooterContent";
import MessageForm from "./MessageForm";

function Footer() {
	return (
		<footer className="Svision-footer-section dark-bg">
			<div className="container">
				<div className="Svision-footer-top Svision-section-padding">
					<div className="row">
						<div className="col-lg-7">
							<FooterContent />
						</div>
						<div className="col-lg-5">
							<div className="Svision-form-wrap">
								<h4>Send us a message</h4>
								<MessageForm />
							</div>
						</div>
					</div>
				</div>
				<div className="Svision-footer-bottom">
					<div className="row">
						<FooterBottom />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
