export function StatementOfFaith() {
  const beliefs = [
    {
      title: "The Bible",
      content:
        "We believe the Bible is the inspired, infallible Word of God and our final authority for faith and practice.",
    },
    {
      title: "The Trinity",
      content: "We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.",
    },
    {
      title: "Jesus Christ",
      content:
        "We believe Jesus Christ is fully God and fully man, born of a virgin, lived a sinless life, died for our sins, and rose again.",
    },
    {
      title: "Salvation",
      content: "We believe salvation is by grace through faith in Jesus Christ alone, not by works or human effort.",
    },
    {
      title: "The Holy Spirit",
      content:
        "We believe the Holy Spirit indwells believers, empowers them for service, and manifests spiritual gifts.",
    },
    {
      title: "The Church",
      content: "We believe the Church is the body of Christ, called to worship, fellowship, discipleship, and mission.",
    },
    {
      title: "The Great Commission",
      content:
        "We believe all Christians are called to make disciples of all nations through evangelism and discipleship.",
    },
    {
      title: "Second Coming",
      content: "We believe in the personal, visible return of Jesus Christ and the resurrection of the dead.",
    },
  ]

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">Statement of Faith</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              These core beliefs form the foundation of everything we do and teach. They unite us as a global community
              and guide our mission.
            </p>
          </div>

          {/* Beliefs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beliefs.map((belief, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{belief.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{belief.content}</p>
              </div>
            ))}
          </div>

          {/* Additional Statement */}
          <div className="mt-16 text-center bg-background/50 border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Unity in Diversity</h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              While we hold firmly to these essential truths, we celebrate the diversity of the global Church. We
              welcome believers from all denominational backgrounds who share these core convictions and are committed
              to the mission of making disciples of all nations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
