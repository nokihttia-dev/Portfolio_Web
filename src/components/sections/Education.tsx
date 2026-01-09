import { profile } from "@/data/profile";
import { SectionTitle } from "../ui/SectionTitle";
import Image from "next/image";

export default function Education() {
  const e = profile.education;

  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-14">
      <SectionTitle kicker="background" title="การศึกษา" />

      <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-12 md:col-span-1">
            <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-white/20">
              <Image
                src="/images/tulogo.png"
                alt="avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="text-xl font-semibold tracking-tight">
              {e.degree} • {e.university}
            </div>
            <div className="mt-2 text-sm text-zinc-700">
              {e.faculty} • {e.major}
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <div className="text-[11px] tracking-[0.35em] uppercase text-zinc-500">
              graduation year
            </div>
            <div className="mt-2 text-lg font-semibold">{e.year}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
