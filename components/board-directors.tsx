export function BoardDirectors() {
  const boardMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chairman of the Board",
      bio: "Former missionary with 25+ years of international experience. PhD in Theology from Fuller Seminary.",
      image: "/professional-woman-executive.png",
    },
    {
      name: "Rev. Michael Chen",
      role: "Vice Chairman",
      bio: "Senior Pastor and author with extensive leadership experience in Asia-Pacific region.",
      image: "/professional-asian-man-pastor.jpg",
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Secretary",
      bio: "International development specialist with focus on education and community building.",
      image: "/professional-latina-woman-educator.jpg",
    },
    {
      name: "James Thompson",
      role: "Treasurer",
      bio: "CPA and financial consultant with 20+ years experience in non-profit financial management.",
      image: "/professional-accountant.png",
    },
    {
      name: "Dr. Ruth Okafor",
      role: "Board Member",
      bio: "Medical doctor and humanitarian with extensive work in Africa and global health initiatives.",
      image: "/professional-african-woman-doctor.jpg",
    },
    {
      name: "Pastor David Kim",
      role: "Board Member",
      bio: "Church planter and missions strategist with focus on unreached people groups.",
      image: "/professional-korean-man-pastor.jpg",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">Board of Directors</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Our board provides strategic oversight, ensures accountability, and guides our global mission with wisdom
              and integrity.
            </p>
          </div>

          {/* Board Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="aspect-square bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Accountability Section */}
          <div className="bg-card/50 border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Our Commitment to Accountability</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">Financial Transparency</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Annual financial audits by independent CPA firm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Quarterly financial reports to board and stakeholders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Public disclosure of executive compensation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Member of Evangelical Council for Financial Accountability</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Governance Standards</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Independent board majority with diverse expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Regular board training and development programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Comprehensive conflict of interest policies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Annual performance evaluations and strategic planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
