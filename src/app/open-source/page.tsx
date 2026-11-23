import Navbar from "@/Component/Navbar/page";
import Footer from "@/Component/Footer/page";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ShaderBackground } from "@/components/ui/icey-night-shards";
import { TechTag } from "@/components/ui/tech-tag";

export const metadata = { title: "Open Source — Krishna Dobhal" };

// Liquid-marble variant of the hero shader: heavy domain warp.
const LIQUID = {
  seed: 2.0,
  scale: 2.4,
  intensity: 0.7,
  warp: 1.3,
  detail: 1.6,
  blur: 0,
  grain: 0.25,
  contrast: 1.1,
  brightness: -0.7,
  vignette: 0.75,
  drift: 0.3,
};

const REPO = "https://github.com";

// Top 10 merged PRs to other people's repos, picked by repo reach and scope.
const CONTRIBUTIONS = [
  {
    repo: "thedotmack/claude-mem",
    stars: "119k",
    pr: 6180,
    title: "Load recalled memory at session start for Grok Build",
    description:
      "Wired claude-mem's recalled context into Grok Build sessions through a rules file, so memory is present from the first turn.",
    tags: ["TypeScript", "Agents", "Memory"],
  },
  {
    repo: "thedotmack/claude-mem",
    stars: "119k",
    pr: 6284,
    title: "MCP-only install for Hermes Desktop",
    description:
      "Added a setup path for Hermes Desktop that installs claude-mem purely over MCP, with no hooks required.",
    tags: ["TypeScript", "MCP", "Installer"],
  },
  {
    repo: "thedotmack/claude-mem",
    stars: "119k",
    pr: 6286,
    title: "VS Code Copilot setup via MCP installer",
    description:
      "Brought VS Code Copilot into the supported agents with a copilot-vscode MCP installer.",
    tags: ["TypeScript", "MCP", "Copilot"],
  },
  {
    repo: "pipeshub-ai/pipeshub-ai",
    stars: "4k",
    pr: 6198,
    title: "Add Apollo to the MCP server catalog",
    description:
      "Registered Apollo as a connectable server in PipesHub's MCP catalog.",
    tags: ["MCP", "Integrations"],
  },
  {
    repo: "milind-soni/OpenMausBot",
    stars: "27k",
    pr: 6656,
    title: "Steer a running Grok turn; end background work that wakes a turn",
    description:
      "Follow-up messages now steer a turn already in flight, and background work that would wake a turn is shut down cleanly.",
    tags: ["TypeScript", "Grok", "Concurrency"],
  },
  {
    repo: "milind-soni/OpenMausBot",
    stars: "27k",
    pr: 6480,
    title: "Image generation with Higgsfield via MCP sign-in",
    description:
      "Let bots make images with Higgsfield, authenticating through its MCP sign-in flow.",
    tags: ["TypeScript", "MCP", "Images"],
  },
  {
    repo: "milind-soni/OpenMausBot",
    stars: "27k",
    pr: 5880,
    title: "Devin as a built-in engine over ACP",
    description:
      "Added Devin as a first-class engine speaking the Agent Client Protocol; later extended it with mid-turn steering (#6430).",
    tags: ["TypeScript", "ACP", "Agents"],
  },
  {
    repo: "milind-soni/OpenMausBot",
    stars: "27k",
    pr: 5150,
    title: "Custom decision-model endpoint (System One or OpenAI)",
    description:
      "The decision model can now point at a custom endpoint that speaks System One or the OpenAI protocol.",
    tags: ["TypeScript", "LLM", "API"],
  },
  {
    repo: "milind-soni/OpenMausBot",
    stars: "27k",
    pr: 6247,
    title: "DeepSeek voice: spoken replies and dictation",
    description:
      "DeepSeek reads replies aloud in the Stella or Tide voices and transcribes dictation.",
    tags: ["TypeScript", "Voice", "DeepSeek"],
  },
  {
    repo: "milind-soni/OpenMausBot",
    stars: "27k",
    pr: 5723,
    title: "Stage Antigravity bot skills inside the turn workspace",
    description:
      "Fixed skills being staged outside the turn's workspace so Antigravity bots can actually find them.",
    tags: ["TypeScript", "Antigravity", "Bug fix"],
  },
];

export default function OpenSource() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Navbar />
      <main className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] [mask-image:linear-gradient(to_bottom,#000_30%,transparent)]"
        >
          <ShaderBackground overrides={LIQUID} className="h-full w-full" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Open Source</Eyebrow>
          <h1 className="text-display mt-6 max-w-3xl">
            Code I&apos;ve shipped into other people&apos;s projects.
          </h1>
          <p className="text-body mt-8 max-w-2xl text-paper/85">
            Ten merged pull requests, picked from 40+.{" "}
            <a
              href={`${REPO}/krishnadobhal/`}
              className="text-amber hover:underline"
            >
              Full list on GitHub
            </a>
            .
          </p>
          <div className="mt-20">
            {CONTRIBUTIONS.map((c, i) => (
              <div
                key={c.pr}
                className="grid gap-4 border-t border-line py-10 md:grid-cols-12"
              >
                <div className="text-label text-amber md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-h1">{c.title}</h3>
                  <p className="text-body mt-4 max-w-2xl text-paper/85">
                    {c.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {c.tags.map((t) => (
                      <TechTag key={t}>{t}</TechTag>
                    ))}
                  </div>
                </div>
                <a
                  href={`${REPO}/${c.repo}/pull/${c.pr}`}
                  className="text-nav text-paper/60 hover:text-amber md:col-span-3 md:text-right"
                >
                  {c.repo} #{c.pr}
                  <br />★ {c.stars}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
