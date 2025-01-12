import { Moon, Sun, Turtle } from "lucide-react"

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useTheme } from "./theme-provider"
import { flushSync } from "react-dom"

export function ModeToggle() {
  const { setTheme } = useTheme()
  let isDark = true;

  function handleThemeToggle(){
    if(isDark){
      isDark = false
      setTheme("light");
    }
    else{
      isDark=true;
      setTheme("dark");
      
    }
  }

  return (
        <Button variant="ghost" size="icon" onClick={handleThemeToggle}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
}
