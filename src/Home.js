import React from 'react';
import { ContentHome } from './components/ContentHome';

const Titles = {
  title1: "Venez découvrir notre cuisine créole",
  title2: "Laissez vous tenter par nos spécialités"
}

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleF: Titles.title1,
    }
  }

  render() {
    return (
      <div>
        <ContentHome carousel={this.state.titleF}/>
      </div>
    );
  }
}