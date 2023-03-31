import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Account from './pages/Account';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div>
      <h1>
        Firebase Auth and Context 
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin/>}/> 
          <Route path="/signup" element={<Signup/>}/> 
          <Route path="/account" element={
            <ProtectedRoute>
              <Account/>
            </ProtectedRoute>
          }/> 
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
