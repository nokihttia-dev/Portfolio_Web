import Image from "next/image";
import { projects } from "@/data/projects";
import { SectionTitle } from "../ui/SectionTitle";
import { Pill } from "../ui/Pill";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
      <SectionTitle kicker="selected" title="Projects" />

      <div className="mt-8 grid grid-cols-12 gap-6">
        {projects.map((p) => (
          <article
            key={p.name}
            className="col-span-12 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm md:col-span-6"
          >
            <div className="relative h-56 bg-zinc-100">
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

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600">{p.desc}</p>
                </div>

                <div className="flex gap-2">
                  {p.links?.github ? (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium hover:bg-zinc-50"
                    >
                      GitHub
                    </a>
                  ) : null}
                  {p.links?.demo ? (
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-zinc-950 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-900"
                    >
                      Live
                    </a>
                  ) : null}
                </div>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Pill key={t} className="bg-zinc-50">
                    {t}
                  </Pill>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
