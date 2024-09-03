import BreadCrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import GoogleMap from "../components/contact/GoogleMap";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
function ContactUs() {
	const location = {
		center: {
			lat: 13.0843,
			lng: 80.2705,
		},
		zoom: 11,
	};
	return (
		<>
			<BreadCrumb title="Contact Us" />
			<ContactForm />
			<ContactInfo />
			<GoogleMap location={location} />
			<TwoColumnFaq />
		</>
	);
}

export default ContactUs;
