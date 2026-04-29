import { useRef } from 'react';
import Modal from '../components/Modal';
import toast from 'react-hot-toast';

const About = () => {
  const modalRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    modalRef.current.showModal();
  };

  const handleConfirm = () => {
    modalRef.current.close();
    toast.success("Mensaje enviado con éxito");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-slate-900 p-6 rounded-xl border border-white/10">
        
        <div>
          <label className="block mb-1 font-bold" htmlFor="name">Nombre:</label>
          <input 
            type="text" 
            id="name" 
            className="w-full p-2 rounded bg-slate-800 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-bold" htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 rounded bg-slate-800 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-bold" htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 rounded bg-slate-800 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          ></textarea>
        </div>
        
        <button type="submit" className="w-full bg-white text-black py-2 rounded font-bold">
          Enviar Mensaje
        </button>
      </form>

      <Modal 
        ref={modalRef} 
        title="Confirmación de Envío"
        onConfirm={handleConfirm}
      >
        ¿Estás seguro de que deseas enviar esta información a SpaceX? Esta acción no se puede deshacer.
      </Modal>
    </div>
  );
};

export default About;