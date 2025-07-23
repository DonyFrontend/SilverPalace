import slide_1 from "./slides/slide_1.png";
import slide_2 from "./slides/slide_2.png";
import slide_3 from "./slides/slide_3.png";
import type { SwiperProps } from "@/widgets/swiper/ui/SwiperComponent";

const swiper_data: SwiperProps[] = [
  { id: 1, image: slide_1, navigate_to: "/" },
  { id: 2, image: slide_2, navigate_to: "/news" },
  { id: 3, image: slide_3, navigate_to: "/characters" },
];

export { swiper_data };
