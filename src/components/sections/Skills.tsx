"use client";

import { useSearchParams } from "next/navigation";
import { skills } from "@/data/skills";
import { SectionTitle } from "../ui/SectionTitle";

export default function Skills() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();
  const technicalGroups = query
    ? skills.technical
        .map((group) => {
          const labelMatch = group.label.toLowerCase().includes(query);
          const items = labelMatch
            ? group.items
            : group.items.filter((item) => item.toLowerCase().includes(query));
          return { ...group, items };
        })
        .filter((group) => group.items.length > 0)
    : skills.technical;
  const softSkills = query
    ? skills.soft.filter((skill) => skill.toLowerCase().includes(query))
    : skills.soft;

  return (
    <section id="skills" className="px-0 py-10 md:py-14">
      <SectionTitle kicker="stack" title="Skills" />

      <div className="mt-8 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <div className="card p-6 hover-lift">
            <div className="section-kicker">
              technical
            </div>

            <div className="mt-5 space-y-5">
              {technicalGroups.map((g) => (
                <div key={g.label}>
                  <div className="text-sm font-semibold text-zinc-900">{g.label}</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    {g.items.join(" • ")}
                  </div>
                </div>
              ))}
              {technicalGroups.length === 0 ? (
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
                  No technical skills matched your search.
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="card soft p-6 hover-lift">
            <div className="section-kicker">
              soft skills
            </div>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-zinc-600">
              {softSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            {softSkills.length === 0 ? (
              <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
                No soft skills matched your search.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
