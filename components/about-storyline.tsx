export function AboutStoryline() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto">
              For over five years, we've been committed to making disciples of all nations through transformational
              training and authentic community.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12 mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-32 flex-shrink-0">
                <div className="text-2xl font-bold text-primary">2020</div>
                <div className="text-sm text-muted-foreground">The Beginning</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">A Vision is Born</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Founded with a simple yet profound vision: to train young people to know God and make Him known. What
                  started as a small gathering of passionate believers has grown into a global movement spanning every
                  continent.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-32 flex-shrink-0">
                <div className="text-2xl font-bold text-primary">1975</div>
                <div className="text-sm text-muted-foreground">Global Expansion</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Reaching the Nations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our first international locations opened, marking the beginning of our global expansion. The heart to
                  reach every nation with the Gospel drove us to establish training centers on every inhabited
                  continent.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-32 flex-shrink-0">
                <div className="text-2xl font-bold text-primary">2024</div>
                <div className="text-sm text-muted-foreground">New Millennium</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">South Africa</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Embracing new technologies and methodologies while maintaining our core values. We launched online
                  training programs and expanded our community-based initiatives like Living Rooms to reach even more
                  people.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-32 flex-shrink-0">
                <div className="text-2xl font-bold text-primary">Today</div>
                <div className="text-sm text-muted-foreground">Present Day</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Continuing the Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over one million graduates and active programs in 180+ countries, we continue to pursue our
                  original calling with renewed passion and innovative approaches to discipleship and community
                  building.
                </p>
              </div>
            </div>
          </div>

          {/* Identity Statement */}
          <div className="bg-card/50 border border-border rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Identity</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are a global family of believers united by our love for God and our commitment to His mission. We
              believe in the transformative power of authentic relationships, biblical truth, and Spirit-led community.
              Our identity is rooted in Christ, expressed through service, and demonstrated by our love for one another
              and the world He came to save.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
