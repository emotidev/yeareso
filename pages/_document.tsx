import { useUser } from "@auth0/nextjs-auth0";
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
