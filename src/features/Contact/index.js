import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import {
  TextField,
  Grid,
  Typography,
  Button,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
  root: {
    padding: "2rem",
    background:
      "linear-gradient(90deg, rgb(56, 134, 176) 0%, rgb(71, 161, 177) 100%)",
    color: "white",
    textAlign: "center",
    boxSizing: "border-box",
  },
  verticalMargin: {
    margin: "1rem 0px",
  },
  inputContainer: {
    background: "white",
    padding: "1rem",
    borderRadius: "4px",
    marginTop: "1rem",
  },
  flex: {
    display: "flex",
  },
});

const Contact = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    window.Pageclip.send(
      "vTr2fTR8UlmJRkvbb2eKB2lKX1DZ6AOA",
      "default",
      data,
      function (error, response) {
        if (!!error) {
          console.log(error);
        }

        if (!error && response) {
          setShowAlert(true);
          reset();
        }

        setLoading(false);
      }
    );
  };

  return (
    <div id="contact" className={classes.root}>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={() => setShowAlert(false)}
      >
        <Alert
          onClose={() => setShowAlert(false)}
          variant="filled"
          severity="success"
        >
          We've reserved your message. We'll get in touch soon
        </Alert>
      </Snackbar>
      <Typography variant="h3" className={classes.verticalMargin}>
        Ready to Contact Us?
      </Typography>

      <Typography className={classes.verticalMargin}>
        Send us a message and we'll reply you in a jiffy
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} className={classes.inputContainer}>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              error={!!errors.name}
              label="Name"
              variant="outlined"
              name="name"
              helperText={!!errors.name && errors.name.message}
              {...register("name", {
                required: {
                  value: true,
                  message: "First Name field cannot be empty",
                },
              })}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              error={!!errors.email}
              helperText={!!errors.email && errors.email.message}
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email field cannot be empty",
                },
              })}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              name="phoneNumber"
              type="tel"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Phone number field cannot be empty",
                },
              })}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              label="message"
              name="message"
              variant="outlined"
              placeholder="Your Message"
              error={!!errors.message}
              helperText={!!errors.message && errors.message.message}
              {...register("message", {
                required: {
                  value: true,
                  message: "Message field cannot be empty",
                },
              })}
              multiline
              rows={5}
            />
          </Grid>

          <Grid
            item
            xs={12}
            alignContent="flex-end"
            alignItems="flex-end"
            justify="flex-end"
            className={classes.flex}
          >
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              disabled={Object.keys(errors).length !== 0 || loading}
            >
              {loading && <CircularProgress size={24} />}
              {!loading && "Submit"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Contact;
