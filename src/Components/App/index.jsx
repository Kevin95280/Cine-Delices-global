import LoginForm from "../AccountForm/LoginForm";
import SignupForm from "../AccountForm/SignupForm";
import AppRouter from "../Router";

export default function App() {
  // return <AppRouter />;
  // const emailInputRef = useRef()
  // const passwordInputRef = useRef()

  // function handleLoginForm() {
  //   const email = emailInputRef.current.value
  //   const password = passwordInputRef.current.value
  //   const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up

  //   fetch('https://api.sampleapis.com/beers/ale', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       password: hashedPassword,
  //     }),
  //   })
  // }
  return <LoginForm />;

}