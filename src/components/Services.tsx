export default function Services() {
  const services = [
    {
      image: "https://placehold.co/960x640/e2e8f0/475569?text=services",
      title: "Strategic Consulting",
      description: "Our senior advisors work alongside your leadership team to identify growth opportunities, streamline operations, and craft data-driven roadmaps that align with your long-term vision.",
    },
    {
      image: "https://placehold.co/960x640/e2e8f0/475569?text=services",
      title: "Digital Transformation",
      description: "We modernize your technology stack, automate core processes, and integrate intelligent analytics to boost efficiency, agility, and customer experience across every touchpoint.",
    },
    {
      image: "https://placehold.co/960x640/e2e8f0/475569?text=services",
      title: "Managed IT & Support",
      description: "From 24/7 monitoring to proactive maintenance and rapid incident response, our certified engineers keep your systems secure, resilient, and always performing at their best.",
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Our Core Services
        </h2>

        <div className="mt-12 flex flex-col gap-16 sm:mt-16 lg:gap-24">
          {services.map(({ image, title, description }, index) => (
            <div
              key={title}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div className={index % 2 === 1 ? "lg:order-last" : ""}>
                <img
                  src={image}
                  alt={title}
                  className="aspect-[4/3] w-full rounded-lg border border-border object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:text-right" : ""}>
                <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">{title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}