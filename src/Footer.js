import React from 'react';

export class Footer extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 10,
                    padding: 1,
                    textAlign: "center",
                    backgroundColor: "#2e2e2e", 
                    color: "#eee"}}>
        <p style={{margin: 5}}>Ce site est une démo et n'a pour but aucun intéret commercial. </p>
      </div>
    );
  }
}