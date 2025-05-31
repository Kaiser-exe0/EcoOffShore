import { Badge } from "@/components/ui/badge";
import { BannerSmall } from "./components/banners/banner_sm";
import { Banners } from "./components/banners/banners";
import { Header } from "./components/header";

export function MainPage() {
  return (
    <div>
      <Header />
      <main className="w-screen min-h-screen">
        <div className="w-full">
          <div className="flex flex-1 justify-center items-center">
            <Banners />
          </div>
          <div className="p-5">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="flex-col flex gap-5">
                <h2 className="text-2xl">
                  Descubra nossas areas de Conhecimento
                </h2>
                <Badge>Acesse todos os cursos livres</Badge>
              </div>
              <BannerSmall />
            </div>
          </div>
        </div>
        <div className="w-screen h-screen">
          <h1>page 2</h1>
        </div>
        <div className="w-screen h-screen">
          <h1>Page3</h1>
        </div>
      </main>
    </div>
  );
}
