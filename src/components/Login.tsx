import { useLoginForm } from '../hooks/useLoginForm';

const Login = () => {
  const {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleSubmit,
  } = useLoginForm();

  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url(/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <form className='flex flex-col gap-5 pt-9 px-10 pb-10 rounded-2xl bg-white/45 backdrop-blur-md' onSubmit={handleSubmit}>
        <div>
          <div className='flex justify-between items-end'>
            <div className='text-md text-stone-800'>Email</div>
            {error === 'Email is required' && <p className='text-rose-500 text-sm'>required</p>}
          </div>
          <input
            className='input input-bordered border-stone-100 flex items-center gap-2 shadow-sm bg-white/50'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className='flex justify-between items-end'>
            <div className='text-md text-stone-800'>Password</div>
            {error === 'Password is required' && <p className='text-rose-500 text-sm'>required</p>}
          </div>
          <input
            className='input input-bordered border-stone-100 flex items-center gap-2 shadow-sm bg-white/50'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='btn mt-3'
        >
          Login
          <span className='loading loading-spinner loading-sm'/>
        </button>
      </form>
    </div>
  );
};

export default Login;
