import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';



function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}


export default App;