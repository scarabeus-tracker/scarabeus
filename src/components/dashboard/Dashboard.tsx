import { Button } from '@mui/material'
import { useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import { AuthContext, logoutUser } from '../../contexts/auth-context/AuthContext'

function Dashboard() {

  const userContext = useContext(AuthContext);

  const navigate = useNavigate();

  if (!userContext?.activeUser) {
    return <Navigate to='/' />
  }

  const handleLogout = async () => {
    try {
      await logoutUser();
      userContext?.setActiveUser(null);
      navigate('/')
    } catch (err: any) {
      console.log(err.message)
    }
  }

  return (
    <>
      <h1>Dashboard</h1>
      <div>User: {userContext && userContext.activeUser ? userContext.activeUser.email : null}</div>
      <Button 
        variant='contained'
        onClick={handleLogout}
        >Logout
      </Button>
    </>
  )
}
export default Dashboard