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
            <p id="alert-success" className="alert alert-success alert-dismissible fade show" role="alert" >
              <strong>Success:</strong> {props.success}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>      
            </p>
            <p id="alert-error1" className="alert alert-danger alert-dismissible fade show" role="alert" >
              <strong>Erreur:</strong> {props.error1}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>      
            </p>
            <p id="alert-error2" className="alert alert-danger alert-dismissible fade show" role="alert" >
              <strong>Erreur:</strong> {props.error2}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>      
            </p>
            <div className="divInputs" style={{marginTop: 20 ,textAlign: "center"}}>
              <input style={{marginRight: 15}}
                      className="input-user" 
                      type="text"
                      placeholder="Nom"
                      onChange={props.handleChange}
                      required />

              <input  className="input-user"
                      type="email"
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
            <input type="submit"
                    className="btn input-button" 
                    value="ENVOYER" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );  
}