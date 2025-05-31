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
    <div className="w-full px-4 sm:px-6 md:px-8">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full max-w-screen-2xl mx-auto"
      >
        <CarouselContent className="-ml-1">
          {items.map((item, idx) => (
            <CarouselItem
              key={idx}
              className="pl-1 basis-[260px] md:basis-[280px]"
            >
              <div className="p-1 h-full">
                <Card className="w-full h-full flex flex-col bg-gradient-to-br from-green-600/90 to-teal-500 text-white shadow-lg transition-all hover:shadow-xl hover:from-green-700/90 hover:to-teal-600">
                  <CardContent className="flex flex-col items-center justify-center p-6 flex-1">
                    <div className="p-3 bg-white/20 rounded-full mb-4 transition-transform hover:scale-110">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-center">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-base opacity-90 mt-1">
                        {item.subtitle}
                      </p>
                    )}
                    <button className="mt-6 text-sm uppercase tracking-wide text-white/90 hover:text-white transition-colors flex items-center gap-1">
                      Saiba mais
                      <span className="text-lg font-semibold">→</span>
                    </button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white/80 hover:bg-white text-green-600 border-none shadow-md" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white/80 hover:bg-white text-green-600 border-none shadow-md" />
      </Carousel>
    </div>
  );
}
