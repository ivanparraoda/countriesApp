import PropTypes from 'prop-types'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='container mx-auto px-4'>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
