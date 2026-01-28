import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ph from '@/assets/me2u.png';
import srit from '@/assets/SRIT-logo.png';

const hostpartners = [
  {
    name: 'SRIT',
    logo: srit,
    link: 'https://www.srit.org/',
  },
];

const partners = [
  {
    name: 'Me2u Designs',
    logo: ph,
    link: 'https://share.google/ZrRcuxayheXwqekCN',
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* MAIN SPLIT SECTION */}
      <section className="pt-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — HOSTING PARTNER */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center lg:text-left">
              Our Hosting Partner
            </h1>
            <p className="text-gray-400 text-lg mb-6 text-center lg:text-left">
              We offer our sincere thanks to Sri Ramakrishna Institute of Technology for being our hosting partner
            </p>

            <div className="grid place-items-center lg:place-items-start">
              {hostpartners.map((hostpartner, index) => (
                <a
                  key={index}
                  href={hostpartner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[700px]"
                >
                  <div
                    className="
                      bg-neutral-900
                      rounded-2xl
                      border border-white/10
                      hover:border-white/30
                      px-6 py-6
                      flex flex-col sm:flex-row
                      items-center gap-6 sm:gap-10
                      h-auto
                      min-h-[160px] sm:min-h-[200px]
                      transition-all duration-300
                      cursor-pointer
                    "
                  >
                    <img
                      src={hostpartner.logo}
                      alt={hostpartner.name}
                      className="
                        h-[80px] sm:h-[120px]
                        w-auto
                        object-contain
                        flex-shrink-0
                      "
                    />

                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        Sri Ramakrishna Institute of Technology
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Official Hosting Partner
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — PARTNERS */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center lg:text-left">
              Our Partners
            </h1>
            <p className="text-gray-400 text-lg mb-6 text-center lg:text-left">
              We collaborate with forward-thinking organizations that help bring ideas worth spreading to life.
            </p>

            <div className="grid place-items-center lg:place-items-start">
              {partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[700px]"
                >
                  <div
                    className="
                      bg-neutral-900
                      rounded-2xl
                      border border-white/10
                      hover:border-white/30
                      px-6 py-6
                      flex items-center justify-center
                      h-auto
                      min-h-[160px] sm:min-h-[200px]
                      transition-all duration-300
                      grayscale hover:grayscale-0
                      cursor-pointer
                    "
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="
                        w-full
                        max-w-[220px] sm:max-w-[400px]
                        h-[100px] sm:h-[150px]
                        object-contain
                        opacity-80 hover:opacity-100
                        transition-opacity
                      "
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner With Us
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
          Join TEDxSRIT as a partner and connect your brand with innovation,
          creativity, and meaningful conversations.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdPEwXesUAyAoxYeSaxZooOykX298rWfcOP-jQboq5MfojI-w/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="
              bg-red-600 hover:bg-red-700
              text-white
              px-10 py-3
              rounded-md
              font-semibold
              transition-all duration-300
            "
          >
            Partner with Us
          </Button>
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
