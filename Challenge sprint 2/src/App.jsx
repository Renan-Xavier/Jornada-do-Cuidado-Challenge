import { useState, useContext } from 'react';
import PáginaLogin from './components/PáginaLogin';
import TrilhaGamificacao from './components/TrilhaGamificacao';
import PáginaConsultas from './components/PáginaConsultas';
import { TemaContexto } from './contextos/TemaContexto';

function AppConteudo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('trilha');
  const { temaNegro, alternarTema } = useContext(TemaContexto);

  const handleLoginSuccess = (credentialResponse) => {
    setUser(credentialResponse);
    setIsLoggedIn(true);
    console.log('Usuário autenticado:', credentialResponse);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          {/* Header com opção de logout */}
          <div className="bg-blue-200 shadow-md sticky top-0 z-10 transition-colors">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-500">
                Jornada do Cuidado
              </h1>
              <div className="flex gap-4 items-center">
                <button
                  onClick={() => setCurrentPage('trilha')}
                  className={`font-semibold py-2 px-4 rounded-lg transition ${
                    currentPage === 'trilha'
                      ? 'bg-blue-400 text-white dark:bg-blue-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Trilha
                </button>
                <button
                  onClick={() => setCurrentPage('consultas')}
                  className={`font-semibold py-2 px-4 rounded-lg transition ${
                    currentPage === 'consultas'
                      ? 'bg-blue-400 text-white dark:bg-blue-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Consultas
                </button>
                
                {/* Botão de Tema */}
                <button
                  onClick={alternarTema}
                  className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-yellow-300 font-semibold py-2 px-4 rounded-lg transition text-xl"
                  title="Alternar tema"
                >
                  {temaNegro ? '☀️' : '🌙'}
                </button>
                
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg transition"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>

          {/* Conteúdo da página */}
          <div className="bg-white transition-colors min-h-screen">
            {currentPage === 'trilha' ? <TrilhaGamificacao /> : <PáginaConsultas />}
          </div>
        </>
      ) : (
        <PáginaLogin onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

import { ProvedorTema } from './contextos/TemaContexto';

export default function App() {
  return (
    <ProvedorTema>
      <AppConteudo />
    </ProvedorTema>
  );
}
