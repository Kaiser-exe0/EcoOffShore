import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BannerSmall } from "./components/banners/banner_sm";
import { BannerSmall2 } from "./components/banners/banner_sm copy";
import { Banners } from "./components/banners/banners";
import { Header } from "./components/header";

export function MainPage() {
  return (
    <div>
      <Header />
      <main className="w-screen min-h-screen">
        <div className="w-full h-screen">
          <div className="flex flex-1 justify-center items-center">
            <Banners />
          </div>
          <div className="p-5">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-col flex gap-5">
                <h2 className="text-3xl">
                  Descubra nossas áreas de conhecimento
                </h2>
                <Badge className="dark:text-white uppercase">
                  Acesse todos os cursos livres
                </Badge>
              </div>
              <BannerSmall />
            </div>
          </div>
        </div>
        <div className="w-screen h-screen ">
          <div className="p-5">
            <div className="flex justify-between mb-3">
              <h1 className="text-4xl font-bold ">Cursos em destaque</h1>
              <Badge
                className="rounded-4xl hover:scale-110 h-8 w-50 text-center transition-transform"
                variant={"outline"}
                color="primary"
              >
                Ver todos os cursos livres
              </Badge>
            </div>
            <Separator className="my-5" />
            <BannerSmall2 />
          </div>
        </div>
        <div className="w-screen h-screen">
          <h1>Page3</h1>
        </div>
      </main>
    </div>
  );
}
