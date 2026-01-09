"use client";

import { useEffect, useRef, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";

export default function HeroEditorial() {
  const topProjects = projects.slice(0, 4);
  const recentActivity = experiences.slice(0, 4);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const pauseRef = useRef(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frameId = 0;
    let lastTime = performance.now();
    const speed = 26;

    const tick = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!pauseRef.current) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll > 0) {
          const nextScroll = container.scrollLeft + (speed * delta) / 1000;
          container.scrollLeft = nextScroll >= maxScroll ? 0 : nextScroll;
        }
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const term = searchInputRef.current?.value.trim() ?? "";
    if (term) {
      router.push(`?q=${encodeURIComponent(term)}#projects`);
      return;
    }
    router.push("/#projects");
  };

  return (
    <section id="home" className="pb-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-semibold"></div>
            <div className="flex items-center gap-2">
              <span className="chip">portfolio</span>
              <span className="chip">2026</span>
            </div>
          </div>

          <form
            className="flex flex-1 flex-wrap items-center justify-end gap-3"
            role="search"
            onSubmit={handleSearchSubmit}
          >
            <input
              key={searchParams.get("q") ?? ""}
              ref={searchInputRef}
              className="search-input focus-ring"
              placeholder="Search projects, skills"
              aria-label="Search"
              defaultValue={searchParams.get("q") ?? ""}
            />
            <button type="submit" className="btn btn-primary focus-ring">
              Search
            </button>
          </form>
      </div>

      <div className="mt-8 grid grid-cols-12 gap-6">
          <aside className="col-span-12 hidden md:col-span-1 md:flex">
            <div className="nav-rail flex w-full flex-col items-center gap-3">
              <a className="nav-icon active" href="#home" aria-label="Home">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M3 11.5 12 4l9 7.5v7.5a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a className="nav-icon" href="#projects" aria-label="Projects">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M4 5h7v7H4zM13 5h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a className="nav-icon" href="#experience" aria-label="Experience">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M9 6V5a3 3 0 0 1 6 0v1h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm2 0h2V5a1 1 0 0 0-2 0z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a className="nav-icon" href="#education" aria-label="Education">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M12 4 2 9l10 5 10-5zm-6 8.2V16l6 3 6-3v-3.8l-6 3z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a className="nav-icon" href="#contact" aria-label="Contact">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.5l8 5 8-5V7z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </aside>

          <div className="col-span-12 space-y-6 md:col-span-7">
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="section-kicker">Recent Collections</div>
                  <div className="mt-2 text-xl font-semibold text-zinc-900">
                    Featured Projects
                  </div>
                </div>
                <a href="#projects" className="btn btn-ghost focus-ring">
                  View All
                </a>
              </div>

              <div
                ref={scrollRef}
                className="scroll-row mt-6"
                onMouseEnter={() => {
                  pauseRef.current = true;
                }}
                onMouseLeave={() => {
                  pauseRef.current = false;
                }}
              >
                {topProjects.map((project) => (
                  <article
                    key={project.name}
                    className="card soft min-w-55 p-4 hover-lift"
                  >
                    <div className="relative h-28 overflow-hidden rounded-2xl bg-zinc-100">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                    <div className="mt-4 text-sm font-semibold text-zinc-900">
                      {project.name}
                    </div>
                    <div className="mt-1 text-xs text-zinc-600">
                      {project.desc}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between gap-4">
                <div className="section-kicker">History</div>
                <a href="#experience" className="btn btn-ghost focus-ring">
                  View All
                </a>
              </div>

              <div className="mt-5 grid gap-3 text-sm">
                {recentActivity.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3"
                  >
                    <div className="font-medium text-zinc-900">{item.title}</div>
                    <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                      {item.period}
                    </div>
                    <div className="font-sm text-zinc-600">{item.highlight}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="card light p-6 hover-lift">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-xl font-semibold text-zinc-900">
                      {profile.nameTH}
                    </div>
                    <div className="text-sm text-zinc-600">
                      {profile.role}
                    </div>
                  </div>
                </div>
                <button className="icon-btn" aria-label="Add">
                  
                </button>
              </div>

              <div className="mt-6 frame-photo">
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-[20px] bg-zinc-100">
                  <Image
                    src="/images/CV_AITTHIKON (2).png"
                    alt="featured"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-6 text-xl font-semibold text-zinc-900">
              Contact
              </div>
              <div className="text-sm text-zinc-500">aitthikon.work@gmail.com</div>
              <div className="text-sm text-zinc-500">082-853-5880</div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <a className="btn btn-outline focus-ring" href={profile.contact.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="btn btn-outline focus-ring" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
