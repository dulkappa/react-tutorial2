var React = require('react');
var CommentBox = require('./comment.jsx');

var data = [
  {author: "Peter Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
