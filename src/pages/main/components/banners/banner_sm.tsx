import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRightCircle,
  BookMarked,
  Globe,
  GraduationCap,
  LayoutGrid,
  ShieldCheck,
  Waves,
} from "lucide-react";

// Definindo tipos para escalabilidade
type CourseCategory = "livre" | "emAlta" | "recomendados";
type Course = {
  title: string;
  description: string;
  img: string;
  categories: CourseCategory[];
};

const courses: Course[] = [
  {
    title: "Introdução à Segurança no Trabalho Offshore",
    img: "/segurançaOFF.jpg",
    description:
      "Curso básico sobre normas, riscos e práticas seguras no ambiente marítimo e de plataformas.",
    categories: ["livre", "recomendados"],
  },
  {
    title: "Noções de Primeiros Socorros em Áreas Remotas",
    img: "/nocoesSOS.jpg",
    description:
      "Aprenda a agir com rapidez e eficácia em casos de emergências médicas em alto-mar.",
    categories: ["livre"],
  },
  {
    title: "Leitura e Interpretação de Documentos Técnicos",
    img: "/interpretação.jpg",
    description:
      "Domine a leitura de manuais, procedimentos e instruções em ambientes industriais.",
    categories: ["livre", "recomendados"],
  },
  {
    title: "Trabalho em Altura - Fundamentos Essenciais",
    img: "/trabalhoAltura.jpg",
    description:
      "Capacitação teórica para quem deseja atuar com segurança em plataformas elevadas.",
    categories: ["livre"],
  },
  {
    title: "Conscientização Ambiental para Trabalhadores Offshore",
    img: "/Conscientização.jpg",
    description:
      "Entenda os impactos ambientais das operações offshore e boas práticas sustentáveis.",
    categories: ["livre", "recomendados"],
  },
  {
    title: "Informática Básica para Plataformas e Navios",
    img: "/Informatica.jpg",
    description:
      "Curso introdutório para uso de computadores, planilhas e sistemas embarcados.",
    categories: ["livre"],
  },

  //// em alta
  {
    title: "NR-37: Saúde e Segurança em Plataformas de Petróleo",
    description:
      "Conheça os requisitos normativos da NR-37 e como aplicá-los no dia a dia",
    img: "/image.png",
    categories: ["emAlta"],
  },
  {
    title: "Inglês Técnico para Operações Offshore",
    description:
      "  Curso prático focado em termos técnicos usados a bordo e em relatórios operacionais.",
    img: "/operações.jpg",
    categories: ["emAlta"],
  },
  {
    title: "Procedimentos de Evacuação e Abandono de Plataforma",
    description:
      "Treinamento teórico sobre evacuação segura em situações de emergência.",
    img: "/abandono.jpg",
    categories: ["emAlta"],
  },
  {
    title: "Introdução à Robótica Submarina (ROV)",
    description:
      "Conheça o funcionamento e a operação básica de veículos subaquáticos remotamente operados.",
    img: "/ROV.jpg",
    categories: ["emAlta"],
  },
  {
    title: "Compliance e Ética em Ambientes Industriais",
    description:
      "Entenda a importância da ética, conduta e conformidade em grandes operações.",
    img: "/etica.jpg",
    categories: ["emAlta"],
  },
  {
    title: "NR-10: Segurança em Instalações e Serviços com Eletricidade",
    description:
      "Ideal para quem atua ou deseja atuar com sistemas elétricos embarcados.",
    img: "nr10.jpg",
    categories: ["emAlta"],
  },
];

