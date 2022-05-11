import React from 'react';
import quote from '../../../../icons/quote.svg'
const HomeReviews = () => {
    const reviews= [
        {
            _id:1 ,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:'https://i.ibb.co/wwh5XLp/people1.png'

        },
        {
            _id:2 ,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:'https://i.ibb.co/nQ6CwKG/people2.png'
        },
        {
            _id:3 ,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:'https://i.ibb.co/yVx6TnT/people3.png'
        },
    ];
    return (
        <div className='quote'>
          <div className=" flex justify-between items-center px-10">
              <div className="  ">
              <p className='text-primary text-xl'>Testimonial</p>
            <h1 className='text-2xl '>What Our Patients Says</h1>
              </div>
              <div className="">
                 <img src={quote} alt="" />
              </div>
          </div>
            <div className="grid md:grid-cols-3 gap-6 px-11 sm:grid-cols-1 mt-24 p-10">
            {
              reviews.map(review => <div key={review._id} className="shadow-lg p-5">
                  <div>
                      <p>{review.description}</p>
                      <div className="flex items-center ">
                          <img src={review.img} alt="helo" />
                          <div className=" pl-3">
                              <h1>{review.name}</h1>
                              <p>{review.location}</p>
                          </div>
                      </div>
                  </div>
              </div>)
          }
            </div>
       
        </div>
    );
};

export default HomeReviews;