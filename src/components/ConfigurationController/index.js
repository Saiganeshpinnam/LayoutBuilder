// Write your code here
import {Component} from 'react'

import Layout from '../Layout'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class ConfigurationController extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}
  onToggleShowContent = prevState => {
    this.setState({
      showContent: !prevState.showContent,
    })
  }
  onToggleShowLeftNavbar = prevState => {
    this.setState({
      showLeftNavbar: !prevState.showLeftNavbar,
    })
  }
  onToggleShowRightNavbar = prevState => {
    this.setState({
      showRightNavbar: !prevState.showRightNavbar,
    })
  }

  render() {
    return (
      <div className="app-bg-container">
        <ConfigurationContext.Provider
          value={{
            showContent: true,
            showLeftNavbar: true,
            showRightNavbar: true,
            onToggleShowContent: this.onToggleShowContent,
            onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
            onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          }}
        >
          <ConfigurationContext.Consumer>
            {value => {
              const {
                showContent,
                showLeftNavbar,
                showRightNavbar,
                onToggleShowContent,
                onToggleShowLeftNavbar,
                onToggleShowRightNavbar,
              } = value
              const onToggleContent = event => {
                onToggleShowContent(event.target.value)
              }
              const onToggleLeftNavbar = event => {
                onToggleLeftNavbar(event.target.value)
              }
              const onToggleRightNavbar = event => {
                onToggleRightNavbar(event.target.value)
              }
              ;<div className="config-bg-container">
                <h1 className="layout-heading">Layout</h1>
                <ul>
                  <li onClick={onToggleContent}>
                    <input type="checkbox" id="content" />
                    <label htmlFor="content">Content</label>
                  </li>
                  <li onClick={onToggleLeftNavbar}>
                    <input type="checkbox" id="left-navbar" />
                    <label htmlFor="left-navbar">Left Navbar</label>
                  </li>
                  <li onClick={onToggleRightNavbar}>
                    <input type="checkbox" id="right-navbar" />
                    <label htmlFor="right-navbar">Right Navbar</label>
                  </li>
                </ul>
              </div>
            }}
          </ConfigurationContext.Consumer>

          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default ConfigurationController
