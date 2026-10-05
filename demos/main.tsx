import { createRoot } from 'react-dom/client';
import '../lib/styles/tokens.css';
import '../lib/utilities.css';
import { App } from './App';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
}
