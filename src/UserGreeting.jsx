function UserGreeting(props){

    const WelcomeMsg = <h2>Welcome {props.username}</h2>
    const loginPrompt = <h2>please log to continue</h2>

    return(props.isLoggedIn ? WelcomeMsg : loginPrompt)


// return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> :
//                           <h2>please log to continue</h2>
//  )

}
export default UserGreeting