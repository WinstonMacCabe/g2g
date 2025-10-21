import { Button } from "@/components/ui/button"

export function MapLocator() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
              Find a Living Room Near You
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Join thousands of people in cities around the world who are experiencing authentic community through
              Living Rooms gatherings.
            </p>
          </div>

          {/* Map Container */}
          <div className="bg-card border border-border rounded-xl overflow-hidden mb-12">
            <div className="aspect-video bg-muted/20 flex items-center justify-center relative">
              {/* Placeholder for interactive map */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Interactive Map Coming Soon</h3>
                <p className="text-muted-foreground mb-6">
                  We're building an interactive map to help you find Living Rooms in your area.
                </p>
                <Button variant="outline">Get Notified When Available</Button>
              </div>

              {/* Sample location pins */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Location Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">North America</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>United States</span>
                  <span className="text-primary font-medium">150+ groups</span>
                </div>
                <div className="flex justify-between">
                  <span>Canada</span>
                  <span className="text-primary font-medium">25+ groups</span>
                </div>
                <div className="flex justify-between">
                  <span>Mexico</span>
                  <span className="text-primary font-medium">15+ groups</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Europe</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>United Kingdom</span>
                  <span className="text-primary font-medium">80+ groups</span>
                </div>
                <div className="flex justify-between">
                  <span>Germany</span>
                  <span className="text-primary font-medium">45+ groups</span>
                </div>
                <div className="flex justify-between">
                  <span>Netherlands</span>
                  <span className="text-primary font-medium">30+ groups</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Asia Pacific</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Australia</span>
                  <span className="text-primary font-medium">60+ groups</span>
                </div>
                <div className="flex justify-between">
                  <span>New Zealand</span>
                  <span className="text-primary font-medium">20+ groups</span>
                </div>
                <div className="flex justify-between">
                  <span>Singapore</span>
                  <span className="text-primary font-medium">15+ groups</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card/50 border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Don't see a Living Room in your area?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We'd love to help you start one! Our team provides training, resources, and ongoing support to help you
              create authentic community in your city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Start a Living Room</Button>
              <Button variant="outline" size="lg">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
