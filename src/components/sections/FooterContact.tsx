import { profile } from "@/data/profile";

export default function FooterContact() {
  return (
    <footer id="contact" className="border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <div className="text-2xl font-semibold tracking-tight">
              {profile.nameTH}
            </div>
            <div className="mt-2 text-sm text-zinc-600">{profile.role}</div>

            <p className="mt-6 text-sm leading-relaxed text-zinc-700">
              {profile.tagline}
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:text-right">
            <div className="text-[11px] tracking-[0.35em] uppercase text-zinc-500">
              contact
            </div>
            <div className="mt-4 space-y-2 text-sm text-zinc-700">
              <div>{profile.contact.email}</div>
              <div>{profile.contact.phone}</div>
              <div className="pt-2 flex gap-3 md:justify-end">
                <a className="underline underline-offset-4" href={profile.contact.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="underline underline-offset-4" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="underline underline-offset-4" href="/resume.pdf">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs tracking-[0.35em] uppercase text-zinc-400">
          © {new Date().getFullYear()} — editorial portfolio
        </div>
      </div>
    </footer>
  );
}
