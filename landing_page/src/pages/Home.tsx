import { motion } from "framer-motion"
import { ArrowRight, Swords, Activity, Zap, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const features = [
  {
    title: "Chase Arena",
    description: "Enter Chase Mode using the @chase command. Add up to 3 LeetCode friends to the Race Grid and watch their progress bars fill up in real-time as you all solve problems.",
    icon: <Swords className="w-4 h-4 mr-2" />,
    badge: "LIVE 1V1 TELEMETRY",
    image: "/assets/demo-chase.png",
  },
  {
    title: "Activity Feed",
    description: "Stuck on what to solve next? See exactly what the users you follow have recently solved. Find patterns, check difficulty ratings, and get curated recommendations.",
    icon: <Activity className="w-4 h-4 mr-2" />,
    badge: "FRIEND TRACKING",
    image: "/assets/demo-friends.png",
    reverse: true,
  },
  {
    title: "Instant Search",
    description: "Search through all 3,000+ LeetCode problems instantly. Built on a synced IndexedDB layer, lookups are lightning fast and offline-ready.",
    icon: <Search className="w-4 h-4 mr-2" />,
    badge: "OFFLINE FIRST",
    image: "/assets/demo-search.png",
  }
]

const team = [
  {
    name: "Shivanshu Sharma",
    role: "Developer",
    github: "https://github.com/shivanshusharma384",
    avatar: "https://github.com/shivanshusharma384.png"
  },
  {
    name: "Naman Chawla",
    role: "Developer",
    github: "https://github.com/namanc1845",
    avatar: "https://github.com/namanc1845.png"
  },
  {
    name: "Utkrish Krishan",
    role: "Developer",
    github: "https://github.com/utkrishtkrishan-ukg",
    avatar: "https://github.com/utkrishtkrishan-ukg.png"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground dark">
      <Navbar />

      {/* Hero Section */}
      <main id="about" className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 min-h-[90vh]">
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Badge variant="outline" className="mb-6 px-4 py-1.5 rounded-full border-border bg-background/50 backdrop-blur">
            <Zap className="w-3.5 h-3.5 mr-2 text-foreground" />
            Supercharge your LeetCode
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-orange-400">Your Code,</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Your Dominance</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A powerful browser extension bringing competitive telemetry directly to LeetCode. Instant offline problem search, live 1v1 racing, and friend tracking—accessible anywhere with <kbd className="font-mono bg-muted px-2 py-1 rounded text-sm text-foreground border border-border">Alt+L</kbd>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full font-bold px-8" asChild>
              <a href="#features">
                See Features <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto mt-20 relative"
        >
          <div className="rounded-xl border border-border/50 bg-card/50 p-2 shadow-2xl backdrop-blur-sm">
            <img 
              src="/assets/demo-dashboard.png" 
              alt="LeetChaser Dashboard" 
              className="w-full rounded-lg object-cover border border-border/50" 
            />
          </div>
        </motion.div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto space-y-32">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-12 lg:gap-20 items-center ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="flex-1 space-y-6">
                <Badge variant="secondary" className="px-3 py-1 bg-secondary text-secondary-foreground font-bold tracking-wider text-xs">
                  {feature.icon}
                  {feature.badge}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">{feature.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1 w-full">
                <Card className="overflow-hidden border-border/50 bg-card shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
                  <img src={feature.image} alt={feature.title} className="w-full h-auto object-cover" />
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 px-6 border-t border-border/40 bg-muted/20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Developers</h2>
            <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
              The minds behind the ultimate LeetCode companion.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="max-w-sm w-full transition-all hover:-translate-y-2 border-border/50 bg-card hover:border-border hover:shadow-xl">
                  <CardHeader className="text-center pt-8">
                    <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary/20">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.substring(0,2)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary/80">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center pb-8">
                    <Button variant="outline" size="icon" className="rounded-full w-10 h-10" asChild>
                      <a href={member.github} target="_blank" rel="noreferrer">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
