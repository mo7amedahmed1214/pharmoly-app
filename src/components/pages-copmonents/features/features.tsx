import Image from "next/image";
import logo from "../../../../public/images/feat.png";
import { ArrowRight } from "lucide-react";

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-5 ">
      <div className=" rounded-xl overflow-hidden my-8 px-5 relative w-440 h-64">
        {/* Image */}
        <Image src={logo} alt="" fill />

        {/* Layer */}
        <div className=" absolute left-0 w-80 px-7 py-9 font-fredoke text-[#723C48]">
          <div>
            {/* Des */}
            <p className="font-medium text-sm tracking-4">Exclusive Discount</p>

            {/* Title */}
            <h2 className="text-2xl font-medium tracking-16">Playful Treasures for Happy Kids </h2>

            {/* Des */}
            <p className="text-sm font-sans tracking-16 ">
              Where Every Toy Sparks Creativity and Every Outfit Brings Smiles
            </p>
          </div>

          {/* Button */}
          <button className="text-[#723C48] tracking-16 font-medium text-sm flex items-center mt-5 font-sans gap-2">
            View more <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <div className=" rounded-xl overflow-hidden my-8 px-5 relative w-440 h-64">
        {/* Image */}
        <Image src={logo} alt="" fill />

        {/* Layer */}
        <div className=" absolute left-0 w-80 px-7 py-9 font-fredoke text-[#723C48]">
          <div>
            {/* Des */}
            <p className="font-medium text-sm tracking-4">Exclusive Discount</p>

            {/* Title */}
            <h2 className="text-2xl font-medium tracking-16">Playful Treasures for Happy Kids </h2>

            {/* Des */}
            <p className="text-sm font-sans tracking-16 ">
              Where Every Toy Sparks Creativity and Every Outfit Brings Smiles
            </p>
          </div>

          {/* Button */}
          <button className="text-[#723C48] tracking-16 font-medium text-sm flex items-center mt-5 font-sans gap-2">
            View more <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <div className=" rounded-xl overflow-hidden my-8 px-5 relative w-440 h-64">
        {/* Image */}
        <Image src={logo} alt="" fill />

        {/* Layer */}
        <div className=" absolute left-0 w-80 px-7 py-9 font-fredoke text-[#723C48]">
          <div>
            {/* Des */}
            <p className="font-medium text-sm tracking-4">Exclusive Discount</p>

            {/* Title */}
            <h2 className="text-2xl font-medium tracking-16">Playful Treasures for Happy Kids </h2>

            {/* Des */}
            <p className="text-sm font-sans tracking-16 ">
              Where Every Toy Sparks Creativity and Every Outfit Brings Smiles
            </p>
          </div>

          {/* Button */}
          <button className="text-[#723C48] tracking-16 font-medium text-sm flex items-center mt-5 font-sans gap-2">
            View more <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
