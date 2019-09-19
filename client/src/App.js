import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import { MDBContainer } from "mdbreact";
import './App.css';
import ContactForm from './components/ContactForm';

function App() {
  return (
      <MDBContainer>
        <ContactForm/>
      </MDBContainer>



  );
}

export default App;
