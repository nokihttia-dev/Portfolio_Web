import { skills } from "@/data/skills";
import { SectionTitle } from "../ui/SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-14">
      <SectionTitle kicker="stack" title="Skills" />

      <div className="mt-8 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="text-[11px] tracking-[0.35em] uppercase text-zinc-500">
              technical
            </div>

            <div className="mt-5 space-y-5">
              {skills.technical.map((g) => (
                <div key={g.label}>
                  <div className="text-sm font-semibold">{g.label}</div>
                  <div className="mt-2 text-sm text-zinc-700">
                    {g.items.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 shadow-sm">
            <div className="text-[11px] tracking-[0.35em] uppercase text-zinc-500">
              soft skills
            </div>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-zinc-700">
              {skills.soft.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
