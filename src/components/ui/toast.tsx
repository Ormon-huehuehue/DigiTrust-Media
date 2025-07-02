import * as React from "react";

export type ToastProps = {
  id?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

export type ToastActionElement = React.ReactElement<{ onClick?: () => void }>;

export function Toaster({ toasts, dismiss }: {
  toasts: ToastProps[];
  dismiss: (id?: string) => void;
}) {
  return (
    <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-4 items-end font-sans">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`w-80 bg-white/95 border border-blue-100 shadow-xl rounded-xl px-5 py-4 transition-all duration-300 ${toast.open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <div className="flex items-start gap-3">
            <div className="flex-1">
              {toast.title && (
                <div className="text-blue-900 font-semibold text-base mb-1">{toast.title}</div>
              )}
              {toast.description && (
                <div className="text-blue-700 text-sm leading-snug">{toast.description}</div>
              )}
            </div>
            <button
              onClick={() => {
                toast.onOpenChange?.(false);
                dismiss(toast.id);
              }}
              className="ml-2 text-blue-400 hover:text-blue-600 transition-colors rounded-full p-1 focus:outline-none"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L14 14M14 6L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          {toast.action && (
            <div className="mt-3">{toast.action}</div>
          )}
        </div>
      ))}
    </div>
  );
} 