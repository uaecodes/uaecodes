import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { postForm } from "../codeCounter/api";
import { certGen } from "./certGen";

export default function InfoModal(props) {
  return (
    <>
      <React.Fragment>
        <Modal show={props.show} size="sm" popup={true} onClose={props.onClose}>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <p className="mb-5 font-normal text-gray-500 dark:text-gray-400">
                This project aims to help you write your first line of code,
                type anything you wish inside the print'()' and it will be
                printed at the bottom
              </p>
              <div className="flex justify-center gap-4">
                <Button color="gray" onClick={props.onClose}>
                  Close
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </>
  );
}

export function LearnModal(props) {
  return (
    <>
      <React.Fragment>
        <Modal show={props.showLearn} size="sm" onClose={props.onClose}>
          <Modal.Header>Learn Programming</Modal.Header>
          <Modal.Body>
            <div className="">
              <p className="mb-4 font-normal text-sm text-gray-500 dark:text-gray-400">
                Programming is a way to “instruct the computer to perform
                various tasks”.
              </p>
              <p className="mb-4 font-normal text-sm text-gray-500 dark:text-gray-400">
                A programming language provides a way for a programmer to
                express a task so that it could be understood and executed by a
                computer. Some of the popular Programming languages are{" "}
                <a
                  className=" text-blue-500"
                  href="https://www.freecodecamp.org/news/learning-python-from-zero-to-hero-120ea540b567/"
                >
                  Python
                </a>
                , C, C++, Java, etc.
              </p>
              <p className="mb-4 font-normal text-sm text-gray-500 dark:text-gray-400">
                {" "}
                The following are a good list of free resources that you can use
                to start your coding journey
              </p>

              <br></br>

              <p className="mb-4 font-normal text-sm text-gray-700 dark:text-gray-400">
                &gt;{" "}
                <a
                  className="text-blue-500"
                  href="https://www.theodinproject.com/paths/foundations/courses/foundations"
                >
                  The Odin Project
                </a>{" "}
                | A very good resource to start web development
              </p>

              <p className="mb-4 font-normal text-sm text-gray-700 dark:text-gray-400">
                &gt;{" "}
                <a
                  className="text-blue-500"
                  href="https://www.freecodecamp.org/"
                >
                  FreeCodeCamp
                </a>{" "}
                | Totally free resource with thousands of hours of content
              </p>
              <p className="mb-4 font-normal text-sm text-gray-700 dark:text-gray-400">
                &gt;{" "}
                <a className="text-blue-500" href="https://www.codecademy.com/">
                  CodeCademy
                </a>{" "}
                | Where you can learn by building projects
              </p>
              <div className="flex justify-center gap-4">
                <Button color="gray" onClick={props.onClose}>
                  Close
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </>
  );
}

export function FormModal(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [hasSubmit, setHasSubmit] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleNationality = (event) => {
    setNationality(event.target.value);
  };
  const handleSubmit = () => {
    if (hasSubmit ){
      alert("your certificate has been downloaded already!")}
    else if(name == "" || email == "" || nationality == ""){
      alert("complete the form to generate your certificate")}
    else{
      certGen("en",name,""); //Generate Certificate and Download it 
      postForm(name, email, nationality); // There is an issue with this line (cehck console)
      setHasSubmit(true);
      props.onClose();
      alert("Your certificate has been sent!");}
  };

  return (
    <React.Fragment>
      <Modal
        show={props.showForm}
        size="md"
        popup={true}
        onClose={props.onClose}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl mb-4 font-medium text-gray-900 dark:text-white">
              Get your Certificate
            </h3>
            <div className="mb-4">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Name" />
              </div>
              <TextInput
                id="name"
                placeholder="Full Name"
                required={true}
                type="text"
                onChange={handleName}
                value={name}
              />
            </div>
            <div className="mb-4">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your Email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="email@email.com"
                required={true}
                onChange={handleEmail}
                value={email}
                
              />
            </div>
            <div className="mb-4">
              <div className="mb-2 block">
                <Label htmlFor="nationality" value="Your Nationality" />
              </div>
              <TextInput
                id="nationality"
                placeholder="UAE"
                type="text"
                required={true}
                onChange={handleNationality}
                value={nationality}
              />
            </div>
            <div className="w-full">
              <Button onClick={handleSubmit} type="submit">Download Your Certificate</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
