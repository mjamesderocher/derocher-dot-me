import React from 'react'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div style={{display: 'flex',}}>
        <img
          src={profilePic}
          alt={`Matthew Derocher`}
          style={{
            width: '50px',
            height: '50px',
            marginRight: '10px',
          }}
        />
        <div>
        <p>
          Written by <strong>Matthew James Derocher</strong> who writes about biblical subjects and teaches in a Bible college in Tanzania, Africa.{' '}
          <a href="https://twitter.com/mjamesderocher">
            You can follow him on Twitter
          </a>
        </p>
		</div>
      </div>
    )
  }
}

export default Bio
