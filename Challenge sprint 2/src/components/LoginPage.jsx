import { useState } from 'react';

export default function LoginPage({ onLoginSuccess }) {
  const [menuActive, setMenuActive] = useState('inicio');

  const handleLoginSuccess = (credentialResponse) => {
    onLoginSuccess(credentialResponse);
  };

  const handleGoogleLogin = () => {
    // Simula login com Google (apenas demonstrativo)
    const testUser = {
      credential: 'demo-google-token',
      profileObj: {
        name: 'Usuário Google',
        email: 'usuario@gmail.com',
      }
    };
    handleLoginSuccess(testUser);
  };

  // Função para teste
  const handleTestLogin = () => {
    const testUser = {
      credential: 'test-token',
      profileObj: {
        name: 'Usuário Teste',
        email: 'teste@example.com',
      }
    };
    handleLoginSuccess(testUser);
  };

  const handleLogout = () => {
    setMenuActive('inicio');
    // Aqui você pode adicionar lógica de logout (limpar tokens, etc)
    console.log('Desconectado');
  };

  const menuItems = [
    { id: 'inicio', label: 'Início', icon: '🏠' },
    { id: 'perfil', label: 'Perfil', icon: '👤' },
    { id: 'consultas', label: 'Minhas Consultas', icon: '📋' },
    { id: 'config', label: 'Configurações', icon: '⚙️' },
    { id: 'logout', label: 'Desconectar', icon: '🚪' },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-56 bg-white shadow-lg">
        {/* Logo */}
        <div className="p-6 border-b">
          <img 
            src="/assets/logo-care-plus.svg" 
            alt="Care Plus Logo" 
            className="w-full h-auto"
          />
        </div>

        {/* Menu Items */}
        <nav className="p-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => item.id === 'logout' ? handleLogout() : setMenuActive(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                menuActive === item.id && item.id !== 'logout'
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              } ${
                item.id === 'logout' ? 'border-t border-gray-200 mt-4 text-white bg-red-500 hover:bg-red-600' : ''
              }`}
            >
              <span className="text-xl text-gray-400">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo/Header */}
          <div className="text-center mb-12">
            <img 
              src="/assets/logo-care-plus.svg" 
              alt="Care Plus Logo" 
              className="w-32 h-32 mx-auto mb-8"
            />
            <h1 className="text-4xl font-bold text-blue-600 mb-3">
              Jornada do Cuidado
            </h1>
            <p className="text-gray-600 text-lg">
              Sua saúde em uma trilha de recompensas.
            </p>
          </div>

          {/* Card de Login */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Google Login Button - Demonstrativo */}
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-white border-2 border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 mb-4"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <text x="12" y="18" fontSize="20" textAnchor="middle" fill="#4285F4">G</text>
              </svg>
              Fazer Login com o Google
            </button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">ou</span>
              </div>
            </div>

            {/* Botão de Teste */}
            <button
              onClick={handleTestLogin}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg text-white font-bold py-3 rounded-lg transition mb-4"
            >
              🧪 Entrar como Teste
            </button>

            {/* Termos de Serviço */}
            <p className="text-xs text-center text-gray-500">
              Ao continuar, você concorda com nossos{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Termos de Serviço
              </a>
              {' '} e{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Política de Privacidade
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
