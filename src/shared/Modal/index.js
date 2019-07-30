import ReactModal from 'react-modal';
import React, { Component } from 'react';
import Draggable from "react-draggable";
import PropTypes from 'prop-types';
import {
    TitleBar,
    Content,
    CrossButton,
    MinimizeButton,
    MaximizeButton,
    ButtonContainer,
    ActualContent
 } from './elements';
//  import './Modal.css';

 const styles = {
    overlay: {
        position: 'fixed',
        top: 40,
        left: 40,
        height: '50%',
        width: '50%',
        backgroundColor: 'transparent'
      },
      content: {
        // position: 'absolute',
        // top: '40px',
        // left: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        borderRadius: '4px',
        outline: 'none',
        padding: '0px',
        overflow: 'hidden',
      }
  };
class Modal extends Component {
    static propTypes = {
        /* Inline styling, use when absolutely necessary */
        style: PropTypes.object,
        /* Modal content */
        children: PropTypes.any,
        /* Modal content classNames */
        className: PropTypes.string,
        /* On close */
        onRequestClose: PropTypes.func,
        /* Whether to show close button or not */
        hideCloseButton: PropTypes.bool,
        /* Classname of overlay/backdrop */
        overlayClassName: PropTypes.string,
        /* If true modal will close on backdrop/overlay's click, true by default */
        shouldCloseOnOverlayClick: PropTypes.bool,
        /* Whether escape key should close the modal or not */
        shouldCloseOnEscape: PropTypes.bool,
        /* Cross button classname */
        crossButtonClassName: PropTypes.string,
    };

    static defaultProps = {
        shouldCloseOnEscape: true,
    };

    state = {
        isOpen: true,
        customStyles: styles,
        shouldShowMaximize: true,
        shouldShowRestore: false
    }

    handleCloseButtonClick = () => {    

        this.setState({
            isOpen: false,
        })

    }

    handleMaximizeButtonClick = () => {
        this.setState((prevState) => ({
            customStyles : {
                overlay: {
                    ...prevState.customStyles.overlay,
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0
                },
                content: {
                    ...prevState.customStyles.content,
                }
            },
            shouldShowMaximize: false,
            shouldShowRestore: true
          }))
    }

    handleRestore = () => {
        this.setState({
            customStyles: styles,
            shouldShowMaximize: true,
            shouldShowRestore: false
        })
    }

    handleMinimizeButtonClick = () => {
        // this.setState((prevState) => ({
        //     customStyles : {
        //         overlay: {
        //             ...prevState.customStyles.overlay,
        //             width: '0%',
        //             height: '0%'
        //         },
        //         content: {
        //             ...prevState.customStyles.content,
        //         }
        //     }
        //   }))
        this.props.closeModal();
    }

    setdefaultWidth = () => {

    }

    render() {
        const {
            children,
            ...props
        } = this.props;

        const {
            shouldShowMaximize,
            shouldShowRestore
        } = this.state;


        return (
            <ReactModal
              isOpen={this.props.isOpen}
              contentLabel="Modal"
              style={this.state.customStyles}
              {...props}
            >
 
                <TitleBar>
                    <ButtonContainer>
                        <CrossButton onClick={this.props.closeModal}/>
                        <MinimizeButton onClick={this.handleMinimizeButtonClick}/>
                        {
                            shouldShowMaximize ? <MaximizeButton onClick={this.handleMaximizeButtonClick}/> : null
                        }
                        {
                            shouldShowRestore ? <MaximizeButton onClick={this.handleRestore}/> : null
                        }
                    </ButtonContainer>
                </TitleBar>
                <Content>
                    {children}
                </Content>
            </ReactModal>
        );
    }
}

export default Modal;
