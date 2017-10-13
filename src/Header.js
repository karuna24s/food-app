import React from 'react';
import PropTypes from 'prop-types'

class Header extends React.Component{
  render(){
      let title = this.props.title
      let desc = this.props.desc
      return(
          <div className="jumbotron">
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
      )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
}

Header.defaultProps = {
  title:"Food App",
  desc:"A Convenient Way For Food Shopping",
}

export default Header
