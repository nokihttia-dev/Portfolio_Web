"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { projects } from "@/data/projects";
import { SectionTitle } from "../ui/SectionTitle";
import { Pill } from "../ui/Pill";

export default function Projects() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();
  const filteredProjects = query
    ? projects.filter((project) => {
        const haystack = [
          project.name,
          project.desc,
          project.bullets.join(" "),
          project.tech.join(" "),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      })
    : projects;

  return (
    <section id="projects" className="px-0 py-8 sm:py-10 md:py-14">
      <SectionTitle kicker="selected" title="Projects" />

      <div className="mt-6 sm:mt-8 grid grid-cols-12 gap-4 sm:gap-6">
        {filteredProjects.map((p) => (
          <article
            key={p.name}
            className="card hover-lift col-span-12 overflow-hidden md:col-span-6"
          >
            <div className="relative h-44 sm:h-52 md:h-56 bg-zinc-100">
              {/* ถ้าไม่มีรูป ให้ยังแสดง block เท่ๆ แบบขาว-ดำ */}
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover "
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-5xl font-black tracking-tight text-zinc-300">
                    {p.name.split(" ")[0]}
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-600">{p.desc}</p>
                </div>

                <div className="flex w-full flex-wrap gap-2 sm:w-auto sm:justify-end">
                  {p.links?.github ? (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline focus-ring w-full sm:w-auto"
                    >
                      GitHub
                    </a>
                  ) : null}
                  {p.links?.demo ? (
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary focus-ring w-full sm:w-auto"
                    >
                      Live
                    </a>
                  ) : null}
                </div>
              </div>

              <ul className="mt-3 sm:mt-4 list-disc space-y-2 pl-5 text-xs sm:text-sm text-zinc-600">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Pill key={t} className="bg-zinc-100 text-zinc-700">
                    {t}
                  </Pill>
                ))}
              </div>
            </div>
          </article>
        ))}
        {filteredProjects.length === 0 ? (
          <div className="col-span-12 rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-5 text-sm text-zinc-600">
            No projects matched your search.
          </div>
        ) : null}
      </div>
    </section>
  );
}
