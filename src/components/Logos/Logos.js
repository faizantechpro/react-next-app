import React from 'react'

function Logos() {
  return (
    <>
    <div className = 'flex flex-col items-center mt-5 md:grid md:grid-cols-5 md:gap-10 xl:gap-32'>
        <img className = 'my-5' src = '/assets/images/Atlassian Logo.png' alt = 'Atlassian' />
        <img className = 'my-5' src = '/assets/images/Slack Logo.png' alt = 'Slack' />
        <img className = 'my-5' src = '/assets/images/Dropbox Logo.png' alt = 'Dropbox' />
        <img className = 'my-5' src = '/assets/images/Shopify Logo.png' alt = 'Shopify' />
        <img className = 'my-5' src = '/assets/images/Google Logo.png' alt = 'Google' />
    </div>
    </>
  )
}

export default Logos