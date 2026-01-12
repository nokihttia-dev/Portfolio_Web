import { profile } from "@/data/profile";

export default function FooterContact() {
  return (
    <footer id="contact" className="mt-10 sm:mt-12">
      <div className="px-0 pb-10 sm:pb-12">
        <div className="card soft grid grid-cols-12 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
          <div className="col-span-12 md:col-span-6">
            <div className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
              {profile.nameTH}
            </div>
            <div className="mt-2 text-xs sm:text-sm text-zinc-600">{profile.role}</div>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm leading-relaxed text-zinc-600 break-words">
              {profile.contact.location}
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:text-right">
            <div className="section-kicker">
              contact
            </div>
            <div className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm text-zinc-600">
              <div className="break-all">{profile.contact.email}</div>
              <div>{profile.contact.phone}</div>
              <div className="pt-1 sm:pt-2 flex flex-wrap gap-3 md:justify-end">
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

        <div className="mt-6 sm:mt-8 text-[0.6rem] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase text-zinc-500">
          © {new Date().getFullYear()} — editorial portfolio
        </div>
      </div>
    </footer>
  );
}
