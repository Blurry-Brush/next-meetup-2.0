import axios from "axios";
import Link from "next/link";
import React from "react";
import { Data } from "../typings";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

interface Props {
  meetup: Data;
}

export default function Card({ meetup }: Props) {
  const router = useRouter();
  const { data: session } = useSession();

  const disabled = (session?.user?.email === meetup.creator) || (session?.user?.email === "yuvrajsingh1704@gmail.com");

  const deployedUrl = "https://next-meetups-production.up.railway.app";

  const url = (deployedUrl) + "/api/delete-meetup";
  // console.log("url is @card.jsx", url);

  const handleDelete = async () => {
    // console.log(meetup);
    try {
      const { data } = await axios({
        url: url,
        method: "DELETE",
        data: {
          id: meetup._id,
        },
      });
      console.log(data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center md:px-4 py-5">
      <div className="max-w-lg w-3/4 overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
        <img
          src={meetup.image}
          alt="place_image"
          className="h-64 w-full object-cover"
        />
        <div className="p-5">
          <p className="text-center font-semibold text-medium mb-3 text-gray-700">
            {meetup.title}
          </p>
          <p className="text-center italic text-medium mb-5 text-gray-700">
            {meetup.address}
          </p>
          <div className="flex flex-col md:flex-row">
            <Link
              href={`/meetup/${meetup._id}`}
              className="text-green-500 w-full border border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase px-8 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-center"
              type="button"
            >
              Show Details
            </Link>
            <button
              disabled={!disabled}
              onClick={handleDelete}
              className="text-rose-500 disabled:opacity-25 disabled:cursor-not-allowed w-full border border-rose-500 hover:bg-rose-500 hover:text-white active:bg-rose-600 font-bold uppercase px-8 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-center"
              type="button"
            >
              Delete Meetup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Path: pages\ourMeetup.tsx
