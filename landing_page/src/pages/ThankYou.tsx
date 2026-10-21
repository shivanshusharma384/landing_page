import { useEffect } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { PartyPopper, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function ThankYou() {
  useEffect(() => {
    const duration = 2000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF8A00', '#ffffff', '#FFDD00', '#ff0000', '#00ff00', '#0000ff']
      })
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF8A00', '#ffffff', '#FFDD00', '#ff0000', '#00ff00', '#0000ff']
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    
    frame()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground dark">
      <Navbar />

      <main className="relative flex-grow flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white border border-border shadow-[0_0_30px_rgba(236,72,153,0.3)]">
            <PartyPopper className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Installation Complete!
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            You've successfully installed <strong>LeetChaser</strong>. You're now ready to dominate your LeetCode sessions with instant telemetry and live racing.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-xl"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-md shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Support our Open Source work ❤️</CardTitle>
              <CardDescription className="text-base mt-2">
                LeetChaser is 100% free and open-source. If you love what we do and want to support the project, please consider buying us a coffee or leaving a star on our GitHub repository.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" className="flex-1 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-bold" asChild>
                <a href="https://buymeacoffee.com/pixelpair" target="_blank" rel="noreferrer">
                  <Coffee className="mr-2 w-5 h-5 text-yellow-500" /> 
                  Buy us a coffee
                </a>
              </Button>
              <Button size="lg" variant="outline" className="flex-1 rounded-xl font-bold" asChild>
                <a href="https://github.com/pixelpair214/Leetchaser" target="_blank" rel="noreferrer">
                  <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg> 
                  Star on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
