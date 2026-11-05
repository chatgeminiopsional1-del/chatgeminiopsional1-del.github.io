import React, { useEffect } from 'react';

export interface ToastItem {
  id: string;
  message: string;
  type?: 'success' | 'info';
}

interface ToastProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
    >
      {toasts.map((toast) => (
        <ToastCard key={toast.id} toast={toast} onDismiss={() => onDismiss(toast.id)} />
      ))}
    </div>
  );
};

const ToastCard: React.FC<{ toast: ToastItem; onDismiss: () => void }> = ({ toast, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div
      role="status"
      className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 bg-[#0c261e] text-[#f7f4ed] rounded-xl shadow-xl border border-white/10 animate-in fade-in slide-in-from-bottom-2 duration-200"
      style={{
        transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease-out',
      }}
    >
      <div className="flex items-center gap-2.5">
        <span className="w-5 h-5 rounded-full bg-[#baeed9] text-[#0c261e] flex items-center justify-center shrink-0">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-xs font-semibold leading-snug">{toast.message}</span>
      </div>
      <button
        type="button"
        onClick={onDismiss}
        className="text-[#f7f4ed]/60 hover:text-white p-1 rounded transition-colors cursor-pointer"
        aria-label="Tutup notifikasi"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};
