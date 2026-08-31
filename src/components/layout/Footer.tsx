import { Coffee } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative z-10 bg-background py-12 px-6 border-t border-border">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center font-bold text-primary text-[10px]">
            LC
          </div>
          <span className="font-bold text-foreground text-sm tracking-wide">LeetChaser</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <a
            href="https://buymeacoffee.com/pixelpair"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors flex items-center gap-2 font-medium"
          >
            <Coffee className="w-4 h-4" />
            Buy us a coffee
          </a>
          <p className="text-sm text-muted-foreground">
            © 2026 LeetChaser.{" "}
            <a
              href="https://github.com/pixelpair214/Leetchaser"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Open Source on GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
