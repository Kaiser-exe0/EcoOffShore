import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GraduationCap } from "lucide-react";

const items = [
  { icon: <GraduationCap />, title: "Desenvolvimento", subtitle: "Pessoal" },
  { icon: <GraduationCap />, title: "Gestão", subtitle: "" },
  { icon: <GraduationCap />, title: "Logística", subtitle: "" },
  { icon: <GraduationCap />, title: "Transporte", subtitle: "" },
  { icon: <GraduationCap />, title: "Segurança", subtitle: "" },
];

export function BannerSmall() {
  return (
    <Carousel className="relative w-full overflow-hidden">
      <CarouselContent className="flex">
        {items.map((item, idx) => (
          <CarouselItem
            key={idx}
            className="flex flex-1 sm:basis-1/1 md:basis-1/3 lg:basis-1/4"
          >
            <Card className=" w-64 h-64 bg-green-700 text-white shadow-lg">
              <CardContent className="flex flex-col items-center justify-center p-4 space-y-2">
                <div className="p-2 bg-green-800 gra rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-sm opacity-80">{item.subtitle}</p>
                )}
                <button className="mt-2 text-xs uppercase tracking-wide text-green-200 hover:text-white transition">
                  Saiba mais →
                </button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 z-20 p-1 bg-green-900 bg-opacity-60 text-white rounded-full shadow hover:bg-opacity-80 transition" />
      <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 z-20 p-1 bg-green-900 bg-opacity-60 text-white rounded-full shadow hover:bg-opacity-80 transition" />
    </Carousel>
  );
}
