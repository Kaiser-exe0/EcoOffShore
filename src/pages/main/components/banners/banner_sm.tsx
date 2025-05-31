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
  {
    icon: <GraduationCap size={40} />,
    title: "Desenvolvimento",
    subtitle: "Pessoal",
  },
  { icon: <GraduationCap size={40} />, title: "Gestão", subtitle: "" },
  { icon: <GraduationCap size={40} />, title: "Logística", subtitle: "" },
  { icon: <GraduationCap size={40} />, title: "Transporte", subtitle: "" },
  { icon: <GraduationCap size={40} />, title: "Segurança", subtitle: "" },
];

export function BannerSmall() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <Carousel
        opts={{ align: "start", loop: false }}
        className="w-full mx-auto"
      >
        <CarouselContent>
          {items.map((item, idx) => (
            <CarouselItem
              key={idx}
              className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-2/7"
            >
              <div className="p-5 h-full">
                <Card
                  className="flex flex-col bg-gradient-to-br 
                shadow-lg from-green-600/90 to-teal-500 text-white transition-all 
                hover:shadow-xl hover:from-green-700/90 hover:to-teal-600 hover:scale-105 
                aspect-square size-11/12"
                >
                  {/* Aspecto quadrado */}
                  <CardContent className="flex flex-col items-center justify-center p-4 flex-1">
                    <div className="p-3 bg-white/20 rounded-full mb-3 transition-transform hover:scale-110 w-16 h-16 flex items-center justify-center">
                      {item.icon}
                    </div>

                    <div className="text-center">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      {item.subtitle && (
                        <p className="text-base opacity-90">{item.subtitle}</p>
                      )}
                    </div>

                    <button
                      className="mt-4 text-xs sm:text-sm uppercase tracking-wide 
                    text-white/90 hover:text-white transition-colors flex items-center gap-1"
                    >
                      Saiba mais
                      <span className="text-lg font-semibold">→</span>
                    </button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="absolute left-[-15px] top-1/2 -translate-y-1/2 z-10 
        h-10 w-10 rounded-full bg-white border-none shadow-lg hover:bg-gray-100"
        />

        <CarouselNext
          className="absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 
        h-10 w-10 rounded-full bg-white border-none shadow-lg hover:bg-gray-100"
        />
      </Carousel>
    </div>
  );
}
