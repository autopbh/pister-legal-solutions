import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Protection contre les captures d'écran et interactions
document.addEventListener('DOMContentLoaded', () => {
  // Désactive le clic droit avec message
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    // Créer un toast de dissuasion
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed; top: 20px; right: 20px; 
      background: linear-gradient(135deg, #dc2626, #ef4444);
      color: white; padding: 16px 20px; border-radius: 12px;
      font-family: system-ui; font-size: 14px; font-weight: 600;
      box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
      z-index: 99999; transform: translateX(400px);
      transition: transform 0.3s ease;
    `;
    toast.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span>Contenu protégé juridiquement</span>
      </div>
      <div style="font-size: 12px; opacity: 0.9; margin-top: 4px;">
        Reproduction interdite • Cabinet surveillé
      </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.style.transform = 'translateX(0)', 100);
    setTimeout(() => {
      toast.style.transform = 'translateX(400px)';
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
  });
  
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
      
      // Message de dissuasion spécifique
      const action = e.key === 's' ? 'sauvegarde' : e.key === 'a' ? 'sélection' : 'impression';
      const toast = document.createElement('div');
      toast.style.cssText = `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #dc2626, #ef4444);
        color: white; padding: 24px; border-radius: 16px;
        font-family: system-ui; text-align: center;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        z-index: 99999; max-width: 400px;
      `;
      toast.innerHTML = `
        <div style="font-size: 18px; font-weight: bold; margin-bottom: 8px;">
          🚫 Action interdite
        </div>
        <div style="font-size: 14px; margin-bottom: 16px;">
          La ${action} de ce contenu juridique est strictement interdite.
        </div>
        <div style="font-size: 12px; opacity: 0.9;">
          Cabinet d'avocat surveillé • Violations signalées
        </div>
      `;
      document.body.appendChild(toast);
      
      setTimeout(() => document.body.removeChild(toast), 4000);
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
