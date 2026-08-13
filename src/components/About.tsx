export default function About() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            About Us
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Founded in 2015, our company has grown from a small team of passionate engineers into a trusted partner for businesses seeking digital transformation. We specialize in crafting scalable, user-centric solutions that bridge the gap between ambition and execution.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Our mission is simple: to empower organizations with technology that is reliable, intuitive, and built to last. We believe that great software starts with listening, and we work hand-in-hand with every client to turn complex challenges into clear, measurable outcomes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
            <h3 className="text-lg font-semibold text-foreground">Integrity</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We operate with transparency and honesty in every engagement, ensuring that our clients always know what to expect and why.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
            <h3 className="text-lg font-semibold text-foreground">Excellence</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We hold ourselves to the highest standards of quality, constantly refining our craft to deliver solutions that exceed expectations.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
            <h3 className="text-lg font-semibold text-foreground">Partnership</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We treat our clients as collaborators, not transactions, investing in long-term relationships built on trust, respect, and shared success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}