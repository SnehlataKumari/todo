import React from 'react';
import store from '../redux/store';
import { incrementCount } from '../redux/actions/link';

export default ({ id }) => {
  store.dispatch(incrementCount({ hash: id }));
  return (
    <div>
      <h1>Route for linkPage! it works....</h1>
      <h2>{id}</h2>
      {/* <h2>{this.props.match.params.id}</h2> */}
    </div>
    // </Router>
  )
}
