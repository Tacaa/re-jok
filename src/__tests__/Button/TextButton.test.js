import React from 'react';
import { css } from 'styled-components';
import TextButton from '../../Button/TextButton'
import {SpinnerButton} from '../../Button/style'
import {defaultTheme} from '../../theme'
import {Icon} from '../../Icon';
import renderer from 'react-test-renderer'
import { shallowWithTheme, mountWithTheme, renderWithTheme } from '../../helpers/withTheme';
import 'jest-enzyme'
import 'jest-styled-components'

describe('<TextButton />', () => {
  it('should render TextButton', () => {
    const tree = renderWithTheme(
      <TextButton>
        Text Button
      </TextButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a text button correctly', () => {
    const wrapper = mountWithTheme(<TextButton/>, defaultTheme);
    expect(wrapper.find('button').type()).toEqual('button');
 });

 it('renders a button with only text', () => {
   const wrapper = mountWithTheme(<TextButton>Text Button</TextButton>, defaultTheme);
   expect(wrapper.text()).toEqual("Text Button");

   const tree = renderWithTheme(<TextButton>Text Button</TextButton>).toJSON();
   expect(tree).toHaveStyleRule('background', 'transparent');
   expect(tree).toHaveStyleRule('background-image', 'none');
   expect(tree).toHaveStyleRule('font-weight', '600');
   expect(tree).toHaveStyleRule('letter-spacing', '0.08rem');




 });

});
