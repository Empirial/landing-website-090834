import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center rounded-lg border border-border bg-card p-8 text-card-foreground shadow-sm sm:p-10">
            <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
            <p className="mt-6 text-xl font-medium leading-relaxed text-card-foreground">
              {"Partnering with this team transformed our entire digital presence. Their strategic approach and flawless execution boosted our conversions by 240% within the first quarter, and the new design finally reflects the premium quality of our services."}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                alt="Sarah Mitchell"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  {"Sarah Mitchell"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {"CEO, Mitchell & Co."}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
              <p className="text-sm leading-relaxed text-card-foreground">
                {"The process was seamless from start to finish. They listened to our needs, delivered ahead of schedule, and the results have been nothing short of outstanding. Truly a game-changer for our business."}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                  alt="James Rodriguez"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {"James Rodriguez"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {"Marketing Director, BrightPath"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
              <p className="text-sm leading-relaxed text-card-foreground">
                {"I was skeptical at first, but their team exceeded every expectation. The attention to detail and creative problem-solving made all the difference. Our customers constantly compliment the new experience."}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                  alt="Emily Chen"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {"Emily Chen"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {"Founder, Lumen Studio"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}