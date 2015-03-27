var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PageEndCTA = React.createClass({
  render: function() {
    return (
      <div className="page-end-cta">
        {this.props.children}
      </div>
    );
  }
});

module.exports = PageEndCTA;
