// Conditional Rendering = alloes you to control what gets rendered in your app 
                        // based on certain condition (show, hide, change components)

import UserGreeting from "./UserGreeting"


function App() {

  return (
    <>
    <UserGreeting isLoggedIn={false} username='mukund'/>
     
    </>
  )
}

export default App
