"use client";

type HeroProps = {
  title: string
  image: string
}

export default function Hero({ title, image }: HeroProps) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 className="hero-title">{title}</h1>
      </div>
    </section>
  );
}