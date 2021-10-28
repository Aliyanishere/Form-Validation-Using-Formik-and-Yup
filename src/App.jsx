import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email("Enter valid email")
        .required("Required*"),
      password: Yup
        .string()
        .min(8, "Password must be 8 digits long")
        .required("Required*")
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit} className={classes.root} noValidate autoComplete="off">
        <TextField
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br />
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <br />
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;