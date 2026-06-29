export default function Footer() {
  return (
    <footer className="bg-muted border-t border-rose/20 py-12">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
        <div>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-berry mb-3" />
          <p className="font-body text-sm text-stone">
            City Center, GF, G.I.D.C
            <br />
            Ankleshwar &mdash; 393001
          </p>
        </div>
        <div>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-berry mb-3" />
          <br />
          <a
            href="tel:+918488945932"
            className="font-body text-sm text-stone hover:text-berry transition-colors duration-300"
          >
            +91 84889 45932
          </a>
        </div>
        <div>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-berry mb-3" />
          <br />
          <a
            href="https://instagram.com/berrys_cafe__"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-stone hover:text-berry transition-colors duration-300"
          >
            @berrys_cafe__
          </a>
        </div>
      </div>
    </footer>
  );
}
