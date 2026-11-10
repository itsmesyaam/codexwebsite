"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { mainNav, type NavItem } from "@/content/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container, Logo, cn } from "@/components/ui";

const norm = (p: string) => p.replace(/\/+$/, "") || "/";

function isActive(item: NavItem, pathname: string) {
  const current = norm(pathname);
  return (item.match ?? [item.href]).some((m) => {
    const n = norm(m);
    return n === "/" ? current === "/" : current === n || current.startsWith(`${n}/`);
  });
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile drawer on escape / window resize
  useEffect(() => {
    if (!open) return;
    const behind = [document.getElementById("main"), document.getElementById("site-footer")];
    const desktop = window.matchMedia("(min-width: 1024px)");
    document.body.style.overflow = "hidden";
    behind.forEach((el) => el?.setAttribute("inert", ""));

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const onResize = () => desktop.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      behind.forEach((el) => el?.removeAttribute("inert"));
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        solid ? "border-line/80 bg-bg/85 backdrop-blur-xl backdrop-saturate-150" : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = isActive(item, pathname);
              const hasDropdown = Boolean(item.children && item.children.length > 0);

              if (hasDropdown) {
                return (
                  <li key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      onMouseEnter={() => setServicesOpen(true)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={cn(
                        "relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer",
                        active ? "text-fg" : "text-muted hover:text-fg",
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn("size-3.5 transition-transform duration-200", servicesOpen ? "rotate-180" : "")}
                        aria-hidden
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          onMouseLeave={() => setServicesOpen(false)}
                          className="absolute start-0 top-full mt-2 w-[480px] rounded-2xl border border-line bg-surface p-4 shadow-xl shadow-fg/5"
                        >
                          <div className="mb-2 pb-2 border-b border-line flex items-center justify-between px-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                              Software Services & Process
                            </span>
                            <Link
                              href="/custom-software-development/"
                              onClick={() => setServicesOpen(false)}
                              className="text-xs font-medium text-accent hover:underline flex items-center gap-1"
                            >
                              <span>All Services</span>
                              <ArrowRight className="size-3" aria-hidden />
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            {item.children?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setServicesOpen(false)}
                                className="group block rounded-xl p-2.5 hover:bg-fg/5 transition-colors"
                              >
                                <p className="text-xs font-semibold text-fg group-hover:text-accent transition-colors">
                                  {sub.label}
                                </p>
                                {sub.description && (
                                  <p className="mt-0.5 text-[11px] text-muted line-clamp-1">
                                    {sub.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      active ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-fg/[0.06]"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:flex" />
          <Link
            href="/contact/"
            className="hidden lg:inline-flex items-center justify-center h-10 rounded-full px-5 text-xs font-semibold bg-fg text-bg hover:bg-fg/85 transition-colors"
          >
            Book a process review
          </Link>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full text-fg transition-colors hover:bg-fg/5 lg:hidden cursor-pointer"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg lg:hidden"
          >
            <Container className="flex flex-col gap-8 py-6">
              <nav aria-label="Mobile">
                <ul className="divide-y divide-line">
                  {mainNav.map((item) => {
                    const hasDropdown = Boolean(item.children && item.children.length > 0);

                    if (hasDropdown) {
                      return (
                        <li key={item.label} className="py-3">
                          <button
                            type="button"
                            onClick={() => setMobileServicesOpen((v) => !v)}
                            className="flex w-full items-center justify-between text-xl font-medium tracking-tight text-fg"
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={cn(
                                "size-5 transition-transform duration-200 text-muted",
                                mobileServicesOpen ? "rotate-180" : ""
                              )}
                              aria-hidden
                            />
                          </button>
                          {mobileServicesOpen && (
                            <ul className="mt-3 space-y-2 ps-3 border-s border-line">
                              {item.children?.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={close}
                                    className="block py-1.5 text-sm text-muted hover:text-fg"
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    }

                    return (
                      <li key={item.href} className="py-3">
                        <Link
                          href={item.href}
                          onClick={close}
                          aria-current={isActive(item, pathname) ? "page" : undefined}
                          className="block text-xl font-medium tracking-tight aria-[current=page]:text-accent text-fg"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="flex flex-col gap-4 pt-4 border-t border-line">
                <Link
                  href="/contact/"
                  onClick={close}
                  className="w-full inline-flex items-center justify-center h-12 rounded-full bg-fg text-bg text-sm font-semibold hover:bg-fg/85 transition-colors"
                >
                  Book a process review
                </Link>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
