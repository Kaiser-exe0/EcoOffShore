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
        className="absolute bottom-1/6 left-2 -translate-y-2/12
      z-20"
      />
      <CarouselNext className="absolute bottom-1/6 right-2 -translate-y-2/12 z-20" />
    </Carousel>
  );
}
