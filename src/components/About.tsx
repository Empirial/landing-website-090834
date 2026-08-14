export default function About() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            About Us
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Since 2015, we've evolved from a passionate team of engineers into a trusted partner for businesses navigating digital transformation. We craft scalable, user-centric solutions that turn ambition into measurable results.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Our mission is to empower organizations with technology that is reliable, intuitive, and built to last. We believe great software begins with listening, and we collaborate closely with every client to turn complex challenges into clear, actionable outcomes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
            <h3 className="text-lg font-semibold text-foreground">Integrity</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We act with transparency and honesty in every engagement, ensuring our clients always know what to expect and why.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
            <h3 className="text-lg font-semibold text-foreground">Excellence</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We hold ourselves to the highest standards of quality, continuously refining our craft to deliver solutions that exceed expectations.
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