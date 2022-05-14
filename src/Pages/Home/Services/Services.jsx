import React from 'react';

const Services = () => {
    return (
        <div>
            <div className="mt-12">
<h1 className='text-center text-4xl text-primary mt-5'>OUR SERVICES</h1>
<p className='text-center '>Services We Provide</p>
        <div className='grid md:grid-cols-3 gap-6 px-11 sm:grid-cols-1 mt-9'>
            <div className="  px-5 rounded-md py-3 shadow-2xl h-80" >
              <div  className=" ">
              <img className="mx-auto" src={`https://i.ibb.co/41rNZ60/fluoride.png`} alt="" />
              <div className="">
                  <h1  className="pb-5  font-bold">Fluoride Treatment</h1>
                  <p className="">Fluoride is a naturally occurring mineral that helps build strong teeth and prevent cavities.</p>
              </div>
              </div>
            </div>
            <div className=" px-5 rounded-md">
            <div  className="  py-3 shadow-2xl h-80 px-5" >
            <img className="mx-auto" src={`https://i.ibb.co/QrvwmJ9/cavity.png`} alt="" />
            <div>
                <h1  className="pb-5 font-bold">Cavity Filling</h1>
                <p>It’s important to know about potential problems, so you can see your dentist promptly to have cavity fillings adjusted or repaired. Possible complications from cavity fillings include: 

          </p>
            </div>
            </div>
            </div>
            <div className="5 rounded-md  ">
              <div className="  py-3 shadow-2xl h-80 px-5" >
              <img className="mx-auto" src={`https://i.ibb.co/YRpBY6D/whitening.png`} alt="" />
              <div className="">
                  <h1 className="pb-5 font-bold">Teeth Whitening</h1>
                  <p>
                  With professional Teeth Whitening treatment, you can enjoy the boost in confidence of a bright, white smile
                  </p>
              </div>
              </div>
            </div>
            
        </div>
</div>


        <div className="hero mt-12">
  <div className="hero-content flex-col lg:flex-row">
    <img className='h-80 w-80 rounded' src={`https://i.ibb.co/2tKBKPW/treatment.png`}/>
    <div className='text-left px-5'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary ">
              Get Started
            </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Services;