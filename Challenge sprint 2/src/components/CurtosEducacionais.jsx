export default function CurtosEducacionais({ isOpen, onClose }) {
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
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Curtos Educacionais</h2>
        <p className="text-gray-600 text-sm mb-6">
          Aprenda sobre sua próxima consulta de Cardiologia.
        </p>

        {/* Video Player */}
        <div className="bg-black rounded-lg w-full aspect-video flex items-center justify-center mb-6">
          <button className="bg-white rounded-full p-4 hover:bg-gray-100 transition">
            <svg
              className="w-8 h-8 text-black ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        <p className="text-xs text-gray-500">
          Duração: 2 minutos
        </p>
      </div>
    </div>
  );
}
