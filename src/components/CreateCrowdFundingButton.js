import React from 'react';
import db from "./firebase_config";
import { useAuth0 } from '@auth0/auth0-react';
import { doc, setDoc } from "firebase/firestore"; 

const CreateCrowdFundingButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { user } = useAuth0();

    const handleCreate = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        let title = data.get("title");
        let description = data.get("description");
        let goal = data.get("goal");
        let author = user['name'];
        let address = data.get("address");

        await setDoc(doc(db, "CrowdFundingProjects", title + "-" + user['sub']), {
            title: title,
            description: description,
            goal: goal,
            author: author,
            address: address
        });
    }


    return (
        isAuthenticated && (
            <form className="m-4" onSubmit={handleCreate}>
        <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
          <main className="mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Create Crowdfunding Project
            </h1>
            <div className="">
              <div className="my-3">
                <input
                  type="text"
                  name="title"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Title of the Project"
                />
              </div>
              <div className="my-3">
                <input
                  name="description"
                  type="text"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Description of the Project"
                />
                <input
                  name="goal"
                  type="text"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Goal of the Project"
                />
                <input
                  name="address"
                  type="text"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Type Your ETH Address. PAY ATTENTION. THIS CANNOT BE CHANGED."
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


export default CreateCrowdFundingButton; 