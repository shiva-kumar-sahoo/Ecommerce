"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
function HomeCarousel() {
  return (
    <div className="carousel flex flex-col items-center justify-between p-2 md:px-20 md:py-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="w-full overflow-hidden rounded-lg">
              <Link href={"/"}>
                <Image
                  src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                  className="h-[300px] w-full object-contain lg:h-[536px]"
                  width={1500}
                  height={300}
                  alt={"banner"}
                  blurDataURL="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                  placeholder="blur"
                  sizes="(max-width: 1500px) 100vw, 1500px"
                  priority
                />
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full overflow-hidden rounded-lg">
              <Link href={"/"}>
                <Image
                  src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                  className="h-[300px] w-full object-contain lg:h-[536px]"
                  width={1500}
                  height={300}
                  alt={"banner"}
                  blurDataURL="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                  placeholder="blur"
                  sizes="(max-width: 1500px) 100vw, 1500px"
                  priority
                />
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full overflow-hidden rounded-lg">
              <Link href={"/"}>
                <Image
                  src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                  className="h-[300px] w-full object-contain lg:h-[536px]"
                  width={1500}
                  height={300}
                  alt={"banner"}
                  blurDataURL="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                  placeholder="blur"
                  sizes="(max-width: 1500px) 100vw, 1500px"
                  priority
                />
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full overflow-hidden rounded-lg">
              <Link href={"/"}>
                <Image
                  src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                  className="h-[304px] w-full object-contain lg:h-[536px]"
                  width={1500}
                  height={300}
                  alt={"banner"}
                  blurDataURL="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                  placeholder="blur"
                  sizes="(max-width: 1500px) 100vw, 1500px"
                  priority
                />
              </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2" />
        <CarouselNext className="absolute right-4 top-1/2" />
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
