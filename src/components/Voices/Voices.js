
import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link';
import s from './Voices.css';

function Voices({ className }) {
  return (
    <div className={cx(s.root, className)} role="voices">what the hell, this is my first component!

    </div>
  );
}

export default withStyles(s)(Voices);
