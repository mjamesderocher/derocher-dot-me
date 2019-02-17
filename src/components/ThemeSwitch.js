import React from 'react'

class ThemeSwitch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <input type="radio" id="dark-theme" name="theme" value="dark-theme"/>
        <label for="dark-theme">Dark Theme</label>
        <input type="radio" id="light-theme" name="theme" value="light-theme" checked/>
        <label for="light-theme">Light Theme</label>
      </React.Fragment>
    )
  }
}

export default ThemeSwitch
