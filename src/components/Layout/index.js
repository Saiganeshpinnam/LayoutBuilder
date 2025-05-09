/* Write your CSS here */
import Header from '../Header'

import Body from '../Body'

import Footer from '../Footer'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Layout = () => (
  <div className="layout-container">
    <Header />
    <Body />
    <Footer />
  </div>
)

export default Layout
