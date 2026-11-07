import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/dormitoryData.ts';
import { useScrollReveal } from '../utils/useScrollReveal.ts';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, visible } = useScrollReveal({ threshold: 0.06 });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20 border-t border-line/80"
      id="alur-pendaftaran"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 sm:mb-10 reveal ${visible ? 'visible' : ''}`}>
        <div className="lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest block mb-1">
            Informasi Bagi Calon Warga &amp; Orang Tua
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-ink font-bold leading-tight tracking-tight">
            Tanya Jawab Seputar Kehidupan Asrama
          </h2>
        </div>
        <div className="lg:col-span-7 text-xs sm:text-sm text-ink-muted leading-relaxed">
          <p>
            Berikut beberapa pertanyaan mendasar yang kerap diajukan oleh calon mahasiswa baru, orang tua dari Jeneponto, maupun sesama perantau mengenai persyaratan tinggal, biaya fasilitas, dan kehidupan komunal di asrama.
          </p>
        </div>
      </div>

      <div
        className={`divide-y divide-line/70 border border-line/80 bg-white rounded-2xl p-5 sm:p-8 shadow-xs reveal delay-200 ${visible ? 'visible' : ''}`}
      >
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-4 sm:py-5 first:pt-1 last:pb-1">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between text-left gap-4 font-serif text-base sm:text-lg font-bold text-ink hover:text-forest active:text-forest transition-colors cursor-pointer"
              >
                <span className="leading-snug">{item.question}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-mono font-bold border transition-all duration-200 ${isOpen ? 'bg-forest text-paper border-forest' : 'bg-paper text-ink border-line'}`}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-xs sm:text-sm text-ink/80 leading-relaxed pr-2 sm:pr-8">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
