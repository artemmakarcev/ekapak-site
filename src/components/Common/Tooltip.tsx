import { useState, type ReactNode } from "react";

export const Tooltip = ({ message, children }: { message: string; children: ReactNode }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex flex-col items-center group">
      <span className="flex justify-center" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </span>
      <div className={`absolute whitespace-nowrap bottom-full flex flex-col items-center xl:p-4 md:p-2 group-hover:flex ${!show ? "hidden" : null}`}>
        <p className="relative flex-grow-0 flex-shrink-0 w-48 z-10 p-2 text-xs leading-none text-black whitespace-normal bg-white shadow-lg rounded-md border border-neutral-300 info-manrope">
          {message}
        </p>
      </div>
    </div>
  );
};
