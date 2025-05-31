import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRightCircle, TicketPercent } from "lucide-react";

const items = [
  {
    title: "NR-37: Saúde e Segurança em Plataformas de Petróleo",
    description:
      "Conheça os requisitos normativos da NR-37 e como aplicá-los no dia a dia",
    img: "/public/image.png",
  },
  {
    title: "Gestão",
    img: "/images/gestao.png", // Caminho correto relativo à pasta public
  },
  {
    title: "Logística",
    img: "/images/logistica.png",
  },
  {
    title: "Transporte",
    img: "/images/transporte.png",
  },
  {
    title: "Segurança",
    img: "/images/seguranca.png",
  },
];

export function BannerSmall2() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <Carousel
        opts={{ align: "start", loop: false }}
        className="w-full mx-auto relative"
      >
        <CarouselContent className="mx-2">
          {items.map((item, idx) => (
            <CarouselItem key={idx} className=" md:basis-1/3 lg:basis-1/5">
              <div className="p-1 h-full">
                <Card className="w-full h-full flex flex-col shadow-lg">
                  <CardHeader>
                    <h3 className="text-xl  text-wrap font-semibold ">
                      {item.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center ">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain rounded-2xl"
                    />
                    <CardDescription className="my-3">
                      {item.description && (
                        <p className="text-base opacity-90 text-center">
                          {item.description}
                        </p>
                      )}
                    </CardDescription>
                    <Separator className="my-3" />
                    <CardAction className="w-full items-center">
                      <div className="flex justify-between items-center">
                        <Badge
                          variant={"outline"}
                          className="text-green-400 p-2 rounded-3xl h-6"
                        >
                          <TicketPercent />
                          <p>Gratuito</p>
                        </Badge>
                        <Button
                          variant={"secondary"}
                          className="text-sm uppercase tracking-wide  transition-colors flex items-center gap-1 hover:scale-105 "
                        >
                          Saiba mais
                          <ArrowRightCircle />
                        </Button>
                      </div>
                    </CardAction>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controles de navegação */}
        <CarouselPrevious className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/80 shadow-md hover:bg-white" />
        <CarouselNext className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/80 shadow-md hover:bg-white" />
      </Carousel>
    </div>
  );
}
