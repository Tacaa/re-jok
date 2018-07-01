// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';

import Icon from '../Icon';
import {
  StyledSubMenuWrapper,
  StyledSubMenuTitle,
  StyledSubMenu,
  StyledSubMenuArrow
} from './style';

import {connectMenu} from './MenuContext';

type Props = {
  /** Children of SubMenu could be anything but it should be MenuList or MenuItem**/
  children?: any,
  /** title of SubMenu**/
  title?: string | React.Node,
  /** openKey must required **/
  openKey?: string,
  /** level of SubMenu ... default level 1**/
  level: number,
  /** data from menu parent**/
  context: Object,
}

const defaultProps = {
  level: 1
}

type State = {
  childHeight: string
}


class SubMenu extends React.Component<Props, State>{

  static defaultProps = defaultProps;

  state = { childHeight: "0" };




  refWrapper: {
    current: null | React$ElementRef<any>
  } = React.createRef();

  refSubMenu: {
    current: null | React$ElementRef<any>
  } = React.createRef();

  componentDidMount(){
    const childHeight = this.getHeightRaw();
    this.setState({ childHeight });
  }

  getHeightRaw = (): string => {
    const node = ReactDOM.findDOMNode(this.refSubMenu.current);
    const wrapper = ReactDOM.findDOMNode(this.refWrapper.current);

    if (node && node instanceof HTMLElement && wrapper && wrapper instanceof HTMLElement) {
      const childHeightRaw = node.offsetHeight || node.clientHeight;


      const childHeight = `${childHeightRaw / 10}rem`;


      return childHeight;


    }
    return "0";
  }

  setHeightRaw = (open: boolean) => {
       const childHeight = this.getHeightRaw();
       const wrapper = ReactDOM.findDOMNode(this.refWrapper.current);


       if (wrapper && wrapper instanceof HTMLElement) {

         wrapper.style.height = `${!open ? childHeight : "0"}`;

       }
  }

  handleCloseCollapse = (open: boolean) => {
    let { childHeight } = this.state;
    const wrapper = ReactDOM.findDOMNode(this.refWrapper.current);


    if(wrapper && wrapper instanceof HTMLElement){


      wrapper.style.height = childHeight;

      this.setHeightRaw(open);
     }

   }

  handleOpenCollapse = (open: boolean) => {
    this.setHeightRaw(open);

  }

  handleClick = (open: boolean) => {

    const {openKey, ...rest} = this.props;
    const {onOpenChange} = rest.context;


        if(open){

           this.handleOpenCollapse(!open);

        } else {

          this.handleCloseCollapse(!open);

        }


       onOpenChange && onOpenChange({
        key: openKey,
        item: this,
        open,
        });






  }

  onTransitionEnd = (e: SyntheticEvent<HTMLInputElement>, isOpen: boolean)=> {
    const wrapper = ReactDOM.findDOMNode(this.refWrapper.current);

    if(wrapper && wrapper instanceof HTMLElement){


      wrapper.style.height = '';

    }

  }
  render(){
    const {
      children,
      title,
      openKey,
      level,
      ...rest
    } = this.props;

    let style = {};

    style.paddingLeft = level * 24;
    const {openKeys} = rest.context;

    let isOpen = openKeys.includes(this.props.openKey);


    return (
      <StyledSubMenuWrapper>

            <StyledSubMenuTitle style={style} onClick={()=> this.handleClick(!isOpen)}>
               {title}
               <StyledSubMenuArrow open={isOpen}>
                 <Icon name="angle-down"/>
               </StyledSubMenuArrow>
            </StyledSubMenuTitle>


        <StyledSubMenu open={isOpen}
          childHeight={this.state.childHeight}
          innerRef={this.refWrapper}
          onTransitionEnd={(e) => this.onTransitionEnd(e, isOpen)}

          >
          <div ref={this.refSubMenu}>
            {
              React.Children.map(children, (ch, i)=>(
                React.cloneElement(ch, {
                  key: i,
                  level: level+1,
                })
              ))
            }

          </div>

        </StyledSubMenu>

      </StyledSubMenuWrapper>
    )
  }
}

export default connectMenu(SubMenu);
