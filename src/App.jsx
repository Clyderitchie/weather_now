import { Outlet } from 'react-router-dom';

import Nav from './components/nav/nav';
import Footer from './components/footer/footer';

import './app.css';

function App({ onSearch }) {
  return (
    <>
      <div className="container-fluid w-100 h-100 p-2 mt-1 gradient-background">
        <div className="row">
          <div className="col-12">
            <Nav onSearch={onSearch}/>
          </div>
          <div className="col-12 mb-5">
            <main id='main'>
              <Outlet />
            </main>
          </div>
          <div className="col-12 mt-5">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
