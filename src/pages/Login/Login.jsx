import { useRef, useState } from "react";
import Header from "../Header/Header";
import { checkValidData } from "../../utils/validate";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const email = useRef(null)
  const password = useRef(null)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const onBtnClick = (e) => {
     checkValidData()
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BG_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Header />

      <div className="form-container bg-black p-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          action=""
          className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            type="text"
            name="email"
            placeholder="Email or phone number"
            className="p-4 my-4 w-full bg-gray-700"
            
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />

          <button
            className="px-4 py-2 bg-red-600 cursor-pointer"
            onClick={onBtnClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
