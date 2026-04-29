import React from 'react';

const ErrorMessage = ({ message = "No se pudieron cargar los datos de SpaceX." }) => {
  return (
    <div 
      role="alert" 
      className="flex flex-col items-center justify-center p-10 my-10 border border-red-500/50 bg-red-500/10 rounded-sm"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-12 w-12 text-red-500 mb-4" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <p className="text-white font-mono text-sm uppercase tracking-tighter text-center">
        Error de sistema: {message}
      </p>
      <button 
        onClick={() => window.location.reload()}
        className="mt-6 px-6 py-2 border border-white text-white text-xs uppercase hover:bg-white hover:text-black transition-all"
      >
        Reintentar conexión
      </button>
    </div>
  );
};

export default ErrorMessage;