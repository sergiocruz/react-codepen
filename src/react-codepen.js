import React from 'react';

const Codepen = React.createClass({

  propTypes: {
    user: React.PropTypes.string.isRequired,
    hash: React.PropTypes.string.isRequired,
    height: React.PropTypes.string,
    width: React.PropTypes.string,
    theme: React.PropTypes.string,
    version: React.PropTypes.number,
    tab(props, propName, componentName) {

      // Valid tab props: `result`; `html`; `result,js`; `css,html`
      // Invalid: `result,result`; `js,js`; `html`; `foo`
      const TAB_REGEX = /^(result|js|css|html)(,(?!\1)(result|js|css|html)|)?$/gm;

      if (!TAB_REGEX.test(props[propName])) {
        return new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`
        );
      }
    }
  },

  getDefaultProps () {
    return {
      height: '250px',
      width: '100%',
      tab: 'result',
      theme: '0',
      version: 2
    };
  },

  render () {
    const src  = `//codepen.io/${this.props.user}/embed/${this.props.hash}/?height=${this.props.height}&theme-id=${this.props.theme}&default-tab=${this.props.tab}&embed-version=${this.props.version}`;
    const user = `http://codepen.io/${this.props.user}`;
    const pen  = `${user}/pen/${this.props.hash}/`;

    return (
      <iframe width={this.props.width} height={this.props.height} scrolling="no" src={src} frameBorder="no" allowTransparency="true" allowFullScreen="true" style={{height: this.props.height, width: this.props.width}}>
        <a href={pen}>See this pen</a> by {this.props.user} (<a href={user}>@{this.props.user}</a>) on <a href='http://codepen.io'>CodePen</a>.
      </iframe>
    );
  }
});

export default Codepen;
