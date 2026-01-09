import Image from "next/image";
import { Pill } from "../ui/Pill";
import { profile } from "@/data/profile";

export default function HeroEditorial() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-10 pt-10">
      {/* BIG BACKGROUND WORD */}
      <div className="pointer-events-none absolute inset-x-0 top-20 -z-10 select-none overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative h-82.5">
            <div className="absolute left-0 top-12 text-[120px] font-black tracking-tight text-zinc-950/95 md:text-[170px]">
              GRO
            </div>
            <div className="absolute right-0 top-24 text-[120px] font-black tracking-tight text-zinc-950/95 md:text-[170px]">
              TÉA
            </div>

            <div className="absolute left-0 top-12 text-[120px] font-black tracking-tight text-transparent outline-text md:text-[170px]">
              GRO
            </div>
            <div className="absolute right-0 top-24 text-[120px] font-black tracking-tight text-transparent outline-text md:text-[170px]">
              TÉA
            </div>
          </div>
        </div>
      </div>

      {/* top mini nav */}
      <div className="flex items-center justify-between">
        <div className="text-xs tracking-[0.35em] uppercase text-zinc-500">
          portfolio / 2026
        </div>
        <div className="flex items-center gap-3">
          <Pill>versió</Pill>
          <Pill className="w-36 justify-center bg-gradient-to-r from-zinc-200 via-white to-zinc-200 text-zinc-700">
            —
          </Pill>
          <Pill>thérius</Pill>
        </div>
      </div>

      {/* grid */}
      <div className="mt-10 grid grid-cols-12 gap-6">
        {/* Left: About */}
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center justify-between">
            <Pill className="text-xs">2026</Pill>
          </div>

          <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-900" />
              <p className="text-xs tracking-[0.25em] uppercase text-zinc-600">
                about me
              </p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-700">
              {profile.tagline}
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-2 text-xs font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
              >
                Projects
              </a>
            </div>

            <div className="mt-8 text-[11px] tracking-[0.3em] uppercase text-zinc-400">
              web developer
            </div>
          </div>
        </div>

        {/* Center: ID Card */}
        <div className="col-span-12 md:col-span-4 md:pt-6">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="mx-auto h-10 w-44 rounded-full bg-gradient-to-r from-zinc-300 via-white to-zinc-300 shadow-inner" />
            <div className="mx-auto -mt-2 h-10 w-2 rounded-full bg-zinc-900/80" />

            <div className="relative mt-3 rounded-[28px] bg-zinc-950 p-6 text-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-0 rounded-[28px] opacity-[0.08] pattern-bg" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="text-xs tracking-[0.35em] uppercase text-white/70">
                    ÒFC.
                  </div>
                  <div className="text-xs text-white/70">02</div>
                </div>

                <div className="mt-4 text-[10px] tracking-[0.35em] uppercase text-white/60">
                  portfolio id card
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-white/20">
                    <Image
                      src="/images/CV_AITTHIKON (2).png"
                      alt="avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold tracking-tight">
                      {profile.nameTH}
                    </div>
                    <div className="text-xs text-white/70">{profile.role}</div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-[10px] tracking-[0.35em] uppercase text-white/50">
                    focus
                  </div>
                  <div className="mt-2 text-xs text-white/80">
                    Full-stack • UX/UI • REST API • Database
                  </div>
                </div>

                <div className="mt-6">
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="mt-2 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-white/50">
                    <span>thamasat university</span>
                    <span>cs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              <Pill className="bg-zinc-50">work</Pill>
              <Pill className="bg-zinc-50">projects</Pill>
              <Pill className="bg-zinc-50">skills</Pill>
            </div>
          </div>
        </div>

        {/* Right: Contact */}
        <div className="col-span-12 md:col-span-4 md:pt-6">


          <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="text-[11px] tracking-[0.35em] uppercase text-zinc-500">
              contact
            </div>

            <div className="mt-4 space-y-3 text-sm text-zinc-800">
              <Line label="Phone" value={profile.contact.phone} />
              <Line label="Email" value={profile.contact.email} />
              <Line label="GitHub" value={profile.contact.github} link />
              <Line label="LinkedIn" value={profile.contact.linkedin} link />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-[11px] tracking-[0.3em] uppercase text-zinc-400">
                open to opportunities
              </div>
              <a
                href={`mailto:${profile.contact.email}`}
                className="h-9 w-9 rounded-full bg-zinc-950 text-white shadow-sm hover:bg-zinc-900 grid place-items-center"
                aria-label="Email"
              >
                ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({
  label,
  value,
  link,
}: {
  label: string;
  value: string;
  link?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="text-xs text-zinc-500">{label}</div>
      {link ? (
        <a
          className="text-right text-sm font-medium text-zinc-900 underline decoration-zinc-200 underline-offset-4 hover:decoration-zinc-400"
          href={value}
          target="_blank"
          rel="noreferrer"
        >
          {value.replace("https://", "")}
        </a>
      ) : (
        <div className="text-right text-sm font-medium">{value}</div>
      )}
    </div>
  );
}
