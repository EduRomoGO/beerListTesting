import React, {propTypes} from 'react';
import md5 from 'md5';

import Avatar from './avatar';
import Email from './email';

function getSrc ({email}) {
	var avat = md5(email);

	return 'http://gravatar.com/avatar/' + avat + '?s=200';
}

export default class Gravatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'someone@example.com',
      src: 'http://placehold.it/200x200'
    }
  }



  updateGravatar() {
    this.setState({
      src: getSrc({email: this.state.email})
    });
  }

  updateEmail(event) {
    this.setState({email: event.target.value});
  }

  render() {
    return (
      <div className="react-gravatar">
        <h4>Avatar for:</h4>
        <Avatar email={this.state.email} src={this.state.src}/>
        <Email fetchGravatar={this.updateGravatar.bind(this)} handleEmailChange={this.updateEmail.bind(this)}/>
      </div>
    );
  }
}