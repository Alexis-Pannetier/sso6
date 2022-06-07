import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logged from "../component/Logged";
import Unlogged from "../component/Unlogged";
import { playConfetti } from "../component/Confetti";
import sausage from "../res/images/sausage.gif";
import { useSession } from "next-auth/react";

export default function Home() {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
  });

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
        {session && status === "authenticated" ? (
          <Logged session={session} />
        ) : (
          <Unlogged />
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
