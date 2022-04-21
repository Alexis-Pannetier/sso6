import { signIn, signOut, useSession } from "next-auth/react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { playConfetti } from "../component/Confetti";
import sausage from "../res/images/sausage.gif";

export default function Home() {
  const { data: session } = useSession();

  const sausageImage = {
    objectFit: "contain",
    height: 250,
    width: 250,
  };

  session && playConfetti();

  // console.log("session", session);

  return (
    <div className="page">
      <Head>
        <title>~ SSO6 ~</title>
        <meta name="description" content="Schoole poject | Single Sign-On" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="content">
        <div className="header">
          <h1>SSO6</h1>
        </div>
        <div className="row">
          <Image
            src={sausage}
            width="100px"
            alt="sausage logo"
            {...sausageImage}
          />
          <Image
            src={sausage}
            width="100px"
            alt="sausage logo"
            {...sausageImage}
          />
          <Image
            src={sausage}
            width="100px"
            alt="sausage logo"
            {...sausageImage}
          />
        </div>
        {session ? (
          // Connected
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
          // Disconnected
          <>
            <button className="button" onClick={() => signIn()}>
              <strong>Sign in</strong>
            </button>
            <p>
              {`Cette application affiche seulement le pseudo, adresse email et
              l'avatar, rien n'est stocké`}
            </p>
          </>
        )}
      </main>

      <footer className="footer text-center">
        <span>
          <strong>
            Réalisé par{" "}
            <Link href="https://github.com/Alexis-Pannetier">Alexis</Link> et{" "}
            <Link href="https://github.com/AlexisNP">Alexis</Link>
          </strong>
        </span>
      </footer>
    </div>
  );
}
