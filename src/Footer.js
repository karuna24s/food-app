import React from 'react';
import PropTypes from 'prop-types'

class Footer extends React.Component{
  render(){
      let copyright = this.props.copyright
      return(
          <div>
            <p>{copyright}</p>
          </div>
      )
  }
}

Footer.propTypes = {
  copyright: PropTypes.string,
}

Footer.defaultProps = {
  copyright:"Copyright Karuna Sehgal. All rights reserved.",
}

export default Footer
