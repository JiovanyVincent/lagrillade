import React from 'react';
import { ContentContact } from '../components/ContentContact';
import { Footer } from './Footer';

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    this.handleUserFields = this.handleUserFields.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserFields(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    const name = document.querySelector('input[type="text"]').value,
          mail= document.querySelector('input[type="mail"]').value;
    
    alert(name + " " + mail + " Votre message à été envoyé avec succès.");
    e.preventDefault();
  }

  render() {
    const infos = [
      "Téléphone: +33 9 45 65 78 89",
      "E-mail: lagrillade@live.com",
      "Adresse: 6 AVENUE MAURICE RAVEL 92160 ANTONY"
    ]
      
    const infosList = infos.map((info ,i) =>
                      <p key={"infos_" + i}>{info}</p>);

    const locationMaps = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.2635421840505!2d2.3068287156696985!3d48.73866231708347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67700fd1208d5%3A0x729cb6d86b3287a!2s6+Avenue+Maurice+Ravel%2C+92160+Antony!5e0!3m2!1sfr!2sfr!4v1553690506930";
    
    return (
      <div id="contact">
        <ContentContact handleChange={this.handleUserFields}
                        handleSubmit={this.handleSubmit}
                        infos={infosList}
                        location={locationMaps}
        />
        <Footer />
      </div>
    );
  }
}