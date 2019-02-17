import React from 'react'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div>
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
	        <p>
	          Written by <strong>Matthew James Derocher</strong> who writes about biblical subjects and teaches in a Bible college in Tanzania, Africa.{' '}
	          <a href="https://twitter.com/mjamesderocher">
	            You can follow him on Twitter
	          </a>
	        </p>
		</div>
		<script src="https://donorbox.org/install-popup-button.js" type="text/javascript" defer></script>
		<div style={{width: '100%', textAlign: 'center',}}>
			<a className="dbox-donation-button" style={{display: 'inline-block', backgroundColor: '#007acc', color: '#fff', textDecoration: 'none', padding: '.5rem 2rem',}} href="https://donorbox.org/partner-with-me">Donate</a>
      	</div>
      </div>
    )
  }
}

export default Bio
