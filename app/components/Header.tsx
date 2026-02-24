export default function Header() {
  return (
    <header className="w-full bg-black">
      <div className="flex h-24 items-center justify-between px-8 pt-4 pb-2">
        {/* Logo */}
        <div className="flex items-center w-[189px]">
          <div
            className="relative inline-grid leading-[0] place-items-start"
            style={{
              gridTemplateColumns: "max-content",
              gridTemplateRows: "max-content",
            }}
          >
            {/* Logo text: SCARLET + F ASH (L replaced by lightning bolt) */}
            <p
              className="[grid-column:1] [grid-row:1] font-[var(--font-afacad)] font-bold text-[32px] leading-[0] mt-px"
              style={{ fontFamily: "var(--font-afacad), sans-serif" }}
            >
              <span className="leading-normal text-[#f22424]">SCARLET</span>
              <span className="leading-normal text-white tracking-[1.28px]">
                F ASH
              </span>
            </p>
            {/* Lightning bolt SVG overlaid on top of text at the "L" position */}
            <div className="[grid-column:1] [grid-row:1] h-[44px] w-[42px] ml-[111px] mt-0 relative">
              <img
                alt="lightning bolt"
                className="absolute block max-w-none w-full h-full"
                src="/lightning-bolt.svg"
              />
            </div>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex gap-6 items-center">
          {["SERVICES", "PROCESS", "CONTACT"].map((item) => (
            <button
              key={item}
              className="flex h-6 items-center px-4 py-2 font-bold text-[14px] text-[#777777] tracking-[0.28px] whitespace-nowrap bg-transparent cursor-pointer"
              style={{ fontFamily: "var(--font-afacad), sans-serif" }}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center justify-end w-[184px]">
          <button
            className="relative flex flex-1 gap-[10px] h-10 items-center justify-end overflow-clip px-4 py-2 border border-[#c8102e] font-semibold text-[16px] text-[#c8102e] tracking-[2.8px] whitespace-nowrap bg-transparent cursor-pointer"
            style={{ fontFamily: "var(--font-afacad), sans-serif" }}
          >
            START A PROJECT
            {/* Left red accent bar */}
            <div className="absolute bg-[#c8102e] h-10 left-[-1px] top-[-1px] w-[3px]" />
          </button>
        </div>
      </div>
    </header>
  );
}
