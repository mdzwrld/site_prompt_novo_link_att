
"use client";

export function VSL() {
  return (
    <section id="vsl" className="w-full max-w-5xl mx-auto space-y-8 scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold font-headline text-center">Assista como funciona</h2>
      <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border bg-black">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/-UjJ1WCjt6I?autoplay=0"
          title="ImageElevate AI VSL"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}
