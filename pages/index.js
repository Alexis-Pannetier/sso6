import { signIn, signOut, useSession } from "next-auth/react";

import Head from "next/head";
import Image from "next/image";
import sausage from "../res/images/sausage.gif";

export default function Home() {
  const { data: session } = useSession();
  const sausageImage = {
    objectFit: "contain",
    border: "1px solid white",
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="center">
        <h1>SSO6</h1>
        <div className="row">
          <Image src={sausage} alt="sausage logo" {...sausageImage} />
          <Image src={sausage} alt="sausage logo" {...sausageImage} />
          <Image src={sausage} alt="sausage logo" {...sausageImage} />
        </div>
        {session ? (
          <>
            <div className="user-details">
              {session.user.image && (
                <div className="user-avatar">
                  <Image
                    src={session.user.image}
                    height={50}
                    width={50}
                    objectFit="cover"
                    alt="photo de profil"
                  />
                </div>
              )}
              {session.user.name && (
                <p>
                  Signed in as <strong>{session.user.name}</strong>
                </p>
              )}
              {session.user.email && <p>{session.user.email}</p>}
            </div>
            <button className="button" onClick={() => signOut()}>
              Sign out
            </button>
          </>
        ) : (
          <>
            <button className="button" onClick={() => signIn()}>
              Sign in
            </button>
            <p>
              {`Cette application récupère seulement le pseudo, adresse email et
              l'avatar, rien n'est stocké`}
            </p>
          </>
        )}
      </main>

      <footer></footer>
    </div>
  );
}
