import React from "react";
import Card from "./Card";
import { Data } from "../typings";
import axios from "axios";
import { Skeleton } from "@mui/material";

interface Props {
  meetups: Data[];
}

export default function MeetupsList({ meetups }: Props) {
  return (
    <div>
      {meetups?.map((meetup) => {
        return meetup ? (
          <Card key={meetup._id} meetup={meetup} />
        ) : (
          <Skeleton variant="circular">
            <Card  meetup={meetup} />
          </Skeleton>
        );
      })}
    </div>
  );
}
