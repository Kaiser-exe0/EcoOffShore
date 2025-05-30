import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="flex justify-between items-center w-[60%] pr-3 backdrop-blur-sm rounded-2xl shadow-xl z-50 bg-gradient-to-r from-green-500/10 via-zinc-500/10 to-white/10 dark:from-green-500/10 dark:via-zinc-800/10 dark:to-black/10">
      <div className="w-16 h-16 flex items-center">
        <img
          src="/public/image-removebg-preview.png"
          alt="Logo"
          className="object-contain h-full"
        />
      </div>
      <NavigationMenu viewport={false} className="flex gap-20">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent hover:underline text-base font-medium px-0">
            Cursos
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-4 bg-white rounded-xl shadow-md w-[500px]">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-center">
                Cursos Exclusivos para você
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[...Array(4)].map((_, idx) => (
                  <Card
                    key={idx}
                    className="size-64 flex items-center justify-center"
                  >
                    teste
                  </Card>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className="hover:underline text-base font-medium">
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent hover:underline text-base font-medium px-0">
            Conteúdo
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-4 bg-white rounded-xl shadow-md w-64">
            <p className="text-sm text-gray-600">Em breve...</p>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent hover:underline text-base font-medium px-0">
            Projetos
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-4 bg-white rounded-xl shadow-md w-64">
            <p className="text-sm text-gray-600">Em breve...</p>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>

      <div className="gap-2 flex">
        <Button className="rounded-full px-6 py-2 bg-green-600 hover:bg-green-700 text-white transition-all">
          Sign In
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
