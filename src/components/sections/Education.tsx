import { profile } from "@/data/profile";
import { SectionTitle } from "../ui/SectionTitle";
import Image from "next/image";

export default function Education() {
  const e = profile.education;

  return (
    <section id="education" className="px-0 py-8 sm:py-10 md:py-14">
      <SectionTitle kicker="background" title="การศึกษา" />

      <div className="card soft mt-6 sm:mt-8 p-4 sm:p-6 hover-lift">
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-12 md:col-span-1">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full ring-1 ring-black/10">
              <Image
                src="/images/tulogo.png"
                alt="avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="text-base sm:text-xl font-semibold tracking-tight text-zinc-900 break-words">
              {e.degree} • {e.university}
            </div>
            <div className="mt-2 text-xs sm:text-sm text-zinc-600">
              {e.faculty} • {e.major}
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <div className="section-kicker">
              graduation year
            </div>
            <div className="mt-2 text-base sm:text-lg font-semibold text-zinc-900">{e.year}</div>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2">
          <a href="#projects" className="btn btn-outline focus-ring">
            Academic Projects
          </a>
        </div>
      </div>
    </section>
  );
}
