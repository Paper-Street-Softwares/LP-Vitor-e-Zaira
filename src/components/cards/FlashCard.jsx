import React from "react";

export default function FlashCard({ icon, title, text }) {
  return (
    // <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 transition hover:-translate-y-1 hover:shadow-lg">
    //   <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#f7f4ee] mb-4">
    //     {icon}
    //   </div>
    //   <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    //   <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    // </div>
    <div className="bg-bgSectionDark rounded-2xl border-t-0 border-l-2 border-b-2 border-r-0 border-primary p-4 transition max-w-[350px] desktop1:max-w-[290px] ">
      <div className="flex gap-2 items-center mb-4">
        {" "}
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary ">
          {icon}
        </div>
        <h3 className="text-title1 font-semibold text-white/80">{title}</h3>
      </div>
      <p
        className="text-white/80 text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
