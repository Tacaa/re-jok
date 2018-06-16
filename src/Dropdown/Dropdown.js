// @flow
import * as React from 'react';
import {
  StyledDropdownWrapper,
  StyledDropdown
} from './style';
import ReactDOM from 'react-dom'



type Props = {
  style?: Object,
  className?: string,
  children?: any,
  content?: any,
  position: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight',
  trigger: 'hover' | 'click',
}

type State = {
  top: number,
  left: number,
  open: boolean
}

const defaultProps = {
  position: 'bottomLeft',
  trigger: 'hover',
}



class Dropdown extends React.Component<Props, State>{

  static defaultProps = defaultProps;

  state = {
    top: 0,
    left: 0,
    open: false
  }

  refParent: {
    current: null | React$ElementRef<any>
  } = React.createRef();


  refChildren: {
    current: null | React$ElementRef<any>
  } = React.createRef();

  refDropdown: {
    current: null | React$ElementRef<any>
  } = React.createRef();



  componentDidMount(){
    const {trigger} = this.props;

    // wrapper.addEventListener('mouseleave', this.resetDropdown, 500);

    // trigger === 'hover'
    //  ? document.addEventListener('mouseenter', this.handleEvent)
    //  : trigger === "click"
    //  ? document.addEventListener('mousedown', this.handleEvent)
    //  : null


  }

  componentWillUnmount(){

    const {trigger} = this.props;



    // trigger === 'hover'
    //  ? document.removeEventListener('mouseenter', this.handleEvent)
    //  : trigger === "click"
    //  ? document.removeEventListener('mousedown', this.handleEvent)
    //  : null



  }

  resetDropdown = ()=> {

    this.setState({
      top: 0,
      left: 0,
      open: false
    })
  }

  handleEvent = (e: Event)=> {

    const wrapper = ReactDOM.findDOMNode(this.refParent.current)
    const node = ReactDOM.findDOMNode(this.refChildren.current);
    const dropdown = ReactDOM.findDOMNode(this.refDropdown.current);
    const {open} = this.state;

    console.log(e.target)
    if (node && node instanceof HTMLElement) {
      if (node.contains(e.target) || dropdown.contains(e.target) || wrapper.contains(e.target)) {
        const rectChild = this.getPositionElement(node);
        const rectParent = this.getPositionElement(wrapper);
        const { width, height } = this.realElement(dropdown);

        const {top, left } = this.getRealPosition({rectChild, rectParent, width, height});

        if(open) {
          console.log("close hehe")
          // setTimeout(()=>{
          //   this.resetDropdown()
          // }, 150)
        }
        else {
          this.setState({
            top,
            left,
            // width,
            // height,
            open: true
          })
        }
      } else {
        console.log("close hehe")

        // this.resetDropdown();
      }


    }
  }

   realElement = (el: HTMLElement) => {
    const clone = el.cloneNode(true);

    clone.style.display = "block";
    clone.style.top = "-9999px";
    clone.style.left = "-9999px";
    document.body.appendChild(clone);
    const height = clone.offsetHeight;
    const width = clone.offsetWidth;

    clone.remove();
    return {
      width,
      height
    };
  }

  getPositionElement = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();

    const height = el.offsetHeight || el.clientHeight;
    const width = el.offsetWidth || el.clientWidth;

    return {
      top: rect.top,
      left: rect.left,
      height,
      width
    }
  }

  getRealPosition = ({rectChild, rectParent, width, height}) => {

    const {position} = this.props;

    let top = 0;
    let left = 0;
    switch (position) {
      case 'bottomLeft':
        top = rectChild.top - rectParent.top + rectChild.height + 10;
        left = rectChild.left - rectParent.left;
        break;
      case 'topLeft':
        top = rectChild.top - height -rectParent.top - 10;
        left = rectChild.left - rectParent.left;
        break;
      case 'bottomRight':
        top = rectChild.top - rectParent.top + rectChild.height + 10;
        left = rectChild.left - rectParent.left - width + rectChild.width;
        break;
      case 'topRight':
        top = rectChild.top - height -rectParent.top - 10;
        left = rectChild.left - rectParent.left - width + rectChild.width;
        break;
      case 'bottomCenter':
        top = rectChild.top - rectParent.top + rectChild.height + 10;
        left = rectChild.left - rectParent.left - width/2 + rectChild.width/2;
        break;
      case 'topCenter':
        top = rectChild.top - height -rectParent.top - 10;
        left = rectChild.left - rectParent.left - width/2 + rectChild.width/2;
        break;
      default:
        return {
          top,
          left
        }

    }

    return {
      top,
      left
    }
  }

  onMouseEnter = (e) => {
    this.handleEvent(e);
  }

  onMouseLeave = (e) => {
   console.log("Da roi")
    setTimeout(()=>{

        this.resetDropdown()

    }, 0)
  }

  onMouseLeaveChild = (e) => {
    console.log(e.target)

        setTimeout(()=>{
          const node = ReactDOM.findDOMNode(this.refChildren.current);

          // if(node.isEqualNode(e.target)){
          //   return
          // }
            // this.resetDropdown()
          //
          // console.log(e.target)
          // if (node && node instanceof HTMLElement) {
          //   if (node.contains(e.target) || dropdown.contains(e.target) || wrapper.contains(e.target)) {
          //     const rectChild = this.getPositionElement(node);
          //     const rectParent = this.getPositionElement(wrapper);
          //     const { width, height } = this.realElement(dropdown);
          //
          //     const {top, left } = this.getRealPosition({rectChild, rectParent, width, height});
          //
          //     if(open) {
          //       console.log("close hehe")
          //       // setTimeout(()=>{
          //       //   this.resetDropdown()
          //       // }, 150)
          //
          //       this.resetDropdown();
          //     }
          //     else {
          //       this.setState({
          //         top,
          //         left,
          //         // width,
          //         // height,
          //         open: true
          //       })
          //     }
          //   } else {
          //     // console.log("close hehe")
          //     this.resetDropdown();
          //
          //
          //   }
          //
          //
          // }

        }, 0)
  }





  render(){
    const {
      children,
      content,
      ...rest
    } = this.props;
    return (
      <StyledDropdownWrapper
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        ref={this.refParent} style={{display: "flex"}}>
        <div style={{marginBottom: 20}}>
          {
            React.Children.count(children) === 1
              ? <children.type

                {...children.props}
                ref={this.refChildren}/>
              : null
          }
        </div>

       <StyledDropdown ref={this.refDropdown} {...this.state}>
         {content}
       </StyledDropdown>
     </StyledDropdownWrapper>
    )
  }
}

export default Dropdown
