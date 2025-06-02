import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, BookOpen, GraduationCap, Star } from "lucide-react";
import { BannerSmall, BannerSmall2 } from "./components/banners/banner_sm";
import { Banners } from "./components/banners/banners";
import { Header } from "./components/header";
import { SearchCourse } from "./components/search";

export function MainPage() {
  const reviwews = [
    {
      name: "Carlos Henrique",
      img: "user1.jpg",
      role: "Técnico em Instrumentação",
      review:
        "Os cursos da EcoOffShore são uma verdadeira mão na roda pra quem trabalha embarcado. Fiz o módulo de descarte correto de eletrônicos e já apliquei o que aprendi na minha plataforma. É um conteúdo claro, direto e com exemplos reais da rotina offshore.",
      rating: 5,
    },
    {
      name: "Fernanda Lopes",
      img: "user2.jpg",
      role: "Área de Saúde, Segurança e Meio Ambiente",
      review:
        "A EcoOffShore trouxe uma solução inovadora para um problema que todo mundo fingia não ver: o lixo eletrônico embarcado. Além de oferecer cursos de qualidade, a empresa tem um compromisso sério com a sustentabilidade. A interface dos cursos é acessível, e os temas são extremamente relevantes para o setor.",
      rating: 5,
    },
    {
      name: "João Silva",
      img: "user3.jpg",
      role: "Estudante Técnico e Jovem Aprendiz",
      review:
        "Fiquei surpreso com a qualidade dos cursos da EcoOffShore. Mesmo sendo iniciante, consegui entender tudo sobre logística reversa e práticas sustentáveis no setor offshore. Isso com certeza vai me ajudar no meu futuro profissional.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen min-w-screen">
      <Header />

      <Banners />

      <section className="mt-10 mb-12 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
                    Descubra nossas áreas de conhecimento
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl">
                    Explore nossos cursos especializados em diferentes setores
                    da indústria offshore
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl">
            <BannerSmall />
          </div>
        </div>
      </section>

      {/* Barra de pesquisa com espaçamento responsivo */}
      <div className="mt-8 w-full px-4 sm:px-6 md:px-8">
        <SearchCourse />
      </div>

      {/* Seção Cursos em Destaque */}
      <section className="py-12 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-yellow-500 fill-yellow-400/20 flex-shrink-0" />
              <h1 className="text-3xl sm:text-4xl font-bold">
                Cursos em destaque
              </h1>
            </div>
            <Badge
              variant={"outline"}
              className="mt-2 sm:mt-0 text-green-400 py-2 px-4 sm:px-6 text-base flex items-center gap-2 cursor-pointer transition-all hover:scale-105 group"
            >
              <BookOpen className="h-5 w-5" />
              <span>Acesse todos os cursos livres</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Badge>
          </div>

          <Separator className="bg-gray-300 dark:bg-gray-700 mt-2 mb-6" />

          <div className="mt-2">
            <BannerSmall2 />
          </div>
        </div>
      </section>

      {/* Seção Depoimentos - Layout adaptativo */}
      <section className="py-12 md:py-16 mt-10 px-4 sm:px-6 backdrop-blur-xl bg-gradient-to-r from-green-500/20 via-teal-500/15 to-transparent dark:from-green-900/30 dark:via-teal-900/20 dark:to-transparent rounded-2xl shadow-lg z-30 border border-white/40 dark:border-zinc-700/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">
            O que nossos alunos dizem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {reviwews.map((reviw) => (
              <div
                key={reviw.name}
                className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700
                hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={reviw.img}
                    alt={reviw.name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover"
                  />
                  <div className="ml-4 text-left">
                    <h4 className="font-semibold text-base md:text-lg">
                      {reviw.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {reviw.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-left italic text-sm md:text-base">
                  {reviw.review}
                </p>
                <div className="flex mt-4 justify-start">
                  {[...Array(Math.round(reviw.rating))].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé com espaçamento melhorado */}
      <footer className="mt-16 md:mt-20 py-10 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
            <div className="mb-6 md:mb-0 max-w-md">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-8 w-8 text-green-400" />
                <h3 className="text-xl font-bold text-white">EcoOffshore</h3>
              </div>
              <p>
                Capacitando profissionais para o futuro da indústria offshore
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:gap-12">
              <div>
                <h4 className="text-white font-medium mb-3">Navegação</h4>
                <ul className="space-y-2">
                  <li className="hover:text-white cursor-pointer">Início</li>
                  <li className="hover:text-white cursor-pointer">Cursos</li>
                  <li className="hover:text-white cursor-pointer">Sobre nós</li>
                  <li className="hover:text-white cursor-pointer">Contato</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-medium mb-3">Legal</h4>
                <ul className="space-y-2">
                  <li className="hover:text-white cursor-pointer">
                    Termos de uso
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Política de privacidade
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="text-center text-sm">
            © {new Date().getFullYear()} EcoOffshore. Todos os direitos
            reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
