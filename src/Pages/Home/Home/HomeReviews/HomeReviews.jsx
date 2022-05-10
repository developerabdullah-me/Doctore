import React from 'react';

const HomeReviews = () => {
    const reviews= [
        {
            _id:1 ,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:''

        },
        {
            _id:2 ,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:''
        },
        {
            _id:3 ,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:''
        },
    ];
    return (
        <div>
            <p>Testimonial</p>
            <h1>What Our Patients Says</h1>
            <div className="grid md:grid-cols-3 gap-6 px-11 sm:grid-cols-1 ">
            {
              reviews.map(review => <div key={review._id} className="">
                  <div>
                      <p>{review.description}</p>
                      <div className="flex">
                          <img src={review.img} alt="helo" />
                          <div className="">
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