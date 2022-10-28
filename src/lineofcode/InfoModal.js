import { Button, Modal } from "flowbite-react";
import React from "react";

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
        <Modal show={props.showLearn} size="sm" onClose={props.onCloseLearn}>
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
                <a
                  className="text-blue-500"
                  href="https://www.codecademy.com/"
                >
                  CodeCademy
                </a>{" "}
                | Where you can learn by building projects
              </p>
              <div className="flex justify-center gap-4">
                <Button color="gray" onClick={props.onCloseLearn}>
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
