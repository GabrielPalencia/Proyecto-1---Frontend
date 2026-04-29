import { forwardRef } from 'react';

const Modal = forwardRef(({ title, children, onConfirm }, ref) => {
  return (
    <dialog
      ref={ref}
      className="bg-slate-900 text-white p-6 rounded-lg border border-white/20 backdrop:backdrop-blur-sm fixed inset-0 m-auto max-w-sm w-full"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold">{title}</h3>
        
        <button 
          onClick={() => ref.current.close()}
          className="text-gray-500 hover:text-white text-xs px-1"
          type="button"
        >
          x
        </button>
      </div>
      
      <div className="text-sm text-gray-400 mb-6">
        {children}
      </div>

      <button
        onClick={onConfirm}
        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-2 rounded font-medium transition-colors"
      >
        Aceptar y cerrar
      </button>
    </dialog>
  );
});

Modal.displayName = 'Modal';
export default Modal;