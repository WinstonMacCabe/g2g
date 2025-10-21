import { Button } from "@/components/ui/button"

export function LivingroomsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
          <source src="/fun.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-sm font-medium text-primary">Community • Connection • Growth</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">Living Rooms</h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 max-w-3xl mx-auto">
            Experience authentic community in intimate settings where faith comes alive through shared meals, meaningful
            conversations, and life-changing connections.
          </p>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
              <div className="text-2xl font-bold text-primary mb-2">Weekly</div>
              <div className="text-sm text-muted-foreground">Gatherings</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
              <div className="text-2xl font-bold text-primary mb-2">15-20</div>
              <div className="text-sm text-muted-foreground">People Per Group</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
              <div className="text-2xl font-bold text-primary mb-2">Global</div>
              <div className="text-sm text-muted-foreground">Network</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Find a Living Room
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto bg-transparent">
              Host a Living Room
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Active Groups</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">80+</div>
                <div className="text-sm text-muted-foreground">Cities Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Community Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Prayer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
