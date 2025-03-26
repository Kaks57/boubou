
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'

// Observer pour les animations au défilement
document.addEventListener('DOMContentLoaded', () => {
  // Utilisé pour les animations basées sur l'intersection observer
  if ('IntersectionObserver' in window) {
    console.log('Intersection Observer API supported');
  } else {
    console.log('Intersection Observer API not supported');
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('animate-fade-in');
    });
  }
});

createRoot(document.getElementById("root")!).render(<App />);
