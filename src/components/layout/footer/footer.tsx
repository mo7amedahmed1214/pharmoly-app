import FooterHeader from "./footer-header";
import FooterBody from "./footer-body";
import FooterEnd from "./footer-end";

export default function Footer() {
  return (
    <section className="bg-gray-50">
      {/* Footer header */}
      <FooterHeader />

      {/* Footer body */}
      <FooterBody />

      {/* Footer end */}
      <FooterEnd />
    </section>
  );
}
