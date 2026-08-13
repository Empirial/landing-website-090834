export default function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:py-28 lg:py-32">
        <span className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Welcome to Nexora
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Empowering Your Vision with Intelligent Solutions
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
          We craft innovative strategies that drive growth, efficiency, and lasting success for your business.
        </p>
      </div>
    </section>
  );
}