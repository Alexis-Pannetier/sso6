import React, { Component } from "react";

import { signIn } from "next-auth/react";

export default class Unlogged extends Component {
  render() {
    return (
      <>
        <button className="button" onClick={() => signIn()}>
          <strong>Sign in</strong>
        </button>
        <p>
          {`Cette application affiche seulement le pseudo, adresse email et
          l'avatar, rien n'est stocké`}
        </p>
      </>
    );
  }
}
