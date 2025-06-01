import { Input } from "@/components/ui/input";
import { BookOpen, Search, Sparkles } from "lucide-react";

export function SearchCourse() {
  return (
    <div className="relative flex flex-col justify-center items-center p-8 gap-4 backdrop-blur-xl bg-gradient-to-r from-green-500/20 via-teal-500/15 to-transparent dark:from-green-900/30 dark:via-teal-900/20 dark:to-transparent rounded-2xl shadow-lg z-30 border border-white/40 dark:border-zinc-700/60 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] group overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-400/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>

      <div className="flex flex-col items-center gap-2 z-10">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-green-500 dark:text-green-400 animate-pulse" />
          <p className="text-lg font-medium text-center text-gray-800 dark:text-white/90">
            Em busca de novos conhecimentos?
          </p>
          <Sparkles className="h-5 w-5 text-teal-500 dark:text-teal-400 animate-pulse" />
        </div>

        <div className="flex items-center text-muted-foreground mb-2">
          <BookOpen className="h-4 w-4 mr-1" />
          <span className="text-sm">Explore nosso catálogo de cursos</span>
        </div>
      </div>

      <div className="relative w-full max-w-2xl z-10">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
        <Input
          placeholder="O que vamos aprender hoje?"
          className="pl-10 py-6 text-base border-2 border-gray-300/80 dark:border-zinc-600 rounded-xl bg-white/90 dark:bg-gray-800/90 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:border-transparent transition-all group-hover:border-green-400/50"
        />
      </div>
    </div>
  );
}
