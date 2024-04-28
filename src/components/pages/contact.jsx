import { Grid, Typography, TextField, Button } from "@mui/material";
import Header from "./header";
import Footer from "./footer";

const Contact = () => {
  return (
    <>
    <Header />
    <section className="ftco-section contact-section">
        <div className="container mt-5">
          <Grid container className="block-9">
            <Grid item xs={12} md={4} className="contact-info ">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <Typography variant="h4" className="h4">
                    Contact Information
                  </Typography>
                </div>
                <div className="col-md-12 mb-3">
                  <Typography variant="body1">
                    <span>Address:</span> Mountain View Road, Colombo 15, Sri
                    Lanka
                  </Typography>
                </div>
                <div className="col-md-12 mb-3">
                  <Typography variant="body1">
                    <span>Phone:</span>{" "}
                    <a href="tel://1234567920">+94 112 392 210</a>
                  </Typography>
                </div>
                <div className="col-md-12 mb-3">
                  <Typography variant="body1">
                    <span>Email:</span>{" "}
                    <a href="mailto:info@yoursite.com">info@diazzpizza.com</a>
                  </Typography>
                </div>
                <div className="col-md-12 mb-3">
                  <Typography variant="body1">
                    <span>Website:</span>{" "}
                    <a href="#"><www className="DiazzPizza"></www>www.DiazzPizza.com</a>
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={6} className="">
              <form action="#" className="contact-form">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      label="Subject"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      multiline
                      rows={7}
                      label="Message"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </div>
      </section>

    <Footer />
    </>
    
  );
};

export default Contact;
