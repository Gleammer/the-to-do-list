import styles from './App.module.css';

import { HopeProvider } from '@hope-ui/solid'

function App() {
  return (
    <HopeProvider>
      <div>Hello, World!</div>
    </HopeProvider>
  );
}

export default App;