// Componente reutilizável do card de curso
const CourseCard = ({ course }: { course: Course }) => (
  <Card className="w-full h-full flex flex-col shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] gap-3 lg:min-w-[300px] duration-300">
    <CardHeader>
      <h3 className="text-lg md:text-xl font-semibold line-clamp-2">
        {course.title}
      </h3>
    </CardHeader>
    <CardContent className="flex flex-col items-center justify-center p-3 md:p-4">
      <img
        src={course.img}
        alt={course.title}
        className="w-full h-32 md:h-40 object-cover rounded-xl mb-3"
      />
      <CardDescription className="mb-3">
        <p className="text-sm md:text-base opacity-90 text-center line-clamp-3">
          {course.description}
        </p>
      </CardDescription>
      <Separator className="my-2" />
      <CardAction className="w-full mt-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <Button
            variant="secondary"
            className=" uppercase flex items-center gap-1  py-1 md:py-2  md:text-sm font-medium transition-transform hover:scale-105"
          >
            Saiba mais
            <ArrowRightCircle className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
        </div>
      </CardAction>
    </CardContent>
  </Card>
);

// Componente reutilizável do carrossel
const CoursesCarousel = ({ category }: { category: CourseCategory }) => {
  const filteredCourses = courses.filter((course) =>
    course.categories.includes(category)
  );

  return (
    <Carousel
      opts={{ align: "start", loop: false }}
      className="w-full mx-auto relative"
    >
      <CarouselContent className="mx-1">
        {filteredCourses.map((course, idx) => (
          <CarouselItem
            key={idx}
            className="basis-1/1 sm:basis-1/3 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1 h-full">
              <CourseCard course={course} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 h-8 w-8 md:h-10 md:w-10 rounded-full bg-white/80 shadow-md hover:bg-white" />
      <CarouselNext className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 h-8 w-8 md:h-10 md:w-10 rounded-full bg-white/80 shadow-md hover:bg-white" />
    </Carousel>
  );
};

// Componente principal
export function BannerSmall2() {
  const categories: CourseCategory[] = ["livre", "emAlta", "recomendados"];

  return (
    <Tabs defaultValue="livre">
      <TabsList className="flex flex-wrap justify-start gap-2 mb-4">
        {categories.map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            className="capitalize text-xs sm:text-sm px-3 py-1"
          >
            {category === "livre"
              ? "Cursos livres"
              : category === "emAlta"
              ? "Em alta"
              : "Recomendados"}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="w-full px-2 sm:px-4 md:px-6">
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <CoursesCarousel category={category} />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}

export function BannerSmall() {
  const knowledgeAreas = [
    {
      name: "Segurança Industrial",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
    },
    {
      name: "Meio Ambiente",
      icon: <Globe className="w-8 h-8" />,
      color:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    },
    {
      name: "Operações Offshore",
      icon: <Waves className="w-8 h-8" />,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    },
    {
      name: "Tecnologia e Informática",
      icon: <LayoutGrid className="w-8 h-8" />,
      color:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    },
    {
      name: "Documentação Técnica",
      icon: <BookMarked className="w-8 h-8" />,
      color:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
    },
    {
      name: "Gestão de Projetos",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400",
    },
    {
      name: "Primeiros Socorros",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
    },
    {
      name: "Normas Regulatórias",
      icon: <BookMarked className="w-8 h-8" />,
      color:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    },
  ];

  return (
    <div className="w-full px-2 sm:px-4 md:px-6">
      <Carousel
        opts={{
          align: "start",
          loop: false,
          dragFree: true,
          slidesToScroll: "auto",
        }}
        className="w-full mx-auto"
      >
        <CarouselContent className="">
          {knowledgeAreas.map((area, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-2 sm:pl-3 md:pl-4"
            >
              <div className="h-full">
                <div className="flex flex-col items-center p-3 sm:p-4 h-full bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer group">
                  <div
                    className={`p-3 mb-3 rounded-full ${area.color} transition-transform group-hover:scale-105`}
                  >
                    {area.icon}
                  </div>
                  <h3 className="font-medium text-center text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                    {area.name}
                  </h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex gap-2 mt-4 justify-center sm:justify-end">
          <CarouselPrevious className="h-8 w-8 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow hover:bg-gray-50 dark:hover:bg-gray-700" />
          <CarouselNext className="h-8 w-8 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow hover:bg-gray-50 dark:hover:bg-gray-700" />
        </div>
      </Carousel>
    </div>
  );
}
