import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"; // Corrigir a importação
import {
  BarChart,
  Book,
  BookOpen,
  FileText,
  Folder,
  GraduationCap,
  Menu,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const courses = [
    {
      icon: <GraduationCap size={20} />,
      title: "Desenvolvimento Pessoal",
      description: "Cursos para crescimento individual",
    },
    {
      icon: <BookOpen size={20} />,
      title: "Gestão Empresarial",
      description: "Estratégias para liderança eficaz",
    },
    {
      icon: <BarChart size={20} />,
      title: "Análise de Dados",
      description: "Dominando análise de negócios",
    },
    {
      icon: <Users size={20} />,
      title: "Liderança",
      description: "Habilidades para gerenciar equipes",
    },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl  flex items-center justify-between px-6 backdrop-blur-xl bg-gradient-to-r from-green-500/15 via-teal-500/10 to-transparent dark:from-green-500/10 dark:via-teal-500/10 dark:to-transparent rounded-2xl shadow-xl z-50 border border-white/30 dark:border-zinc-700/50 transition-all duration-300">
        {/* Logo */}
        <div className="flex-shrink-0  flex items-center">
          <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl w-full h-full flex items-center justify-center text-white text-xl font-bold p-1">
            LOGO
          </div>
        </div>

        {/* Desktop Navigation  */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/20 dark:hover:bg-zinc-800/50 text-base font-medium px-4 py-3 rounded-xl transition-all duration-200 hover:backdrop-blur-3xl">
                  Cursos
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 bg-white dark:bg-zinc-900  w-[500px]  backdrop-blur-xl bg-gradient-to-r from-green-500/15 via-teal-500/10 to-transparent dark:from-green-500/10 dark:via-teal-500/10 dark:to-transparent rounded-2xl shadow-xl z-50 border border-white/30 dark:border-zinc-700/50 transition-all duration-300">
                  {/* Largura fixa */}
                  <h2 className="text-lg font-semibold text-center mb-2">
                    Nossos Cursos
                  </h2>
                  <div className="flex flex-col gap-2 w-[800px]">
                    <div className="grid grid-cols-2 gap-3">
                      {courses.map((course, idx) => (
                        <Card
                          key={idx}
                          className="p-4 flex flex-col justify-center items-center w-100 h-50"
                        >
                          <div className="mb-2">{course.icon}</div>
                          <h3 className="text-sm font-medium text-center">
                            {course.title}
                          </h3>
                        </Card>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="hover:bg-white/20 dark:hover:bg-zinc-800/50 text-base font-medium px-4 py-3 rounded-xl transition-all duration-200">
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/20 dark:hover:bg-zinc-800/50 text-base font-medium px-4 py-3 rounded-xl transition-all duration-200">
                  Conteúdo
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 bg-white dark:bg-zinc-900 borderbackdrop-blur-xl bg-gradient-to-r from-green-500/15 via-teal-500/10 to-transparent dark:from-green-500/10 dark:via-teal-500/10 dark:to-transparent z-50 border border-white/30 dark:border-zinc-700/50 transition-all duration-300 ">
                  <div className="grid gap-2 w-64">
                    <NavigationMenuLink className="px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 text-sm">
                      <FileText size={16} /> Tutoriais
                    </NavigationMenuLink>
                    <NavigationMenuLink className="px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 text-sm">
                      <Book size={16} /> E-books
                    </NavigationMenuLink>
                    <NavigationMenuLink className="px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 text-sm">
                      <Folder size={16} /> Recursos
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/20 dark:hover:bg-zinc-800/50 text-base font-medium px-4 py-3 rounded-xl transition-all duration-200">
                  Projetos
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 bg-white dark:bg-zinc-900 backdrop-blur-xl bg-gradient-to-r from-green-500/15 via-teal-500/10 to-transparent dark:from-green-500/10 dark:via-teal-500/10 dark:to-transparent rounded-2xl shadow-xl z-50 border border-white/30 dark:border-zinc-700/50 transition-all duration-300">
                  <div className="grid gap-2 w-64">
                    <NavigationMenuLink className="px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm">
                      Open Source
                    </NavigationMenuLink>
                    <NavigationMenuLink className="px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm">
                      Parcerias
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Sign In + Mode Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <Button className="rounded-full px-6 py-2.5 bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white transition-all text-base font-medium">
            Sign In
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 rounded-xl bg-white/20 dark:bg-zinc-800/50 hover:bg-white/30 dark:hover:bg-zinc-700/50 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-zinc-900 shadow-2xl z-50 animate-in slide-in-from-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl w-14 h-14 flex items-center justify-center text-white text-lg font-bold">
                  LOGO
                </div>
                <button
                  className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 grid gap-3">
                <Button
                  variant="ghost"
                  className="justify-start py-3 flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <GraduationCap size={18} /> Cursos
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start py-3 flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Book size={18} /> Blog
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start py-3 flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileText size={18} /> Conteúdo
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start py-3 flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Folder size={18} /> Projetos
                </Button>
              </div>

              <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <Button
                  className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Button>
                <div className="flex justify-center mt-2">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
