import { useUser } from "@auth0/nextjs-auth0";
import { useRef } from "react";

export default function Dashboard() {
  const { user } = useUser();

  const phoneRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen py-2 text-center">
      <main>
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-bold">Hey 👋 {user?.name}</h1>
            <p className="mt-3 text-2xl">
              Enter your phone number to receive a text message with your resolution
            </p>
          </div>
          <form className="flex h-max flex-col items-center justify-center w-full flex-1 px-20 text-center"
            onSubmit={async (e) => {
              e.preventDefault();
              // check if phone number is valid
              const phone = phoneRef.current.value;
              if (phone.match(/^[0-9]{12}$/) === null) {
                alert("Please enter a valid phone number, include country code");
                return;
              }
              // send phone number to database
              const res = await fetch("/api/db", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ phone }),
              });

              if (res.status === 200) {
                alert("Phone number saved");
              } else {
                alert("Error saving phone number");
              }
            }}
          >
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              className="w-1/2 p-3 mt-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ref={phoneRef}
            />
            <button
              type="submit"
              className="w-1/2 p-3 mt-4 text-xl text-white bg-blue-500 rounded-md focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
