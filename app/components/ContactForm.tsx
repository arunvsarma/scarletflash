"use client";

const afacad = "var(--font-afacad), sans-serif";
const outfit = "var(--font-outfit), sans-serif";

function FormField({
  label,
  type = "text",
  fullWidth = false,
  textarea = false,
}: {
  label: string;
  type?: string;
  fullWidth?: boolean;
  textarea?: boolean;
}) {
  return (
    <div
      className={`field-wrap relative bg-[#1a1a1a] ${textarea ? "h-[136px]" : "h-12"} ${fullWidth ? "sm:col-span-2" : ""}`}
    >
      <label
        className="field-label absolute left-4 top-4 font-semibold text-xs text-[#777] tracking-[1.82px] uppercase pointer-events-none z-10"
        style={{ fontFamily: afacad }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          className="absolute inset-0 w-full h-full bg-transparent resize-none px-4 pt-8 pb-3 text-white text-sm outline-none"
          style={{ fontFamily: outfit }}
          aria-label={label}
        />
      ) : (
        <input
          type={type}
          className="absolute inset-0 w-full h-full bg-transparent px-4 text-white text-sm outline-none"
          style={{ fontFamily: outfit }}
          aria-label={label}
        />
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Contact form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="YOUR NAME" />
        <FormField label="E-MAIL" type="email" />
      </div>
      <FormField label="COMPANY/PROJECT" fullWidth />
      <FormField label="SERVICE INTEREST" fullWidth />
      <FormField label="TELL US ABOUT THE PROJECT" fullWidth textarea />

      <div className="flex justify-end mt-2">
        <button
          type="submit"
          className="relative inline-flex items-center justify-center gap-4 h-10 overflow-hidden bg-[#c8102e] px-6 font-semibold text-base text-white tracking-[2.08px] whitespace-nowrap hover:bg-[#a00d25] transition-colors cursor-pointer"
          style={{ fontFamily: afacad }}
        >
          <span style={{ width: 144 }}>SEND A MESSAGE</span>
          <i className="fa-solid fa-arrow-right text-base" />
        </button>
      </div>
    </form>
  );
}
