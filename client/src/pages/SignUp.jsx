import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className='max-w-lg p-3 mx-auto'>
      <h1 className='text-2xl font-bold text-center'>SignUp</h1>
      <form className='text-slate-300 flex flex-col content-center p-5 gap-4'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-200 p-3 rounded-lg '  />
        <input type="text" placeholder='Email' className='bg-slate-200 p-3 rounded-lg'  />
        <input type="text" placeholder='Password' className='bg-slate-200 p-3 rounded-lg'  />
        <button className='uppercase rounded-lg bg-red-800 text-white p-2 hover:opacity-80 disabled:opacity-95'>Submit</button>
      </form>
      <div className='text-center gap-3'>
        <p>Have an Account?</p>
        <Link to='/SignIn'><span className='text-blue-600 '>SignIn</span></Link>
      </div>
    </div>
  )
}
export default SignUp;