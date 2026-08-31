import { Coffee, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - originally ./assets/demo-logo.jpg */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center font-bold text-primary">
            LC
          </div>
          <Link to="/" className="hidden sm:block text-xl font-bold tracking-tight text-foreground">
            LeetChaser
          </Link>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-sm font-medium">
          <a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="/#team" className="text-muted-foreground hover:text-foreground transition-colors">Team</a>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a href="https://github.com/pixelpair214/Leetchaser" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
            </Button>
          </a>
          <a href="https://buymeacoffee.com/pixelpair" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-yellow-400">
              <Coffee className="w-5 h-5" />
            </Button>
          </a>
          <Button className="rounded-full font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Download className="w-4 h-4 mr-2" />
            Get Extension
          </Button>
        </div>
      </div>
    </nav>
  )
}
