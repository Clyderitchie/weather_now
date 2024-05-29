import { Outlet } from 'react-router-dom';

import Nav from './components/nav/nav';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <div>
        <Nav />
        <main id='main'>
          <Outlet />
        </main>
        <div id='footerMain'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
