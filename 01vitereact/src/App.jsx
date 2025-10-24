import Chai from "./chai";

function App() {
  const username = "SanjanaGhorpade"

  return (
    // We cant add two components in return statement. We can wrap it in <div> and can add multiple statements in div but can't add in return
    //  statement directly. In react it is called as fragment
    <>
    <Chai/>
    <h1>Hello World! {username}</h1>
    <p>This is paragraph</p>
    </>
  )
}

export default App

