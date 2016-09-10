import React from 'react';

class HealthyImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src || props.defaultSrc,
      brokenImages: {}
    }
  }

  componentWillReceiveProps(props) {
    if(props.src && props.src !== props.defaultSrc && !this.state.brokenImages[props.src]) {
      this.setState({src: props.src});
    }
  }

  handleError() {
    let images = Object.assign({}, this.state.brokenImages, {[this.state.src]: 1});
    this.setState({src: this.props.defaultSrc, brokenImages: images});
  }

  render() {
    return <img
      className={this.props.className}
      src={this.state.src}
      onError={this.handleError.bind(this)}/>
  }
}

HealthyImage.propTypes = {
  src: React.PropTypes.string,
  defaultSrc: React.PropTypes.string
}

export default HealthyImage;
