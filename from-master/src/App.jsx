
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import HookFrom from './components/HookFrom/HookFrom'
// import RefFrom from './components/RefFrom/RefFrom'
// import ReusableFrom from './components/ReusableFrom/ReusableFrom'
// import SimpleFrom from './components/SimpleFrom/SimpleFrom'
// import StateFulFrom from './components/StateFulFrom/StateFulFrom'

function App() {

  // const handleSignUpFrom = data => {

  //   console.log('sign up form', data);
  // }

  // const handleUpdateFrom = data => {

  //   console.log('update from', data);
  // }

  return (
    <>
      <h1>From Master</h1>

       <Grandpa></Grandpa>

      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StateFulFrom></StateFulFrom> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookFrom></HookFrom> */}
      {/* <ReusableFrom fromTitle='Sign Up'
        submitBtnText='Sign Up'
        handleSubmit={handleSignUpFrom}>
          <div>
            <h2>Sign Up</h2>
            <p>Please sign up right now</p>
          </div>
      </ReusableFrom>
      <ReusableFrom
        fromTitle='update Profile'
        submitBtnText='Update'
        handleSubmit={handleUpdateFrom}>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile update </p>
          </div>
      </ReusableFrom> */}
    </>
  )
}

export default App
