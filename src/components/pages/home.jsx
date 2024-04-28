import Footer from "./footer";
import Header from "./header";

const Home = () => {
  return (
    <>
      <Header />
      {/* END nav */}

      <section>
        <div
          className=" "
          // style={{ backgroundImage: "url(../images/bg_1.jpg)" , backgroundPosition: "center"}}
        >
          <div className="container">
            <div className="row  align-items-center">
              <div className="col-md-6 col-sm-12 ">
                <span className="subheading">Delicious</span>
                <h1 className="mb-4">Sri Lanken Cuizine</h1>
                <p className="mb-4 mb-md-5">
                  Diazz's has more than 40 stores in Sri Lanka at which you can
                  order your favorite pizza. Looking for more information on our
                  products and service? Please have a look at this page.
                </p>
                <p></p>
              </div>
              <div className="col-md-6 ">
                <img src="../images/bg_1.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row slider-text align-items-center"
              data-scrollax-parent="true"
            >
              <div className="col-md-6 col-sm-12 order-md-last ">
                <span className="subheading">Crunchy</span>
                <h1 className="mb-4">Sri Lanken Pizza</h1>
                <p className="mb-4 mb-md-5">
                  Diazz's has more than 40 stores in Sri Lanka at which you can
                  order your favorite pizza. Looking for more information on our
                  products and service? Please have a look at this page.
                </p>
                <p>
                  <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">
                    Order Now
                  </a>{" "}
                  <a
                    href="#"
                    className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                  >
                    View Menu
                  </a>
                </p>
              </div>
              <div className="col-md-6 ">
                <img src="../images/bg_2.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div> */}

        <div
          className="slider-item"
          style={{ backgroundImage: "url(../images/bg_3.jpg)" }}
        >
          <div className="overlay"></div>
          {/* <div className="container">
            <div
              className="row slider-text justify-content-center align-items-center"
              data-scrollax-parent="true"
            >
              <div className="col-md-7 col-sm-12 text-center ">
                <span className="subheading">Welcome</span>
                <h1 className="mb-4">We cooked your desired Pizza Recipe</h1>
                <p className="mb-4 mb-md-5">
                  Diazz's has more than 40 stores in Sri Lanka at which you can
                  order your favorite pizza. Looking for more information on our
                  products and service? Please have a look at this page.
                </p>
                <p>
                  <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">
                    Order Now
                  </a>{" "}
                  <a
                    href="#"
                    className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                  >
                    View Menu
                  </a>
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section class="ftco-intro" style={{ width: "100%" }}>
        <div class="container-wrap">
          <div class="wrap d-md-flex">
            <div class="info">
              <div class="row no-gutters">
                <div class="col-md-4 d-flex  fadeInUp d">
                  <div class="icon">
                    <span class="icon-phone"></span>
                  </div>
                  <div class="text">
                    <h3>+94 3929 210</h3>
                    <p>Diazz Pizza always delicous</p>
                  </div>
                </div>
                <div class="col-md-4 d-flex  fadeInUp d">
                  <div class="icon">
                    <span class="icon-my_location"></span>
                  </div>
                  <div class="text">
                    <h3>Mountain View Road</h3>
                    <p>Colombo 15, Sri Lanka</p>
                  </div>
                </div>
                <div class="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
                  <div class="icon">
                    <span class="icon-clock-o"></span>
                  </div>
                  <div class="text">
                    <h3>Open Monday-Friday</h3>
                    <p>8:00am - 9:00pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="social d-md-flex pl-md-5 p-4 align-items-center">
              <ul class="social-icon">
                <li class=" fadeInUp d">
                  <a href="#">
                    <span class="icon-twitter"></span>
                  </a>
                </li>
                <li class=" fadeInUp d">
                  <a href="#">
                    <span class="icon-facebook"></span>
                  </a>
                </li>
                <li class=" fadeInUp d">
                  <a href="#">
                    <span class="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="ftco-about d-md-flex">
        <div
          className="one-half img"
          style={{ backgroundImage: "url(assets/images/about.jpg)" }}
        ></div>
        <div className="one-half ftco-animate">
          <div className="heading-section ftco-animate">
            <h2 className="mb-4">
              Welcome to <span className="flaticon-pizza">Diazz Pizza</span> A
              Restaurant
            </h2>
          </div>
          <div>
            <p>
              Pizza even tastes better with a small discount, doesn't it? We
              always have great promotions for all stores! Curious to know about
              local offers, have a look at your favorite store and check your
              local vouchers!
            </p>
          </div>
        </div>
      </section> */}

      <section class="ftco-about d-md-flex" style={{ width: "100%" }}>
        <div
          class="one-half img"
          style={{ backgroundImage: "url(../images/bg_2.jpg)" }}
        ></div>
        <div class="one-half ftco-animate fadeInUp ftco-animated">
          <div class="heading-section ftco-animate fadeInUp ftco-animated">
            <h2 class="mb-4">
              Welcome to <span class="flaticon-pizza">Diazz Pizza</span> A
              Restaurant
            </h2>
          </div>
          <div>
            <p>
              Pizza even tastes better with a small discount, doesn't it? We
              always have great promotions for all stores! Curious to know about
              local offers, have a look at your favorite store and check your
              local vouchers!
            </p>
          </div>
        </div>
      </section>

      {/* <section className="ftco-section ftco-services">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h2 className="mb-4">Our Services</h2>
              <p>
                Diazz Pizza delivery services provide convenience and
                satisfaction by bringing delicious pizzas directly to customers'
                doorsteps. With a focus on speed and efficiency, these services
                leverage advanced logistics and technology to ensure prompt
                delivery times. Customers can choose from a variety of toppings,
                crust styles, and sizes, catering to individual preferences and
                dietary needs. Whether it's a quick dinner option for busy
                weeknights or a fun treat for gatherings with friends and
                family, pizza delivery services offer a hassle-free solution for
                satisfying cravings without the need to leave the comfort of
                home. With the added convenience of online ordering and
                tracking, customers can easily place and monitor their orders,
                enhancing the overall experience.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ftco-animate">
              <div className="media d-block text-center block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                  <span className="flaticon-diet"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Healthy Foods</h3>
                  <p>
                    Our foods are typically low in unhealthy fats, sugars, and
                    additives while being high in fiber, antioxidants, and
                    phytonutrients. Incorporating a variety of fruits,
                    vegetables, whole grains, lean proteins, and healthy fats
                    into your diet can help support a balanced diet and promote
                    good health.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="media d-block text-center block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                  <span className="flaticon-bicycle"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Fastest Delivery</h3>
                  <p>
                    With a focus on promptness and customer satisfaction,
                    fastest delivery services play a crucial role in meeting the
                    demands of today's fast-paced world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="media d-block text-center block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                  <span className="flaticon-pizza-1"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Original Recipes</h3>
                  <p>
                    Original recipes can range from traditional family dishes
                    passed down through generations to inventive creations that
                    push the boundaries of culinary creativity. Whether it's a
                    classic comfort food with a twist or a daring fusion of
                    global cuisines, original recipes celebrate individuality
                    and creativity in the kitchen. Sharing these recipes allows
                    others to experience new tastes and inspirations, fostering
                    a sense of community and culinary exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section class="ftco-section ftco-services" style={{ width: "100%" }}>
        <div class="overlay"></div>
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section ftco-animate text-center fadeInUp ftco-animated">
              <h2 class="mb-4">Our Services</h2>
              <p>
                Diazz Pizza delivery services provide convenience and
                satisfaction by bringing delicious pizzas directly to customers'
                doorsteps. With a focus on speed and efficiency, these services
                leverage advanced logistics and technology to ensure prompt
                delivery times. Customers can choose from a variety of toppings,
                crust styles, and sizes, catering to individual preferences and
                dietary needs. Whether it's a quick dinner option for busy
                weeknights or a fun treat for gatherings with friends and
                family, pizza delivery services offer a hassle-free solution for
                satisfying cravings without the need to leave the comfort of
                home. With the added convenience of online ordering and
                tracking, customers can easily place and monitor their orders,
                enhancing the overall experience.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div class="media d-block text-center block-6 services">
                <div class="icon d-flex justify-content-center align-items-center mb-5">
                  <span class="flaticon-diet"></span>
                </div>
                <div class="media-body">
                  <h3 class="heading">Healthy Foods</h3>
                  <p>
                    Our foods are typically low in unhealthy fats, sugars, and
                    additives while being high in fiber, antioxidants, and
                    phytonutrients. Incorporating a variety of fruits,
                    vegetables, whole grains, lean proteins, and healthy fats
                    into your diet can help support a balanced diet and promote
                    good health.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div class="media d-block text-center block-6 services">
                <div class="icon d-flex justify-content-center align-items-center mb-5">
                  <span class="flaticon-bicycle"></span>
                </div>
                <div class="media-body">
                  <h3 class="heading">Fastest Delivery</h3>
                  <p>
                    With a focus on promptness and customer satisfaction,
                    fastest delivery services play a crucial role in meeting the
                    demands of today's fast-paced world.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div class="media d-block text-center block-6 services">
                <div class="icon d-flex justify-content-center align-items-center mb-5">
                  <span class="flaticon-pizza-1"></span>
                </div>
                <div class="media-body">
                  <h3 class="heading">Original Recipes</h3>
                  <p>
                    Original recipes can range from traditional family dishes
                    passed down through generations to inventive creations that
                    push the boundaries of culinary creativity. Whether it's a
                    classic comfort food with a twist or a daring fusion of
                    global cuisines, original recipes celebrate individuality
                    and creativity in the kitchen. Sharing these recipes allows
                    others to experience new tastes and inspirations, fostering
                    a sense of community and culinary exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section ftco-animate text-center fadeInUp ftco-animated">
              <h2 class="mb-4">Hot Pizza Meals</h2>
              <p>
                Do you like pizza? Favor any side dish or dessert to complete
                your meal? Have a look at our menu!
              </p>
              <h3 class="mb-4">Our Classic Meals</h3>
            </div>
          </div>
        </div>
        <div class="container-wrap">
          <div class="row no-gutters d-flex">
            <div class="col-lg-4 d-flex ftco-animate fadeInUp ftco-animated">
              <div class="services-wrap d-flex">
                <a
                  href="#"
                  class="img"
                  style={{
                    backgroundImage: "url(../images/Chilli_Chicken_Pizza.jpg)",
                  }}
                ></a>
                <div class="text p-4">
                  <h3>Chilli Chicken Pizza</h3>
                  <p>
                    A pizza topped with spicy chicken, Green Chillies, onions
                    &amp; Mozzarella.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex ftco-animate fadeInUp ftco-animated">
              <div class="services-wrap d-flex">
                <a
                  href="#"
                  class="img"
                  style={{
                    backgroundImage: "url(../images/Cheese_Lovers.jpg)",
                  }}
                ></a>
                <div class="text p-4">
                  <h3>Cheese Lovers</h3>
                  <p>
                    Rich tomato sauce with a triple layer of mozzarella cheese.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex ftco-animate fadeInUp ftco-animated">
              <div class="services-wrap d-flex">
                <a
                  href="#"
                  class="img"
                  style={{
                    backgroundImage: "url(../images/Tandoori_Chicken.jpg)",
                  }}
                ></a>
                <div class="text p-4">
                  <h3>Tandoori Chicken</h3>
                  <p>
                    Tandoori chicken &amp; onions with a double layer of cheese.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 d-flex ftco-animate fadeInUp ftco-animated">
              <div class="services-wrap d-flex">
                <a
                  href="#"
                  class="img order-lg-last"
                  style={{
                    backgroundImage: "url(../images/Hot_and_Spicy_Chicken.jpg)",
                  }}
                ></a>
                <div class="text p-4">
                  <h3>Hot &amp; Spicy Chicken</h3>
                  <p>
                    Spicy chunks of chicken, capsicums &amp; onions with a
                    double layer of cheese.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex ftco-animate fadeInUp ftco-animated">
              <div class="services-wrap d-flex">
                <a
                  href="#"
                  class="img order-lg-last"
                  style={{
                    backgroundImage: "url(../images/Black_Chicken.jpg)",
                  }}
                ></a>
                <div class="text p-4">
                  <h3>Black Chicken</h3>
                  <p>
                    Flavoursome pieces of black chicken and crunchy onion with a
                    double layer of cheese.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex ftco-animate fadeInUp ftco-animated">
              <div class="services-wrap d-flex">
                <a
                  href="#"
                  class="img order-lg-last"
                  style={{
                    backgroundImage: "url(../images/sausage_delight.jpg)",
                  }}
                ></a>
                <div class="text p-4">
                  <h3>Sausage Delight</h3>
                  <p>
                    Chicken sausages &amp; onions with a double layer of cheese.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/*           
          <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" /><circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00" /></svg></div>
     */}
    </>
  );
};

export default Home;
