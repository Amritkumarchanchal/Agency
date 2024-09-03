import Call2Img from "../../assets/images/icon/call2.svg";
import EmailImg from "../../assets/images/icon/email.svg";
import MapImg from "../../assets/images/icon/map.svg";
import Star2Img from "../../assets/images/v1/star2.png";
function ContactInfo() {
	return (
		<div className="Svision-contact-info-section">
			<div className="container">
				<div className="Svision-contact-info-title">
					<h2>
						<span className="Svision-title-animation">
							Contact Information
							<span className="Svision-title-icon">
								<img src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					<div className="col-xl-4 col-md-6">
						<a href="">
							<div className="Svision-contact-info-box">
								<div className="Svision-contact-info-icon">
									<img src={Call2Img} alt="Call Img" />
								</div>
								<div className="Svision-contact-info-data">
									<span>Call us</span>
									<p>+091-737-0001-137</p>
									<p>+091-756-3217-005</p>
								</div>
							</div>
						</a>
					</div>
					<div className="col-xl-4 col-md-6">
						<a href="">
							<div className="Svision-contact-info-box">
								<div className="Svision-contact-info-icon">
									<img src={EmailImg} alt="Email" />
								</div>
								<div className="Svision-contact-info-data">
									<span>Call us</span>
									<p>admin@svision.tech</p>
									<p>ayush@svision.tech</p>
								</div>
							</div>
						</a>
					</div>
					<div className="col-xl-4 col-md-6">
						<div className="Svision-contact-info-box">
							<div className="Svision-contact-info-icon">
								<img src={MapImg} alt="Map" />
							</div>
							<div className="Svision-contact-info-data">
								<span>Office address</span>
								<p>Will Be Updating Soon in a week</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
