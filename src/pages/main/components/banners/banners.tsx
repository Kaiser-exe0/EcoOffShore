import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Banners() {
  return (
    <Carousel className="w-full relative">
      <CarouselContent className=" h-100">
        <CarouselItem>
          <Card>
            <img src="../../../../public/exemplo.jpeg" alt="" />
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <img src="../../../../public/exemplo.jpeg" alt="" />
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <img src="../../../../public/exemplo.jpeg" alt="" />
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 z-20" />
      <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 z-20" />
    </Carousel>
  );
}
