import { profile } from "@/data/profile";

export default function FooterContact() {
  return (
    <footer id="contact" className="mt-12">
      <div className="px-0 pb-12">
        <div className="card soft grid grid-cols-12 gap-6 p-6 md:p-8">
          <div className="col-span-12 md:col-span-6">
            <div className="text-2xl font-semibold tracking-tight text-zinc-900">
              {profile.nameTH}
            </div>
            <div className="mt-2 text-sm text-zinc-600">{profile.role}</div>

            <p className="mt-6 text-sm leading-relaxed text-zinc-600">
              {profile.contact.location}
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:text-right">
            <div className="section-kicker">
              contact
            </div>
            <div className="mt-4 space-y-2 text-sm text-zinc-600">
              <div>{profile.contact.email}</div>
              <div>{profile.contact.phone}</div>
              <div className="pt-2 flex flex-wrap gap-3 md:justify-end">
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

        <div className="mt-8 text-xs tracking-[0.35em] uppercase text-zinc-500">
          © {new Date().getFullYear()} — editorial portfolio
        </div>
      </div>
    </footer>
  );
}
