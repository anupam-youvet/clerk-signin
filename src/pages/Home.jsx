import * as React from "react";
import { useSignIn, useSignUp } from "@clerk/clerk-react";

export default function Home() {
  const { signIn } = useSignIn();
  const { signUp } = useSignUp();

  if (!signIn || !signUp) return null;

  const signInWithSAML = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    signIn
      .authenticateWithRedirect({
        identifier: email,
        strategy: "saml",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.errors);
        console.error(err, null, 2);
      });
  };

  return (
    <form onSubmit={(e) => signInWithSAML(e)}>
      <input type="email" name="email" placeholder="Enter email address" />
      <button>Sign in with SAML</button>
    </form>
  );
}
