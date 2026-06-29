export default function Footer() {
  return (
    <footer className="border-t border-rose/20 py-10">
      <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-ink/40">
          City Center, GF, G.I.D.C, Ankleshwar &mdash; 393001
        </p>
        <div className="flex items-center gap-6 font-body text-sm text-ink/40">
          <a
            href="tel:+918488945932"
            className="hover:text-ink transition-colors"
          >
            +91 84889 45932
          </a>
          <span className="text-rose/40">|</span>
          <a
            href="https://instagram.com/berrys_cafe__"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            @berrys_cafe__
          </a>
        </div>
      </div>
    </footer>
  );
}
