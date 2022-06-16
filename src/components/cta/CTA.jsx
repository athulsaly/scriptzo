import React, { useState } from "react";
import "./cta.css";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import axios from "axios";
import Alert from "@mui/material/Alert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  bgcolor: "background.paper",
  /*  border: "2px solid #000", */
  boxShadow: 24,
  p: 7,
};

const CTA = () => {
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [name, setName] = useState(null);
  const [email, setMail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [message, setMsg] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAlertOpen = () => {
    setAlertOpen(true);
  };
  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  const submitForm = () => {
    axios.post(
      `https://scriptzo-default-rtdb.asia-southeast1.firebasedatabase.app/contacts.json`,
      {
        name: name.toString(),
        email: email.toString(),
        phone: phone.toString(),
        message: message.toString(),
        time: Date(),
      }
    );
    setMail(null);
    setMsg(null);
    setName(null);
    setPhone(null);
    handleClose();
    handleAlertOpen();
  };
  return (
    <>
      <div className="gpt3__cta" id="contact">
        <div className="gpt3__cta-content">
          {/*  <p>Request Early Access to Get Started</p> */}
          <h3>
            Submit the contact form or mail us at{" "}
            <a
              href="mailto: info@scriptzo.in"
              style={{
                color: "#000C66",
              }}
            >
              info@scriptzo.in
            </a>
            .
          </h3>
        </div>
        <div className="gpt3__cta-btn">
          <button type="button" onClick={() => handleOpen()}>
            Contact Us
          </button>
        </div>
      </div>
      <Modal open={open} onClose={() => handleClose()} align="center">
        <Box
          sx={style}
          style={{
            /* background:
              "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
            */ borderRadius: "10px",
          }}
        >
          <FormControl fullWidth>
            <InputLabel htmlFor="name">Full Name</InputLabel>
            <Input
              id="name"
              aria-describedby="my-helper-text"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              id="email"
              aria-describedby="my-helper-text"
              onChange={(e) => setMail(e.target.value)}
            />
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel htmlFor="tel">Contact Number</InputLabel>
            <Input
              id="tel"
              aria-describedby="my-helper-text"
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel htmlFor="message">Add a message.</InputLabel>
            <Input
              id="messagae"
              aria-describedby="my-helper-text"
              onChange={(e) => setMsg(e.target.value)}
              multiline
              rows={2}
            />
            <FormHelperText id="my-helper-text">
              We'll never share the details you provide.
            </FormHelperText>
          </FormControl>
          <br />
          <br />
          <div className="gpt3__cta-btnx">
            <button
              type="button"
              onClick={() => submitForm()}
              disabled={name && email && phone === null}
            >
              Submit
            </button>
          </div>
        </Box>
      </Modal>
      <Modal open={alertOpen} onClose={() => handleAlertClose()}>
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Alert severity="success">
            Your form was submitted successfully.
          </Alert>
        </Box>
      </Modal>
    </>
  );
};

export default CTA;
