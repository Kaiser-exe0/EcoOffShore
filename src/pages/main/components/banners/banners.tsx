import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Banners() {
  const items = [
    {
      img: "/banner1.png",
      alt: "Exemplo 1",
    },
    {
      img: "/banner2.png",
      alt: "Exemplo 2",
    },
    {
      img: "/banner3.png",
      alt: "Exemplo 3",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full relative"
    >
      <CarouselContent className="">
        {items.map((item, idx) => (
          <CarouselItem key={idx} className="basis-full">
            <div className="relative w-full pb-[30%] sm:pb-[25%]">
              {/* Proporção responsiva */}
              <img
                src={item.img}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-contain sm:object-cover rounded-lg shadow-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 bg-white/80 hover:bg-white shadow-lg" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 bg-white/80 hover:bg-white shadow-lg" />
    </Carousel>
  );
}
