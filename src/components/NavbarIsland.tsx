import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, Facebook, Instagram, MessageCircle, ChevronDown } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "About Camps Bay CID" },
      { href: "/about#team", label: "Management Team" },
      { href: "/about#board", label: "Board of Directors" },
      { href: "/about#subcommittees", label: "Subcommittees" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    href: "/programmes",
    label: "Programmes",
    children: [
      { href: "/programmes", label: "All Programmes" },
      { href: "/programmes/public-safety", label: "Public Safety" },
      { href: "/programmes/cleaning", label: "Cleaning & Urban Maintenance" },
      { href: "/programmes/social-development", label: "Social Development" },
    ],
  },
  {
    href: "/projects",
    label: "Projects",
    children: [
      { href: "/projects", label: "All Projects" },
      { href: "/projects/greenbelt", label: "Greenbelt Rehabilitation" },
      { href: "/projects/beachfront", label: "Beachfront Rehabilitation" },
      { href: "/projects/glens", label: "Big & Little Glen" },
    ],
  },
  { href: "/communications", label: "Communications" },
  { href: "/community", label: "Community" },
  { href: "/documents", label: "Documents" },
  { href: "/contact", label: "Contact" },
];

const LOGO_WHITE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663382560453/cbcid-logo-white-text.png";
const LOGO_DARK = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663382560453/cbcid-logo-transparent.png";

export default function NavbarIsland({ currentPath }: { currentPath: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHome = currentPath === "/";
  const isTransparent = isHome && !scrolled;

  const navTextColor = isTransparent
    ? "text-white/90 hover:text-white"
    : "text-[oklch(0.20_0.07_245)] hover:text-[oklch(0.35_0.07_245)]";
  const navActiveColor = isTransparent ? "text-[#6CCFF6]" : "text-[oklch(0.55_0.12_70)]";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-[oklch(0.20_0.07_245)] text-white text-sm py-3 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+27872232864" className="flex items-center gap-1.5 hover:text-[#6CCFF6] transition-colors">
              <Phone size={15} />
              <span>24/7 Hotline: +27 87 223 2864</span>
            </a>
            <a href="mailto:connect@campsbaycid.org" className="flex items-center gap-1.5 hover:text-[#6CCFF6] transition-colors">
              <Mail size={15} />
              <span>connect@campsbaycid.org</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/campsbaycid" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#6CCFF6] transition-colors">
              <Instagram size={17} />
            </a>
            <a href="https://www.facebook.com/campsbaycid" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#6CCFF6] transition-colors">
              <Facebook size={17} />
            </a>
            <a href="https://wa.me/27872232864" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#6CCFF6] transition-colors">
              <MessageCircle size={17} />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          isTransparent ? "bg-transparent" : "bg-white shadow-md border-b border-gray-100"
        }`}
        ref={dropdownRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <a href="/" className="flex items-center flex-shrink-0">
            <img
              src={isTransparent ? LOGO_WHITE : LOGO_DARK}
              alt="Camps Bay City Improvement District"
              className="h-16 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.href ||
                (link.href !== "/" && currentPath.startsWith(link.href));
              if (link.children) {
                return (
                  <div key={link.href} className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.href ? null : link.href)
                      }
                      className={`flex items-center gap-1 px-3 py-2 font-['Syne'] font-semibold text-xs uppercase tracking-wider transition-colors rounded-md ${
                        isActive ? navActiveColor : navTextColor
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform ${
                          openDropdown === link.href ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === link.href && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                        {link.children.map((child, idx) => (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-3 font-['Nunito_Sans'] text-sm transition-colors ${
                              idx === 0
                                ? "text-[oklch(0.55_0.12_70)] hover:bg-gray-50 font-bold border-b border-gray-100"
                                : "text-[oklch(0.30_0.05_245)] hover:text-[oklch(0.20_0.07_245)] hover:bg-gray-50 border-b border-gray-50 last:border-0"
                            }`}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 font-['Syne'] font-semibold text-xs uppercase tracking-wider transition-colors rounded-md ${
                    isActive ? navActiveColor : navTextColor
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+27872232864"
              className="hidden lg:flex items-center gap-2 bg-[oklch(0.75_0.15_70)] text-[oklch(0.20_0.07_245)] font-['Syne'] font-bold text-xs px-4 py-2 rounded-full hover:bg-[oklch(0.80_0.15_70)] transition-colors"
            >
              <Phone size={13} />
              <span>Emergency</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`xl:hidden p-2 ${isTransparent ? "text-white" : "text-[oklch(0.20_0.07_245)]"}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.href}>
                <a
                  href={link.href}
                  className="block px-6 py-4 font-['Syne'] font-semibold text-sm uppercase tracking-wider text-[oklch(0.20_0.07_245)] border-b border-gray-50 hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
                {link.children && (
                  <div className="bg-gray-50">
                    {link.children.slice(1).map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block px-10 py-3 font-['Nunito_Sans'] text-sm text-[oklch(0.40_0.05_245)] hover:text-[oklch(0.20_0.07_245)] border-b border-gray-100"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4 border-t border-gray-100">
              <a
                href="tel:+27872232864"
                className="flex items-center justify-center gap-2 bg-[oklch(0.75_0.15_70)] text-[oklch(0.20_0.07_245)] font-['Syne'] font-bold text-sm px-6 py-3 rounded-full w-full"
              >
                <Phone size={15} />
                Emergency: +27 87 223 2864
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
