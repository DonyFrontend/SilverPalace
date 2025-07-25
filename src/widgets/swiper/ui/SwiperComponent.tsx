import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import React from "react";

export type SwiperProps = {
  image: string;
  navigate_to: string;
  id: number;
};

const SwiperComponent = ({ data }: { data: SwiperProps[] }) => {
  const navigate = useNavigate();

  return (
    <Swiper
      className="w-auto h-auto rounded-2xl"
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      navigation={{ enabled: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          onClick={() => navigate(item.navigate_to)}
          className="cursor-pointer"
        >
          <img src={item.image} alt="Image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default React.memo(SwiperComponent);
