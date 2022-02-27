import React from 'react';
import db from "./firebase_config";
import { useAuth0 } from '@auth0/auth0-react';
import { doc, setDoc } from "firebase/firestore";
import LoginButton from "../LoginButton";

export const Create = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { user } = useAuth0();
    const clearInputs = () => {
      alert("hi");
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        let title = data.get("title");
        let description = data.get("description");
        let goal = data.get("goal");
        let author = user['name'];
        let address = data.get("address");

        // Clear input fields
        document.getElementById("title").value = null;
        document.getElementById("description").value = null;
        document.getElementById("goal").value = null;
        document.getElementById("address").value = null;
        
        // Alert user of successful creation
        let message = 'Your project "' + title  + '" with the goal of raising ' + goal + ' ETH has been successfully created!\n\nAuthor: ' + author + '\nAddress: ' + address
        alert(message)
        await setDoc(doc(db, "CrowdFundingProjects", title + "-" + user['sub']), {
            title: title,
            description: description,
            goal: goal,
            author: author,
            address: address
        });
    }


    return (
        !isAuthenticated && (
          <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
            <main className="mt-4 p-4">
              <h1 className="text-xl font-semibold text-gray-700 text-center">
                You must be logged in to create a crowdfunding project
              </h1>
            </main>
            <footer className="p-4">
                <LoginButton>Log In</LoginButton>
            </footer>
          </div>) ||
        isAuthenticated && (
            <form className="m-4" onSubmit={handleCreate}>
        <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
          <main className="mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Create Crowdfunding Project
            </h1>
            <div style={{margin:"25px 17vw 25px 17vw"}}>To raise money through BlockAide, create a crowdfunding project that publishes a public Ethereum address to receive donations. Simply enter the relevant details and hit 'Create'</div>
            <h6>Please note that once your Ethereum address has been set, it cannot be changed!</h6>
            <div className="">
              <div className="my-3">
                <input
                  required
                  id="title"
                  type="text"
                  name="title"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Title"
                />
              </div>
              <div className="my-3">
                <input
                  required
                  id="description"
                  name="description"
                  type="text"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Description"
                />
              </div>
              <div className="my-3">
                <input
                  required
                  id="goal"
                  name="goal"
                  type="number"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Goal (ETH)"
                />
              </div>
              <div className="my-3">
                <input
                  required
                  id="address"
                  name="address"
                  type="text"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="ETH Address IMMUTABLE!"
                />
              </div>
            </div>
          </main>
          <footer className="p-4">
            <button
              type="submit"
              className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
            >
              Create
            </button>
          </footer>
        </div>
      </form>
        )
        
    )
}