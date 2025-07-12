import FooterBodyLeft from "./footer-body-left";
import FooterBodyRight from "./footer-body-right";

export default function FooterBody() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-b-gray-200 flex items-center gap-16">
      {/* Left section */}
      <FooterBodyLeft />

      {/* Right section */}
      <FooterBodyRight />
    </div>
  );
}
