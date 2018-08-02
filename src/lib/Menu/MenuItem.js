// @flow
import * as React from 'react';
import {
  StyledMenuItem,
  StyledMenuItemText,
  StyledMenuLeftIcon
} from './style';

import { isChild } from '../helpers/typeUtils';


import {connectMenu} from './MenuContext';

type Props = {
  /** Override style of Menu Item**/
  style?: Object,
  /** Add more class to Menu Item**/
  className?: string,
  /** Children of MenuItem could be anything **/
  children?: any,
  /** from parent Menu with <3**/
  backgroundColor?: string,
  /** from parent Menu with <3**/
  textColor?: string,
  /** from parent Menu with <3**/
  activeColor?: string,
  /** keyActive must require... should be string**/
  keyActive: string,
  /** Event click of menu item**/
  onClick?: Function,
  /** from parent SubMenu with <3*/
  level?: number,
  /** controll padding of title menu list default is 24px**/
  paddingLeft: number,
  /** primary text**/
  primaryText?: string,
  /** left icon**/
  leftIcon?: React.Node,
  /** disabled menu item**/
  disabled?: boolean,
  /** data from menu parent**/
  context: Object,
  /** from SubMenu with <3**/
  level?: number,
}

const defaultProps = {
  paddingLeft: 24,
  disabled: false
}


class MenuItem extends React.Component<Props>{
  static defaultProps = defaultProps;

  handleClick = (e: SyntheticEvent<HTMLElement>) => {
    const { keyActive, onClick, disabled, ...rest } = this.props;

    if(disabled) return;

    const { multiple, onSelect, selectedKeys, onDeselect } = rest.context;

    const isSelected = selectedKeys.indexOf(keyActive) !== -1;
    const info = {
      key: keyActive,
      keyPath: [keyActive],
      item: this,
      domEvent: e,
    };
    onClick && onClick(info);
    if (multiple) {
      if (isSelected) {
        onDeselect(info);
      } else {
        onSelect(info);
      }
    } else if (!isSelected) {
      onSelect(info);
    }
  };

  render(){
    const {
      children,
      keyActive,
      level,
      paddingLeft,
      primaryText,
      leftIcon,
      disabled,
      ...rest
    } = this.props;


    let style = {};

    style.paddingLeft = level ? level * paddingLeft : paddingLeft;

    const hasChild = !isChild(children);




    const {selectedKeys, activeColor, activeNormal} = rest.context;


    let active = selectedKeys.includes(keyActive);
    return (
      <StyledMenuItem
        level={level}
        disabled={disabled}
        activeColor={activeColor}
        activeNormal={activeNormal}
        style={style}
        {...rest}
        active={active}
        onClick={this.handleClick}>
         {
           leftIcon && <StyledMenuLeftIcon>{leftIcon}</StyledMenuLeftIcon>
         }
         {
           primaryText && <StyledMenuItemText>{primaryText}</StyledMenuItemText>
         }
         {hasChild && children}
      </StyledMenuItem>
    )
  }
}


export default connectMenu(MenuItem);
