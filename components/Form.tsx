import Link from "next/link";
import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Headertest from "./Headertest";
import TextField from "@mui/material/TextField";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("2023-01-01");
  const [open,setOpen] = useState(false);

  const router = useRouter();
  const { data: session } = useSession();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    setOpen(true);
    const creator = session?.user?.email;
    const deployedUrl = "https://next-meetup-2-0.vercel.app";

    //TODO: remove this line before deployment
    const url = (deployedUrl) + "/api/new-meetup";

    const payload = {
      title,
      description,
      address,
      image,
      creator,
      date,
    };
    // console.log(payload);
    try {
      const { data } = await axios({
        url: url,
        method: "POST",
        data: payload,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    router.push("/");
  };

  return (
    <>
      <Headertest />
      <div className="bg-rose-100 rounded mx-auto max-w-md mt-20">
        <form
          onSubmit={handleSubmit}
          className="p-4 flex flex-col space-y-6"
          action=""
        >
          <div>
            <label>
              {" "}
              <h1 className="font-semibold uppercase text-slate-600 tracking-widest">
                Title
              </h1>{" "}
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className={`bg-rose-100 ${
                title ? "border-gray-400" : "border-red-500"
              } border-2 rounded outline-none px-1 text-slate-600`}
              type="text"
              value={title}
            />
          </div>
          <div>
            <label>
              {" "}
              <h1 className="font-semibold uppercase text-slate-600 tracking-widest">
                Description
              </h1>{" "}
            </label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              className={`bg-rose-100 ${
                description ? "border-gray-400" : "border-red-500"
              } border-2 rounded outline-none px-1 text-slate-600`}
              type="text"
              value={description}
            />
          </div>
          <div>
            <label>
              {" "}
              <h1 className="font-semibold uppercase text-slate-600 tracking-widest">
                Address
              </h1>{" "}
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              className={`bg-rose-100 ${
                address ? "border-gray-400" : "border-red-500"
              } border-2 rounded outline-none px-1 text-slate-600`}
              type="text"
              value={address}
            />
          </div>
          <div>
            <label htmlFor="image">
              {" "}
              <h1 className="font-semibold uppercase text-slate-600 tracking-widest">
                Image
              </h1>{" "}
            </label>
            <input
              onChange={(e) => setImage(e.target.value)}
              id="image"
              placeholder="Paste the image URL here"
              className={`bg-rose-100 ${
                image ? "border-gray-400" : "border-red-500"
              } border-2 rounded outline-none px-1 text-slate-600`}
              type="text"
              value={image}
            />
          </div>
          <div>
            <TextField
              onChange={(e) => setDate(e.target.value)}
              id="date"
              value={date}
              label="Date of Meetup"
              type="date"
              color="warning"
              // defaultValue={new Date().toISOString().slice(0, 10)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          {title && description && address && image ? (
            <button
              className="text-rose-500 w-full border border-rose-500 hover:bg-rose-500 hover:text-white active:bg-rose-600 font-bold uppercase px-8 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-center"
              type="submit"
            >
              Add Meetup
            </button>
          ) : (
            <p className="text-red-500 text-center font-semibold text-lg bg-red-200 py-1 animate-pulse">
              Please fill all the details
            </p>
          )}
        </form>

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Meetup Added Successfully
        </Alert>
      </Snackbar>
      </div>
    </>
  );
}

export default Form;
