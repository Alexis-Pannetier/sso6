import React, { Component } from "react";

import Image from "next/image";
import PropTypes from "prop-types";
import { signOut } from "next-auth/react";

export default class Logged extends Component {
  static defaultProps = {
    session: null,
  };

  static propTypes = {
    session: PropTypes.any,
  };

  render() {
    const { session } = this.props;
    return (
      <>
        <div className="user-details">
          {session?.user.image && (
            <div className="user-avatar">
              <Image
                src={session?.user.image}
                height={50}
                width={50}
                objectFit="cover"
                alt="photo de profil"
              />
            </div>
          )}
          {session?.user.name && (
            <p>
              Signed in as <strong>{session?.user.name}</strong>
            </p>
          )}
          {session?.user.email && <p>{session?.user.email}</p>}
        </div>
        <button className="button" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
}
