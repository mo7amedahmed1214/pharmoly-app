export default function FooterBodyLeft() {
  return (
    <div className="w-440 h-fit space-y-4">
      {/* Title */}
      <h3 className="text-base font-semibold tracking-4">Do You Need Help ?</h3>

      {/* Description */}
      <p className="text-sm tracking-16 text-gray-500">
        Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.
      </p>

      {/* Info */}
      <div className="space-y-1">
        {/* Phone */}
        <h3 className="text-2xl font-semibold tracking-16 text-blue-500 ">0 800 300-353</h3>

        {/* Des */}
        <p className="text-sm tracking-16 text-gray-500">
          Free from fixed and mobile phones in USA.
        </p>
      </div>

      {/* Email */}
      <p className="text-sm tracking-16 text-gray-500">
        Email: <span className="text-blue-500 font-semibold ">info@example.com</span>
      </p>

      {/* Text */}
      <div className="tracking-16 text-sm text-gray-500">
        {/* Text */}
        <p> Call Center hours</p>

        {/* Time */}
        <span className="font-semibold ">Mon-Sun 09:00-19:00</span>
      </div>
    </div>
  );
}
