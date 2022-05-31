import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.scss";
import { Pagination, Navigation, EffectFade } from "swiper";
import bannerImage1 from "./../../Assets/Img/hero-banner1.jpg";
import bannerImage2 from "./../../Assets/Img/hero-banner2.jpg";
import "swiper/css/effect-fade";
import Blind from "../../Components/UI/Blind";
import { Link } from "react-router-dom";

const HeroSlider = () => {
	return (
		<>
			<Swiper
				pagination={{ type: "fraction" }}
				effect={"fade"}
				navigation={true}
				modules={[EffectFade, Pagination, Navigation]}
				className="mySwiper"
				loop={true}
			>
				<SwiperSlide>
					<Link to="/projects/137">
						<img
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
							src={bannerImage1}
							alt="Banner #1"
						/>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="/projects/234">
						<img
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
							src={bannerImage2}
							alt="Banner #1"
						/>
					</Link>
				</SwiperSlide>
				<Blind />
			</Swiper>
		</>
	);
};
export default HeroSlider;
