import React from "react"
import PropTypes from "prop-types"

class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: props.checked,
    }
  }

  handleInputChange = (event) => {
    const { onToggle } = this.props
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    onToggle()

    this.setState({
      [name]: value
    });
  }

  render() {
    const { isChecked } = this.state
    console.log(isChecked)
    return (
      <div className="toggle">
        <input
          name="isChecked"
          className="toggle-input"
          type="checkbox"
          checked={isChecked}
          onChange={this.handleInputChange}
        />
        <div className="toggle-bg" />
        <div className="toggle-switch">
          <div className="toggle-switch-figure" />
          <div className="toggle-switch-figureAlt" />
        </div>
      </div>
    )
  }
}

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default Switch
