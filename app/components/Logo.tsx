import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4"
    >

      <svg
        width="62"
        height="66"
        viewBox="0 0 58 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* Larger Diamond / Gem Outline */}
        <path
          d="M5 15L16 3H42L53 15L29 58L5 15Z"
          stroke="#c28b3c"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Top Gem Line */}
        <path
          d="M5 15H53"
          stroke="#c28b3c"
          strokeWidth="2"
        />

        {/* Inner Gem Details */}
        <path
          d="M16 3L22 15L29 58L36 15L42 3"
          stroke="#c28b3c"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* ESP Initials */}
        <text
          x="29"
          y="28"
          textAnchor="middle"
          fill="#0f3d5e"
          fontSize="13"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
          letterSpacing="1"
        >
          ESP
        </text>

        {/* Gold Bottom Line */}
        <path
          d="M14 60H44"
          stroke="#c28b3c"
          strokeWidth="2"
          strokeLinecap="round"
        />

      </svg>



      <div className="leading-none">

        <div
          className="
            text-2xl
            font-extrabold
            tracking-tight
            text-[#0f3d5e]
            whitespace-nowrap
          "
        >
          Elite Source Point
        </div>

        <div
          className="
            mt-2
            text-xs
            font-medium
            uppercase
            tracking-[0.25em]
            text-[#c28b3c]
          "
        >
          Procurement Support
        </div>

      </div>

    </Link>
  );
}