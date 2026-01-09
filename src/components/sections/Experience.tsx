import { experiences } from "@/data/experience";
import { SectionTitle } from "../ui/SectionTitle";
import { Pill } from "../ui/Pill";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-14">
      <SectionTitle kicker="timeline" title="ประสบการณ์การทำงาน" />

      <div className="mt-8 grid grid-cols-12 gap-6">

        <div className="col-span-12 md:col-span-8">
          <div className="space-y-6">
            {experiences.map((ex) => (
              <div
                key={ex.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="text-lg font-semibold tracking-tight">
                      {ex.title}
                    </div>
                    <div className="text-sm text-zinc-600">{ex.highlight}</div>
                  </div>
                  <div className="text-xs tracking-[0.25em] uppercase text-zinc-500">
                    {ex.period}
                  </div>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {ex.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {ex.tech.map((t) => (
                    <Pill key={t} className="bg-zinc-50">
                      {t}
                    </Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
