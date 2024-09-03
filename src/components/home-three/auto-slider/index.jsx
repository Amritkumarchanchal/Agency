import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const sliderData = [
	{
		id: crypto.randomUUID(),
		title: "Online Marketing",
	},
	{
		id: crypto.randomUUID(),
		title: "SEO Expert",
	},
	{
		id: crypto.randomUUID(),
		title: "Content Marketing",
	},
	{
		id: crypto.randomUUID(),
		title: "Link Building",
	},
	{
		id: crypto.randomUUID(),
		title: "Digital Strategy",
	},
	{
		id: crypto.randomUUID(),
		title: "Google Rankings",
	},
	{
		id: crypto.randomUUID(),
		title: "Online Marketing",
	},
	{
		id: crypto.randomUUID(),
		title: "SEO Expert",
	},
	{
		id: crypto.randomUUID(),
		title: "Content Marketing",
	},
	{
		id: crypto.randomUUID(),
		title: "Link Building",
	},
	{
		id: crypto.randomUUID(),
		title: "Digital Strategy",
	},
	{
		id: crypto.randomUUID(),
		title: "Google Rankings",
	},
];

const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	slidesPerView: "auto",
	allowTouchMove: false,
	// disableOnInteraction: true,
	modules: [Autoplay],
};

function AutoSlider() {
	return (
		<div className="Svision-auto-text-slider-section">
			<div className="swiper Svision-auto-slider">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="Svision-auto-slider-item">
									<h3>{item.title}</h3>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default AutoSlider;
