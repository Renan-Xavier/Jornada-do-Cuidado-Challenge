import { createContext, useState, useEffect } from 'react';

export const TemaContexto = createContext();

export function ProvedorTema({ children }) {
  const [temaNegro, setTemaNegro] = useState(false);

  useEffect(() => {
    // Verificar preferência salva no localStorage
    const temaSalvo = localStorage.getItem('temaNegro');
    if (temaSalvo) {
      setTemaNegro(JSON.parse(temaSalvo));
    }
  }, []);

  useEffect(() => {
    // Salvar preferência quando mudar
    localStorage.setItem('temaNegro', JSON.stringify(temaNegro));
    
    if (temaNegro) {
      // MODO DARK - cores escuras
      document.documentElement.classList.add('dark');
      
      setTimeout(() => {
        // Fundo preto/escuro
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#ffffff';
        
        const bgWhiteElements = document.querySelectorAll('.bg-white');
        bgWhiteElements.forEach(el => {
          el.style.backgroundColor = '#1a1a1a';
          el.style.color = '#ffffff';
        });
        
        // Header preto/cinza escuro no dark mode
        const headerDiv = document.querySelector('.bg-blue-200');
        if (headerDiv) {
          headerDiv.style.backgroundColor = '#1a1a1a';
          headerDiv.style.color = '#ffffff';
        }
        
        const bgGrayElements = document.querySelectorAll('[class*="bg-gray-"]');
        bgGrayElements.forEach(el => {
          el.style.backgroundColor = '#2a2a2a';
          el.style.color = '#ffffff';
        });
      }, 100);
    } else {
      // MODO LIGHT - voltar para estilos padrão
      document.documentElement.classList.remove('dark');
      
      setTimeout(() => {
        // Remover estilos inline
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        
        const allElements = document.querySelectorAll('[style*="background-color"]');
        allElements.forEach(el => {
          if (!el.classList.contains('btn')) {
            el.style.backgroundColor = '';
            el.style.color = '';
          }
        });
        
        // Header volta para azul bem claro
        const headerDiv = document.querySelector('.bg-blue-200');
        if (headerDiv) {
          headerDiv.style.backgroundColor = '#b3d9ff';
          headerDiv.style.color = '#333333';
        }
      }, 100);
    }
  }, [temaNegro]);

  const alternarTema = () => {
    setTemaNegro(!temaNegro);
  };

  return (
    <TemaContexto.Provider value={{ temaNegro, alternarTema }}>
      {children}
    </TemaContexto.Provider>
  );
}
