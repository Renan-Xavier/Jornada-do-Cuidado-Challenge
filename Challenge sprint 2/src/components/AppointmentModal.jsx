import { useState } from 'react';

export default function AppointmentModal({ isOpen, onClose, onConfirm }) {
  const [especialidade, setEspecialidade] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  const especialidades = [
    'Cardiologia',
    'Dermatologia',
    'Oftalmologia',
    'Pediatria',
    'Psicologia',
    'Clínico Geral',
  ];

  const handleConfirm = () => {
    if (especialidade && data && hora) {
      onConfirm({ especialidade, data, hora });
      setEspecialidade('');
      setData('');
      setHora('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-3xl font-bold leading-none hover:bg-red-50 rounded-full w-8 h-8 flex items-center justify-center transition"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Agendar Consulta
        </h2>

        {/* Form */}
        <div className="space-y-4">
          {/* Especialidade */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Especialidade
            </label>
            <select
              value={especialidade}
              onChange={(e) => setEspecialidade(e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white"
            >
              <option value="">Selecione uma especialidade</option>
              {especialidades.map((esp) => (
                <option key={esp} value={esp}>
                  {esp}
                </option>
              ))}
            </select>
          </div>

          {/* Data */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Data
            </label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Hora */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Hora
            </label>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            disabled={!especialidade || !data || !hora}
            className={`flex-1 px-4 py-3 font-semibold rounded-lg transition ${
              especialidade && data && hora
                ? 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
