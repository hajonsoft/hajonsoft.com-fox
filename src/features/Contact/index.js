import React from "react";
import {
  TextField,
  Grid,
  MenuItem,
  Typography,
  Button,
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      alert(`This is the date we are sending to the server ${JSON.stringify(data)} `)
  }


  return (
    <div id="contact" className={classes.root}>
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
              error={!!errors.firstName}
              label="First Name"
              variant="outlined"
              name="firstName"
              helperText={!!errors.firstName && errors.firstName.message}
              {...register("firstName", { required: { value: true, message: "First Name field cannot be empty"}  })}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth              
              label="Last Name"
              variant="outlined"
              name="lastName"
              helperText={!!errors.lastName && errors.lastName.message}
              {...register("lastName", { required: { value: true, message: "Last Name field cannot be empty"}  })}
              error={!!errors.lastName}
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
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
                required: {
                    value: true,
                    message: "Email field cannot be empty"
                } ,
              })}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              label="State"
              select
              fullWidth
              name="state"
              {...register("state", { required: { value: true, message: "State field cannot be empty"}  })}
              error={!!errors.state}
              helperText={!!errors.state && errors.state.message}
            >
              <MenuItem value="">Select State</MenuItem>
              <MenuItem value="1">State 1</MenuItem>
              <MenuItem value="2">State 2</MenuItem>
              <MenuItem value="3">State 3</MenuItem>
              <MenuItem value="4">State 4</MenuItem>
            </TextField>
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              name="phoneNumber"
              type="tel"
              {...register("phoneNumber")}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              label="Role"
              select
              fullWidth
              name="role"
              {...register("role")}
            >
              <MenuItem value="default">I am a...</MenuItem>
              <MenuItem value="1">Role 1</MenuItem>
              <MenuItem value="2">Role 2</MenuItem>
              <MenuItem value="3">Role 3</MenuItem>
              <MenuItem value="4">Role 4</MenuItem>
            </TextField>
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
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Contact;
