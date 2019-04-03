import React from 'react';
import { ContentContact } from '../components/ContentContact';
import { Footer } from './Footer';

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      success: "",
      error1:"",
      error2: ""
    }
    this.handleUserFields = this.handleUserFields.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserFields(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    let name = document.querySelector('input[type="text"]').value;
    let mail = document.querySelector('input[type="email"]').value;
          
    const messageSuccess = name + " Votre message à été envoyé avec succès !",
          messageError1 = "Veuillez entre une adresse mail valide. Ex: paul@live.fr ou .com",
          messageError2 = "Veuillez entrer un nom valide. Ex: Jules ou jules",
          alertSuccess = document.getElementById('alert-success'),
          alertError1 = document.getElementById('alert-error1'),
          alertError2 =document.getElementById('alert-error2');

    let regex1 = /\w+@+[a-z]+(\.fr|\.com)$/,
        regex2 = /^[a-zA-Z]+(([-][a-zA-Z ])?[a-zA-Z]*)*$/g;

    if (regex1.test(mail) && regex2.test(name)) {
      this.setState({success: messageSuccess});
      alertSuccess.style.display = "block";
    } else if (!regex2.test(name)) {
      this.setState({error2: messageError2})
      alertError2.style.display = "block";
    } else if (!regex1.test(mail)) {
      this.setState({error1: messageError1});
      alertError1.style.display = "block";
    }
    
  e.preventDefault();
  console.log(regex2.test(name));
  console.log(regex1.test(mail));
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
                        success={this.state.success}
                        error1={this.state.error1}
                        error2={this.state.error2}
        />
        <Footer />
      </div>
    );
  }
}