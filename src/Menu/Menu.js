// @flow
import * as React from 'react';
import {
  StyledMenu
} from './style';


import MenuList from './MenuList';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import {MenuContext} from './MenuContext';

type Props = {
  /** Override style of Menu**/
  style?: Object,
  /** Add more class to Menu**/
  className?:string,
  /** Children of Menu could be anything.. but i recommand API of Menu**/
  children?: any,
  /** Controll Menu.. set background of Menu**/
  backgroundColor?: string,
  /** Controll Menu.. set text color of Menu**/
  textColor?: string,
  /** Controll Menu.. set text color when active of Menu**/
  activeColor?: string,
  /** Controll Menu.. set active color is background or text **/
  activeNormal?: boolean,
  /** Callback function when select menu item**/
  onSelect?: Function,
  /** Callback function when deselect menu item**/
  onDeselect?: Function,
  /****/
  activeKey?: string,
  /** Allow Menu is select or not**/
  selectable?: boolean,
  /****/
  selectedKeys?: Array<string>,
  /** Default menu item is selected **/
  defaultSelectedKeys?: Array<string>,
  /** Allow multiple select or not **/
  multiple?: boolean,
  /** Default submenu open or not **/
  defaultOpenKeys?: Array<string>,
  /****/
  openKeys: Array<string>
}

const defaultProps = {
  selectable: true,
  defaultSelectedKeys: [],
  defaultOpenKeys: [],
  multiple: false,
  activeNormal: true
}

class Menu extends React.Component<Props>{

  static defaultProps = defaultProps;

  static List = MenuList;
  static Item = MenuItem;
  static Sub = SubMenu;

  constructor(props){
    super(props);

    this.rootMenu = true;

    let selectedKeys = props.defaultSelectedKeys;
    let openKeys = props.defaultOpenKeys;

    if ('selectedKeys' in props) {
      selectedKeys = props.selectedKeys || [];
    }

    if ('openKeys' in props) {
      openKeys = props.openKeys || [];
    }

    this.state = {
      selectedKeys,
      openKeys,
      multiple: props.multiple
    }

  }

  onSelect = (itemInfo) => {
    const { selectable, onSelect, multiple } = this.props;

    if (selectable) {
      // root menu
      let { selectedKeys } = this.state;
      const selectedKey = itemInfo.key;

      if (multiple) {
        selectedKeys = selectedKeys.concat([selectedKey]);
      } else {
        selectedKeys = [selectedKey];
      }
      if (!('selectedKeys' in this.props)) {
        this.setState({
          selectedKeys,
        });
      }
      //onSelect is function user call
      onSelect && onSelect({
        ...itemInfo,
        selectedKeys,
      });
    }
  }

  onOpenChange = (event) => {

    const {openKeys} = this.state;
    let changed = false;
    const processSingle = (e) => {
      let oneChanged = false;
      if (e.open) {
        oneChanged = openKeys.indexOf(e.key) === -1;
        if (oneChanged) {
          openKeys.push(e.key);
        }
      } else {
        const index = openKeys.indexOf(e.key);
        oneChanged = index !== -1;
        if (oneChanged) {
          openKeys.splice(index, 1);
        }
      }
      changed = changed || oneChanged;
    };
    if (Array.isArray(event)) {
      // batch change call
      event.forEach(processSingle);
    } else {

      processSingle(event);
    }

    if (changed) {
      if (!('openKeys' in this.props)) {

        this.setState({ openKeys });
      }
      // props.onOpenChange(openKeys);
    }
  }

  onDeselect = (itemInfo) => {
    const { selectable, onDeselect } = this.props;

    if (selectable) {
      const {selectedKeys} = this.state;
      const selectedKey = itemInfo.key;
      const index = selectedKeys.indexOf(selectedKey);
      if (index !== -1) {
        selectedKeys.splice(index, 1);
      }
      if (!('selectedKeys' in this.props)) {
        this.setState({
          selectedKeys,
        });
      }
      onDeselect && onDeselect({
        ...itemInfo,
        selectedKeys,
      });
    }
  }

  render(){
    const {
      children,
      multiple,
      activeColor,
      activeNormal,
      ...rest
    } = this.props;

    const { selectedKeys, openKeys } = this.state;
    return (
      <MenuContext.Provider value={{
          selectedKeys,
          openKeys,
          onSelect: this.onSelect,
          onDeselect: this.onDeselect,
          onOpenChange:  this.onOpenChange,
          multiple: multiple,
          activeColor: activeColor,
          activeNormal: activeNormal,
        }}>
        <StyledMenu {...rest}>
          {children}
        </StyledMenu>
      </MenuContext.Provider>

    )
  }
}

export default Menu;
