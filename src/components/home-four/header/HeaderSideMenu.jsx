import Logo from "../../../assets/images/logo/logo-white.svg";
import InstagramThumb from "../../../assets/images/v4/instagram-thumb3.png";
function HeaderSideMenu({ showSideMenu, setShowSideMenu }) {
	return (
		<div className="Svision-sidemenu-wraper">
			<div className={`Svision-sidemenu-column ${showSideMenu === true ? "active" : ""}`}>
				<div className="Svision-sidemenu-body">
					<div className="Svision-sidemenu-logo">
						<a href="">
							<img src={Logo} alt="Logo" />
						</a>
					</div>
					<p>
						We're dedicated to helping business grow and succeed. With years of industry experience and a
						passion for problem-solving, we offer top-level consulting service tailored to your unique
						needs.
					</p>
					<div className="Svision-sidemenu-thumb">
						<img src={InstagramThumb} alt="InstagramThumb" />
					</div>
					<div className="Svision-info-wrap">
						<div className="Svision-info">
							<ul>
								<li>Give us a call:</li>
								<li>
									<a href="">(123) 456-7890</a>
								</li>
							</ul>
						</div>
						<div className="Svision-info">
							<ul>
								<li>Send us an email:</li>
								<li>
									<a href="">info@mthemeus.com</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="Svision-social-icon Svision-social-icon3">
						<ul>
							<li>
								<a href="">
									<i className="icon-twitter"></i>
								</a>
							</li>
							<li>
								<a href="">
									<i className="icon-facebook"></i>
								</a>
							</li>
							<li>
								<a href="">
									<i className="icon-instagram"></i>
								</a>
							</li>
							<li>
								<a href="">
									<i className="icon-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
					<div className="Svision-copywright4 light">
						<p>© Copyright 2024, All Rights Reserved by Mthemeus</p>
					</div>
				</div>
				<span className="Svision-sidemenu-close" onClick={() => setShowSideMenu(!showSideMenu)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M6 18L18 6M6 6L18 18"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</span>
			</div>
			<div className={`offcanvas-overlay ${showSideMenu === true ? "active" : ""}`}></div>
		</div>
	);
}

export default HeaderSideMenu;
