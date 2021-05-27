import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import trans from '../../util/trans';
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
    backgroundColor: '#F0F1F3',
    textAlign: "center",
    boxSizing: "border-box",
  },
  verticalMargin: {
    margin: "1rem 0px",
  },
  inputContainer: {
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
          {trans('contact.we-received-your-message')}
        </Alert>
      </Snackbar>
      <Typography variant="h5" className={classes.verticalMargin}>
        {trans('contact.ready-to-contct-us')}
      </Typography>

      <Typography className={classes.verticalMargin}>
        {trans('contact-send-us-message-and-we-will-reply')}
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} className={classes.inputContainer}>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              error={!!errors.name}
              label={trans('contact.name')}
              required
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
              label={trans('contact.email')}
              required
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
              label={trans('contact.phone-number')}
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
              label={trans('contact.message')}
              required
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
              {!loading && trans('contact.send-message')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Contact;
