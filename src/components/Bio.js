import React from 'react'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div>
        <img
          src={profilePic}
          alt={`Matthew Derocher`}
        />
        <p>
          Written by <strong>Matthew James Derocher</strong> who writes about biblical subjects and teaches in a Bible college in Tanzania, Africa.{' '}
          <a href="https://twitter.com/mjamesderocher">
            You can follow him on Twitter
          </a>
        </p>
        <script src="https://donorbox.org/install-popup-button.js" type="text/javascript" defer></script>
<a class="dbox-donation-button" href="https://donorbox.org/partner-with-me" style="background:#007acc; color: #fff;text-decoration: none;font-family: Verdana,sans-serif;display: inline-block;font-size: 16px;padding: 15px 38px 15px 38px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; box-shadow: 0 1px 0 0 #00558e; text-shadow: 0 1px rgba(0, 0, 0, 0.3);" >Donate</a>
      </div>
    )
  }
}

export default Bio
