// @flow
import * as React from 'react';
import {
  StyledCardHeader,
  PrimaryText,
  SecondaryText,
  StyledCardHeaderInfo,
  StyledCardHeaderText,
  StyledCardHeaderAction
} from './style';


import Avatar from '../Avatar/Avatar';
import AvatarGroup from '../Avatar/AvatarGroup';


type Props = {
  /** Avatar **/
  avatar?: React.Element <typeof Avatar> | React.Element <typeof AvatarGroup>,
  /** class of card header**/
  className?: string,
  /** primary text**/
  title?: React.Node | string,
  /** secondary text**/
  subheader?: React.Node | string,
  /** action **/
  action?: any,
  /** Add more style to card**/
  style?: Object,


}


class CardHeader extends React.Component<Props> {
  static _meta = {
    name: 'CardHeader',
    parent: 'Card'
  }

  render(){
    const {
      avatar,
      title,
      subheader,
      action,
      ...rest
    } = this.props;

    return (
      <StyledCardHeader {...rest}>
        <StyledCardHeaderInfo>
          {avatar}
          <StyledCardHeaderText>
            <PrimaryText>{title}</PrimaryText>
          <SecondaryText>{subheader}</SecondaryText>
          </StyledCardHeaderText>

        </StyledCardHeaderInfo>
        <StyledCardHeaderAction>
           {action}
        </StyledCardHeaderAction>
      </StyledCardHeader>
    )
  }
}

export default CardHeader
