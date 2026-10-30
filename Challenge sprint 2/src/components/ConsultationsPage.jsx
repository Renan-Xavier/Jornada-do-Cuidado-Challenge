import { useState } from 'react';
import RescheduleModal from './RescheduleModal';
import AppointmentModal from './AppointmentModal';

export default function ConsultationsPage({ consultations = [] }) {
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [showReschedule, setShowReschedule] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);

  // Simulação de dados de consultas se não houver nenhuma
  const defaultConsultations = [
    {
      id: 1,
      especialidade: 'Cardiologia',
      data: '2024-05-20',
      hora: '14:30',
      medico: 'Dr. João Silva',
      local: 'Sala 101 - Prédio A',
      status: 'Confirmada'
    },
    {
      id: 2,
      especialidade: 'Dermatologia',
      data: '2024-06-15',
      hora: '10:00',
      medico: 'Dra. Maria Santos',
      local: 'Sala 205 - Prédio B',
      status: 'Agendada'
    },
    {
      id: 3,
      especialidade: 'Oftalmologia',
      data: '2024-07-01',
      hora: '15:45',
      medico: 'Dr. Carlos Oliveira',
      local: 'Sala 302 - Prédio C',
      status: 'Agendada'
    }
  ];

  const consults = consultations.length > 0 ? consultations : defaultConsultations;

  const formatarData = (data) => {
    const [year, month, day] = data.split('-');
    return `${day}/${month}/${year}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmada':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'Agendada':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Cancelada':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Minhas Consultas</h1>
          <p className="text-gray-600">Consulte o histórico e status de seus agendamentos</p>
        </div>

        {/* Filtros */}
        <div className="flex gap-4 mb-8">
          <button className="px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-lg hover:bg-blue-200 transition">
            Todas
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 font-semibold rounded-lg hover:bg-gray-200 transition">
            Próximas
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 font-semibold rounded-lg hover:bg-gray-200 transition">
            Concluídas
          </button>
        </div>

        {/* Lista de Consultas */}
        <div className="space-y-4">
          {consults.map((consultation) => (
            <div
              key={consultation.id}
              onClick={() => setSelectedConsultation(consultation)}
              className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-400 hover:shadow-md cursor-pointer transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 flex-1">
                  {/* Ícone de especialidade */}
                  <div className="text-5xl">📋</div>

                  {/* Informações principais */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {consultation.especialidade}
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>
                        <span className="font-semibold">Data:</span> {formatarData(consultation.data)} às {consultation.hora}
                      </p>
                      <p>
                        <span className="font-semibold">Médico:</span> {consultation.medico}
                      </p>
                      <p>
                        <span className="font-semibold">Local:</span> {consultation.local}
                      </p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className={`px-4 py-2 rounded-lg font-semibold border ${getStatusColor(consultation.status)}`}>
                    {consultation.status}
                  </div>
                </div>

                {/* Chevron */}
                <div className="text-blue-400 text-2xl">›</div>
              </div>
            </div>
          ))}
        </div>

        {consults.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhuma consulta agendada.</p>
          </div>
        )}

        {/* Modal de Detalhes */}
        {selectedConsultation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedConsultation(null)}
                className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-3xl font-bold leading-none hover:bg-red-50 rounded-full w-8 h-8 flex items-center justify-center transition"
              >
                ✕
              </button>

              {/* Conteúdo */}
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Detalhes da Consulta
              </h2>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-gray-600 font-semibold">Especialidade</p>
                  <p className="text-gray-800 text-lg">{selectedConsultation.especialidade}</p>
                </div>

                <div>
                  <p className="text-gray-600 font-semibold">Data e Hora</p>
                  <p className="text-gray-800 text-lg">
                    {formatarData(selectedConsultation.data)} às {selectedConsultation.hora}
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 font-semibold">Médico</p>
                  <p className="text-gray-800 text-lg">{selectedConsultation.medico}</p>
                </div>

                <div>
                  <p className="text-gray-600 font-semibold">Local</p>
                  <p className="text-gray-800 text-lg">{selectedConsultation.local}</p>
                </div>

                <div>
                  <p className="text-gray-600 font-semibold">Status</p>
                  <div
                    className={`inline-block px-4 py-2 rounded-lg font-semibold border mt-2 ${getStatusColor(
                      selectedConsultation.status
                    )}`}
                  >
                    {selectedConsultation.status}
                  </div>
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedConsultation(null)}
                  className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setSelectedConsultation(null);
                    setShowReschedule(true);
                  }}
                  className="flex-1 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                >
                  Remarcar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reschedule Modal */}
        <RescheduleModal
          isOpen={showReschedule}
          onClose={() => setShowReschedule(false)}
          onConfirm={() => {
            setShowReschedule(false);
            setShowAppointment(true);
          }}
        />

        {/* Appointment Modal */}
        <AppointmentModal
          isOpen={showAppointment}
          onClose={() => setShowAppointment(false)}
          onConfirm={(appointment) => {
            setShowAppointment(false);
            console.log('Nova consulta agendada:', appointment);
          }}
        />
      </div>
    </div>
  );
}
