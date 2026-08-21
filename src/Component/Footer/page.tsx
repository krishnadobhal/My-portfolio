import Link from "next/link";

const ELSEWHERE = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/krishnadobhal/" },
  { label: "GitHub", href: "https://github.com/krishnadobhal/" },
  { label: "LeetCode", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-amber text-ink min-h-[92vh]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-label">Get in touch</div>
        <h2 className="text-display mt-6 max-w-3xl [overflow-wrap:anywhere]">
          Let&apos;s build something solid.
        </h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          <div>
            <div className="text-label text-ink/60">Email</div>
            <a
              href="mailto:krishnadobhal234@gmail.com"
              className="text-body mt-2 block break-words hover:underline"
            >
              krishnadobhal234@gmail.com
            </a>
          </div>
          <div>
            <div className="text-label text-ink/60">Phone</div>
            <a href="tel:+918882799710" className="text-body mt-2 block hover:underline">
              +91 88827 99710
            </a>
          </div>
          <div>
            <div className="text-label text-ink/60">Elsewhere</div>
            <div className="mt-2 flex flex-col gap-1">
              {ELSEWHERE.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="text-label">Krishna Dobhal</span>
          <span className="text-label text-ink/60">2026</span>
        </div>
      </div>
    </footer>
  );
}
