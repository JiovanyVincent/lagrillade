import React from 'react';

export const ContentContact = (props) => {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <div className="row" style={{margin: "10px 0"}}>
      <div id="infos" className="col-sm">
          <h3>Infos</h3>
          {props.infos}
          <iframe src={props.location} 
                  title="location" 
                  style={{border:0, 
                          width:"600", 
                          height:"450", 
                          frameBorder:"0",
                          margin: 15}} 
                  allowFullScreen />
        </div>
        <div className="col-sm">
          <form onSubmit={props.handleSubmit}>
            <h3>Nous Contacter</h3>
            <div className="divInputs" style={{marginTop: 20 ,textAlign: "center"}}>
              <input style={{marginRight: 15}} 
                      type="text"
                      placeholder="Nom"
                      onChange={props.handleChange}
                      required />

              <input  type="mail"
                      placeholder="E-mail" 
                      onChange={props.handleChange}
                      required />
            </div>
            <div style={{textAlign:"center"}}>
            <textarea placeholder="Message" 
                      rows="3" 
                      onChange={props.handleChange}
                      required>

            </textarea>
            <br />
            <button type="submit"
                    className="btn">ENVOYER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );  
}