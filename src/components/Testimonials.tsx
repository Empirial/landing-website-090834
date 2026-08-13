import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center rounded-lg border border-border bg-card p-8 text-card-foreground shadow-sm sm:p-10">
            <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
            <p className="mt-6 text-xl font-medium leading-relaxed text-card-foreground">
              {"Partnering with this team transformed our operational efficiency. Their strategic guidance and reliable execution exceeded every expectation we had."}
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
                  {"Chief Operating Officer, Meridian Logistics"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
              <p className="text-sm leading-relaxed text-card-foreground">
                {"The level of professionalism and insight they brought to our project was outstanding. We saw measurable results within the first quarter."}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                  alt="James Chen"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {"James Chen"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {"VP of Finance, Apex Manufacturing"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
              <p className="text-sm leading-relaxed text-card-foreground">
                {"Their team consistently delivers on time and with clarity. It's rare to find a partner this committed to our long-term success."}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                  alt="Elena Rodriguez"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {"Elena Rodriguez"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {"Director of Strategy, Northbridge Consulting"}
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