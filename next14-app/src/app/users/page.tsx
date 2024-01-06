"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "sonner";
import { toast as sonnerToast } from "sonner";
import { userStore } from "@/store/user";

//react-toastify, flowbite-react,sonner
const Users = () => {
  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const user = userStore((state: any) => state.user);
  const updateUser = userStore((state: any) => state.updateUser);
  const fetchUserFromStore = userStore((state:any) => state.fetchUser);
  const [loading, setLoading] = useState(false);
  const sub = userStore.subscribe(() => {
    console.log("state of store changed", user);
  });
  const fetchDataFromApi = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/users", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (response) {
        const data = await response.json();
        console.log(data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Users</h1>
      <h5>state from store: {user.full_name}</h5>
      <button
        onClick={() => updateUser({
            full_name: "Mehmood Qasir"
        })}
        style={{ backgroundColor: "#3498db", color: "yellow" }}
      >
        Update User
      </button>
      <br />
      <br />
      <button
        onClick={() => fetchUserFromStore(12)}
        style={{ backgroundColor: "#3498db", color: "yellow" }}
      >
        Fetch User
      </button>
      <br />
      {/* <p>{fetchUser}</p> */}
      <br />
      <button
        style={{ backgroundColor: "#3498db", color: "yellow" }}
        onClick={() => fetchDataFromApi()}
      >
        Call API
      </button>
      <br />
      <br />
      <button
        onClick={notify}
        style={{ backgroundColor: "blue", color: "yellow" }}
      >
        Notify!
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <br />
      <button
        onClick={() => sonnerToast.error("This is a sonner toast")}
        style={{ backgroundColor: "#3498db", color: "yellow" }}
      >
        Render my toast
      </button>
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            error: "bg-red-400",
            success: "text-green-400",
            warning: "text-yellow-400",
            info: "bg-blue-400",
          },
        }}
      />
    </>
  );
};

export default Users;
