import React, { Component, Fragment } from 'react';
import PokedexTrigger from "./PokedexTrigger"
import PokedexContent from './PokedexContent';

class Pokedex extends Component {
  state = { isOpen: false };

  toggleScrollLock = () => document.querySelector('html').classList.toggle('lock-scroll');

  onOpen = () => {
    this.setState({ isOpen: true }, () => {
      this.closeButtonNode.focus();
    });
    this.toggleScrollLock();
  };

  onClose = () => {
    this.setState({ isOpen: false });
    this.openButtonNode.focus();
    this.toggleScrollLock();
  };

  onKeyDown = ({ keyCode }) => keyCode === 27 && this.onClose();

  onClickAway = (e) => {
    if (this.modalNode && this.modalNode.contains(e.target)) return;
    this.onClose();
  };

  render() {
    const { isOpen } = this.state;
    const { ariaLabel, children, triggerText, role } = this.props;
    return (
      <Fragment>
        <PokedexTrigger
          onOpen={this.onOpen}
          buttonRef={n => this.openButtonNode = n}
          text={triggerText}
        />
        {isOpen &&
          <PokedexContent
            ariaLabel={ariaLabel}
            content={children}
            buttonRef={n => this.closeButtonNode = n}
            modalRef={n => this.modalNode = n}
            onClose={this.onClose}
            onClickAway={this.onClickAway}
            onKeyDown={this.onKeyDown}
            role={role}
          />
        }
      </Fragment>
    );
  }
}

export default Pokedex;
