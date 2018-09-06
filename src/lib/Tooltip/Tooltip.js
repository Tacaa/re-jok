// @flow
import * as React from 'react';

import {
  StyledTooltip
} from './style';

import { isChild } from '../helpers/typeUtils';

type Props = {
  /** Children of tooltip could be anything**/
  children?: any,
  /** Set position of tooltip box.. default is bottom**/
  position: 'top' | 'left' | 'right' | 'bottom' | 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft',
  /** Label of tooltip**/
  label?: any,
  /** Set color of tooltip box**/
  tooltipColor: string,
}

const defaultProps = {
  position: 'bottom',
  tooltipColor: 'rgba(0, 0, 0, .75)'
}

class Tooltip extends React.Component<Props>{

  static defaultProps = defaultProps;

  render(){
    const {
      children,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);

    return (
      <StyledTooltip {...rest}>
        {hasChild && children}
      </StyledTooltip>
    )
  }
}

export default Tooltip
