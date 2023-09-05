// MiComponente.js
import Registro from './Componentes/Registro';
import { Home } from './Componentes/Home';


import { useState } from 'react';


function App() {

  const [user, setUser] = useState([])

  return <div>
    
    {
      !user.length > 0
        ? <Registro setUser={setUser} />
        : <Home user={user} setUser={setUser} />
        
    }
    
  </div>
}

export default App;
