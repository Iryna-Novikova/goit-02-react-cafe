import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// нормалізація стилів
import 'modern-normalize';
// глобальні стилі
import './index.css';
import App from './components/App/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
