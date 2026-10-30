import { useState } from 'react';
import EducationalShorts from './EducationalShorts';
import RescheduleModal from './RescheduleModal';
import CongratulationsModal from './CongratulationsModal';
import AppointmentModal from './AppointmentModal';

export default function GamificationTrail() {
  const [consultasRealizadas, setConsultasRealizadas] = useState(0);
  const [badges, setBadges] = useState([]);
  const [pontos, setPontos] = useState(0);
  
  // Estados dos modais
  const [showShorts, setShowShorts] = useState(false);
  const [showReschedule, setShowReschedule] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);

  // Dados da trilha (invertida - de baixo para cima)
  const trilha = [
    { numero: 5, label: 'Caminhante', icon: '🏆', ativo: consultasRealizadas >= 5, reward: '25 pontos + Voucher 10%', final: true },
    { numero: 4, label: 'Progresso', icon: '✓', ativo: consultasRealizadas >= 4 },
    { numero: 3, label: 'Primeiros Passos', icon: '✓', ativo: consultasRealizadas >= 3, reward: '10 pontos' },
    { numero: 2, label: 'Caminhando', icon: '✓', ativo: consultasRealizadas >= 2 },
    { numero: 1, label: 'Primeira Consulta', icon: '✓', ativo: consultasRealizadas >= 1 },
  ];

  // Simular adicionar consulta
  const adicionarConsulta = () => {
    setShowAppointment(true);
  };

  // Confirmar agendamento
  const handleConfirmAppointment = (appointment) => {
    const novasConsultas = consultasRealizadas + 1;
    setConsultasRealizadas(novasConsultas);
    setPontos(pontos + 25);
    setShowAppointment(false);

    // Mostrar modal de parabéns ao completar
    if (novasConsultas === 5) {
      setShowCongrats(true);
    }

    // Verificar novos badges
    if (novasConsultas === 3 && !badges.includes('primeiros-passos')) {
      setBadges([...badges, 'primeiros-passos']);
    } else if (novasConsultas === 5 && !badges.includes('caminhante')) {
      setBadges([...badges, 'caminhante']);
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Minha Jornada do Cuidado</h1>
          <div className="flex gap-4">
            <button 
              onClick={() => setShowReschedule(true)}
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Remarcar
            </button>
            <button 
              onClick={() => setShowShorts(true)}
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Assistir Shorts
            </button>
          </div>
        </div>

        {/* Main Container */}
        <div className="flex gap-12 items-start">
          {/* Left Side - Mascote + Mensagem */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Balão de mensagem */}
              <div className="bg-blue-100 text-gray-800 rounded-2xl p-6 mb-4 shadow-lg w-64 border border-blue-200">
                <p className="font-bold text-lg mb-2">Olá Paciente, eu sou o CAREinho!</p>
                <p className="text-sm leading-relaxed">
                  Aqui começa nossa jornada de saúde, complete as etapas para ganhar sua recompensa, e assista shorts para ganhar pontos para trocar por descontos.
                </p>
                {/* Seta apontando para baixo */}
                <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-100"></div>
              </div>

              {/* Mascote - Personagem Animado */}
              <div className="text-center mt-8">
                <img src="/assets/Animar Personagem.png" alt="Personagem Animado" className="w-48 h-auto drop-shadow-lg" />
              </div>
            </div>
          </div>

          {/* Right Side - Trilha Vertical */}
          <div className="flex-1">
            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-t from-blue-400 to-blue-200"></div>

              {/* Etapas */}
              <div className="space-y-12 pl-24">
                {trilha.map((etapa, index) => (
                  <div key={etapa.numero} className="relative">
                    {/* Ícone do ponto */}
                    <div
                      className={`absolute -left-12 -top-1 text-5xl transition-all duration-300 ${
                        etapa.ativo || etapa.final
                          ? 'scale-125 opacity-100'
                          : 'opacity-60'
                      }`}
                    >
                      {etapa.ativo || etapa.final ? etapa.icon : '🔒'}
                    </div>

                    {/* Card da etapa */}
                    <div
                      className={`p-6 rounded-xl shadow-md transition-all duration-300 border ${
                        etapa.ativo || etapa.final
                          ? 'bg-white border-blue-300'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <h3
                        className={`font-bold text-lg mb-2 ${
                          etapa.ativo || etapa.final ? 'text-blue-600' : 'text-gray-400'
                        }`}
                      >
                        {etapa.numero}. {etapa.label}
                      </h3>
                      {etapa.reward && (
                        <p className="text-blue-600 font-semibold text-sm">
                          {etapa.reward}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Mensagem final */}
                <div className="text-center mt-8 pt-8 border-t-2 border-blue-200">
                  <p className="text-gray-600 font-semibold text-lg">
                    {consultasRealizadas >= 5
                      ? '🎉 Parabéns! Você completou a trilha!'
                      : `Complete ${5 - consultasRealizadas} consulta${5 - consultasRealizadas !== 1 ? 's' : ''} para ganhar!`}
                  </p>
                </div>
              </div>
            </div>

            {/* Botão para adicionar consulta */}
            <button
              onClick={adicionarConsulta}
              disabled={consultasRealizadas >= 5}
              className={`w-full mt-8 font-semibold py-4 rounded-xl transition-all duration-300 text-lg ${consultasRealizadas >= 5 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg'}`}
            >
              {consultasRealizadas >= 5 ? 'Trilha Completa!' : 'Registrar Nova Consulta'}
            </button>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-blue-100">
                <div className="text-4xl font-bold text-blue-600">{consultasRealizadas}</div>
                <p className="text-gray-600 mt-2">Consultas Realizadas</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-blue-100">
                <div className="text-4xl font-bold text-blue-600">{pontos}</div>
                <p className="text-gray-600 mt-2">Pontos Acumulados</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-blue-100">
                <div className="text-4xl font-bold text-blue-600">{badges.length}</div>
                <p className="text-gray-600 mt-2">Badges Conquistadas</p>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Modais */}
      <EducationalShorts isOpen={showShorts} onClose={() => setShowShorts(false)} />
      <RescheduleModal isOpen={showReschedule} onClose={() => setShowReschedule(false)} />
      <CongratulationsModal isOpen={showCongrats} onClose={() => setShowCongrats(false)} />
      <AppointmentModal isOpen={showAppointment} onClose={() => setShowAppointment(false)} onConfirm={handleConfirmAppointment} />
    </div>
  );
}
