export default function CongratulationsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ✕
        </button>

        {/* Icon */}
        <div className="text-center mb-4">
          <div className="text-5xl">🎁</div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Parabéns!
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Você completou sua jornada e ganhou uma recompensa!
        </p>

        {/* Reward Card */}
        <div className="bg-blue-100 rounded-lg p-6 mb-6 text-center">
          <div className="text-3xl mb-2">🎀</div>
          <p className="text-blue-900 font-bold">Kit Especial Care Plus</p>
        </div>

        {/* Button */}
        <button
          onClick={onClose}
          className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Resgatar Kit Especial
        </button>
      </div>
    </div>
  );
}
