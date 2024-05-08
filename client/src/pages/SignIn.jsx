import { Link , useNavigate } from "react-router-dom";
import { useState } from 'react'

function SignIn() {

  const [formData, setFormData] = useState({}) 
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e)=>{
    setFormData({ ...formData, [e.target.id] : e.target.value}) 
  }
  // console.log(formData);
  const handleSubmit = async (e)=> {
    e.preventDefault();
    try {
      setLoading(true)
      setError(false)
      const res = await fetch('/api/auth/SignIn',{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log(data);
      setLoading(false)
      if ( data.success === false) {
        setError(true)
        return;
      }
      navigate('/')
    } catch (error) {
      setLoading(false)
      setError(true)
    }

  }

  return (
    <div className='max-w-lg p-3 mx-auto'>
      <h1 className='text-2xl font-bold text-center'>SignIn</h1>
      <form onSubmit={handleSubmit} className='text-slate-300  flex flex-col content-center p-5 gap-4'>
        <input type="email" placeholder='Email' id='email' className='bg-slate-200 p-3 rounded-lg text-black'onChange={handleChange}  />
        <input type="password" placeholder='Password' id='password' className='bg-slate-200 p-3 rounded-lg text-black' onChange={handleChange}  />
        <button disabled={loading} className='uppercase rounded-lg bg-red-800 text-white p-2 hover:opacity-80 disabled:opacity-95'>{loading ? 'Loading...' : 'Sign-In'}</button>
      </form>
      <div className='text-center gap-3'>
        <p>Don't Have an Account?</p>
        <Link to='/SignUp'><span className='text-blue-600 '>Sign-Up</span></Link>
      </div>
      <p className="text-red-700 ml-5">{error && 'Something Went Wrong' }</p>
    </div>
  )
}
export default SignIn;