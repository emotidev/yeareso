import Head from "next/head";
import Header from "./header";
import { UserProfile } from "@auth0/nextjs-auth0";
import Link from "next/link";

const Layout = ({
  user,
  loading = false,
  children,
}: {
  user?: UserProfile;
  loading?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Head>
        <title>Yeareso</title>
      </Head>

      <div className="min-h-screen w-screen">
        <Header user={user} loading={loading} />
        <main>
          {!user && !loading ? (
            <div className="flex-col bg-white lg:relative">
              <div className="flex flex-grow flex-col min-h-full">
                <main className="flex flex-grow flex-col bg-white">
                  <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
                    <div className="my-auto flex-shrink-0 py-16 sm:py-32">
                      <p className="text-base font-semibold text-indigo-600">
                        401
                      </p>
                      <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Not Logged In
                      </h1>
                      <p className="mt-2 text-base text-gray-500 max-w-md">
                        What a minute, who are you? This application requires you to be sign in because we can't allow Hackers (like 404) to keep our users from completing their new year goals
                      </p>
                      <div className="mt-6">
                        <Link
                          href="/api/auth/login"
                          className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Sign in?
                          <span aria-hidden="true"> &rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </main>
                <footer className="flex-shrink-0 bg-gray-50">
                  <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <nav className="flex space-x-4">
                      <Link
                        href="https://yeareso.club"
                        className="text-sm font-medium text-gray-500 hover:text-gray-600"
                      >
                        Back To Main Website
                      </Link>
                      <span
                        className="inline-block border-l border-gray-300"
                        aria-hidden="true"
                      />
                      <Link
                        href="https://twitter.com/krshkun"
                        className="text-sm font-medium text-gray-500 hover:text-gray-600"
                      >
                        Twitter
                      </Link>
                    </nav>
                  </div>
                </footer>
              </div>
              <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://flukyfeed.com/wp-content/uploads/2020/07/wait-a-minute-696x523.jpg"
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div className="min-h-full w-screen">{children}</div>
          )}
        </main>
      </div>
    </>
  );
};

export default Layout;
