export default function ModalRemarcar({ isOpen, onClose, onConfirm }) {
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

        {/* Icon */}
        <div className="text-center mb-4">
          <div className="text-5xl">📅</div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Remarcar Consulta
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Você tem certeza que deseja remarcar sua consulta?
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
          >
            Sim, Remarcar
          </button>
        </div>
      </div>
    </div>
  );
}
