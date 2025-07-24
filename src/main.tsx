import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Protection contre les captures d'écran et interactions
document.addEventListener('DOMContentLoaded', () => {
  // Désactive le clic droit
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  
  // Désactive les raccourcis clavier dangereux
  document.addEventListener('keydown', (e) => {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u')) {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+S (sauvegarde), Ctrl+A (tout sélectionner), Ctrl+P (imprimer)
    if (e.ctrlKey && (e.key === 's' || e.key === 'a' || e.key === 'p')) {
      e.preventDefault();
      return false;
    }
    
    // Print Screen et autres touches de capture
    if (e.key === 'PrintScreen' || e.key === 'F13' || e.key === 'F14' || e.key === 'F15') {
      e.preventDefault();
      // Obscurcit temporairement le contenu
      document.body.style.filter = 'blur(20px)';
      setTimeout(() => {
        document.body.style.filter = 'none';
      }, 2000);
      return false;
    }
  });
  
  // Détection de perte de focus (possiblement capture d'écran)
  window.addEventListener('blur', () => {
    document.body.style.filter = 'blur(20px)';
    document.body.style.opacity = '0.1';
  });
  
  window.addEventListener('focus', () => {
    document.body.style.filter = 'none';
    document.body.style.opacity = '1';
  });
  
  // Détection de changement de visibilité
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.body.style.filter = 'blur(20px)';
      document.body.style.opacity = '0.1';
    } else {
      document.body.style.filter = 'none';
      document.body.style.opacity = '1';
    }
  });
  
  // Désactive le glisser-déposer
  document.addEventListener('dragstart', (e) => e.preventDefault());
  document.addEventListener('drop', (e) => e.preventDefault());
  
  // Protection contre la sélection de texte
  document.addEventListener('selectstart', (e) => {
    if (e.target && !(e.target as HTMLElement).matches('input, textarea')) {
      e.preventDefault();
    }
  });
  
  // Protection contre les outils de développement
  setInterval(() => {
    const devtools = {
      open: false,
      orientation: null
    };
    
    const threshold = 160;
    
    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true;
          document.body.style.display = 'none';
          alert('Accès non autorisé détecté');
        }
      } else {
        devtools.open = false;
        document.body.style.display = 'block';
      }
    }, 500);
  }, 100);
});

createRoot(document.getElementById("root")!).render(<App />);
