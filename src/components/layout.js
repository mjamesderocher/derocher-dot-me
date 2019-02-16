import React from 'react'
import { Link } from 'gatsby'
import ThemeSwitch from '../components/ThemeSwitch'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link
            to={'/'}
          >
            Derocher.me
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link
            to={'/'}
          >
            Derocher.me
          </Link>
        </h3>
      )
    }
    return (
      <React.Fragment>
        <ThemeSwitch />
        <main>
          {header}
          <article classname="hello">
            {children}
          </article>
        </main>
      </React.Fragment>
    )
  }
}

export default Template
