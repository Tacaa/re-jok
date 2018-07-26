var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledNavBar, StyledNavBarContainer, StyledNavBarLeft, StyledNavBarRight, StyledNavBarRes, StyledNavBarCenter } from './style';

import { isChild } from '../helpers/typeUtils';

var defaultProps = {
  transparent: false,
  responsive: 1000,
  primary: false,
  secondary: false,
  hasBoxShadow: false
};

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          elementRight = _props.elementRight,
          elementCenter = _props.elementCenter,
          elementResponsive = _props.elementResponsive,
          rest = _objectWithoutProperties(_props, ['children', 'elementRight', 'elementCenter', 'elementResponsive']);

      var hasChild = !isChild(children);

      return React.createElement(
        StyledNavBar,
        rest,
        React.createElement(
          StyledNavBarContainer,
          null,
          React.createElement(
            StyledNavBarLeft,
            null,
            hasChild && children
          ),
          elementResponsive && React.createElement(
            StyledNavBarRes,
            null,
            elementResponsive
          ),
          elementCenter && React.createElement(
            StyledNavBarCenter,
            null,
            elementCenter
          ),
          elementRight && React.createElement(
            StyledNavBarRight,
            null,
            elementRight
          )
        )
      );
    }
  }]);

  return Nav;
}(React.Component);

Nav.defaultProps = defaultProps;


export default Nav;