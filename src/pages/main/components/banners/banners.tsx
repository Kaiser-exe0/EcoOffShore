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
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full relative"
    >
      <CarouselContent className=" h-100">
        <CarouselItem>
          <Card>
            <img src="/exemplo.jpeg" alt="Exemplo" />
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <img src="/exemplo.jpeg" alt="Exemplo" />
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <img src="/exemplo.jpeg" alt="Exemplo" />
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        className="absolute size-10 bottom-1/6 left-10 translate-y-[160px]
      z-20 bg-auto shadow-lg"
      />
      <CarouselNext className="absolute size-10 bottom-1/6 left-30 translate-y-[160px] z-20 shadow-lg" />
    </Carousel>
  );
}
