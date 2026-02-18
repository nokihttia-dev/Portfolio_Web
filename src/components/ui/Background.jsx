import React from 'react';


export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-neutral-950">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.08)_1px,transparent_1px)] bg-size-[40px_40px] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_5%,rgba(34,197,94,0.18),transparent_68%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_70%_72%,rgba(16,185,129,0.09),transparent_72%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0)_24%,rgba(0,0,0,0)_78%,rgba(0,0,0,0.28)_100%)]" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
