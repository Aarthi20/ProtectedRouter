import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const jtwToken = Cookies.get('jwt_token')
  if (jtwToken === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}
export default ProtectedRoute
