import Link from "next/link"
import { Instagram, Youtube, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
              GATHER TO GO
            </Link>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Transforming lives through discipleship training and global missions. Join us in making disciples of all
              nations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/gathertogo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@gathertogo5752"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/gathertogo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/som" className="text-muted-foreground hover:text-primary transition-colors">
                  School of Missions Program
                </Link>
              </li>
              {/*}
              <li>
                <Link href="/livingrooms" className="text-muted-foreground hover:text-primary transition-colors">
                  Living Rooms
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              {/*<li>
                <Link href="/apply" className="text-muted-foreground hover:text-primary transition-colors">
                  Apply Now
                </Link>
              </li>*/}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/som" className="text-muted-foreground hover:text-primary transition-colors">
                  School of Missions
                </Link>
              </li>
              <li>{/*}
                <Link href="/leadership" className="text-muted-foreground hover:text-primary transition-colors">
                  Leadership Training
                </Link>
              </li>
              <li>*/}{/*}
                <Link href="/missions" className="text-muted-foreground hover:text-primary transition-colors">
                  Mission Trips
                </Link>
              </li>
              <li>
                <Link href="/internships" className="text-muted-foreground hover:text-primary transition-colors">
                  Internships
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="text-muted-foreground hover:text-primary transition-colors">
                  Scholarships
                </Link>*/}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              {/*<div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <span>
                  75-5851 Kuakini Hwy
                  <br />
                  Kailua-Kona, HI 96740
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+1-808-555-0123" className="hover:text-primary transition-colors">
                  +1 (808) 555-0123
                </a>
              </div>*/}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:info@dts.org" className="hover:text-primary transition-colors">
                  info@gathertogo.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">© 2025 Gather to Go. All rights reserved.</div>{/*}
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>*/}
        </div>
      </div>
    </footer>
  )
}
