import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";


export default function InfoModal(props) {


  return (
    <>
      <React.Fragment>
        <Modal show={props.show} size="sm" popup={true} onClose={props.onClose}>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <p className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">
                This project aims to help you write your first line of code, type anything you wish inside the print'()' and it will be printed at the bottom
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
