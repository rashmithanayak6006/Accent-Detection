import React from "react";

function Footer() {

  const mystyle1 = {
  minHeight: '50vh',
  minWidth: '100vw',
  display: 'flex',
  flexDirection: 'column'
}
const mystyle2 ={
  //marginTop: 'auto',
 // opacity: '0.8',
  backgroundColor: "skyblue"}



  return (
    <div >
       
        <div class=" box"  style={mystyle1}>
  <div className='footer'
          class="text-center text-lg-start text-black"
          style={mystyle2}
          >
    <div class="container p-3 pb-0 ">
      <section class="">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              MerLions
            </h6>
            <p>
              We as a team worked very hard to design this website
              hope this website will helpyou to know your accent 
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />


          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa fa-home mr-3"></i> VNR VJIET, Bachupally, HYDERABAD</p>
            <p><i class="fas fa fa-envelope mr-3"></i> merlions22@gmail.com</p>
            <p><i class="fas fa fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </section>

     < hr class="my-3"/>

      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <div class="p-3">
              © 2022 Copyright: knowyourAccent
            
            </div>
          </div>

          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a
               class="btn btn-outline-light btn-floating m-1 text-black"
               role="button"
               ><i class="fab fa fa-facebook-f"></i
              ></a>

            <a
               class="btn btn-outline-light btn-floating m-1 text-black"
               role="button"
               ><i class="fab fa fa-twitter"></i
              ></a>

            <a
               class="btn btn-outline-light btn-floating m-1 text-black"
               role="button"
               ><i class="fab fa-google"></i
              ></a>

            <a
               class="btn btn-outline-light btn-floating m-1 text-black"
               role="button"
               ><i class="fab fa fa-instagram"></i
              ></a>
          </div>
        </div>
      </section>
    </div>
  </div>

    </div>

    </div> 
  );
}

export default Footer;