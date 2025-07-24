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
    
    // Print Screen
    if (e.key === 'PrintScreen') {
      e.preventDefault();
      return false;
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
});

createRoot(document.getElementById("root")!).render(<App />);
