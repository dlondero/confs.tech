import React, {PureComponent} from 'react';
import classNames from 'classnames';
import {Link as RoutedLink} from 'react-router-dom';

import styles from './Link.scss';

export default class Link extends PureComponent {
  defaultProps = {
    selected: false,
  };

  routedLink() {
    const {url, selected, className} = this.props;

    return (
      <RoutedLink
        className={classNames(styles.Link, selected && styles.Selected, className)}
        to={url}
      >
        {this.props.children}
      </RoutedLink>
    );
  }

  render() {
    const {url, external, onClick, selected, className, routed} = this.props;

    if (routed) {
      return this.routedLink();
    }

    return (
      <a
        className={classNames(styles.Link, selected && styles.Selected, className)}
        onClick={onClick}
        onTouchStart={onClick}
        target={external ? '_blank' : null}
        href={url}
      >
        {this.props.children}
      </a>
    );
  }
}
