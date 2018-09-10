// not in use but may add fb like button
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// finds the div we added ot our HTML 
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);