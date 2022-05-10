import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';
import HomeAppointment from './HomeAppointment/HomeAppointment';
import HomeContact from './HomeContact/HomeContact';
import HomeReviews from './HomeReviews/HomeReviews';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
          <HomeAppointment></HomeAppointment>
          <HomeReviews></HomeReviews>
          <HomeContact></HomeContact>
        </div>
    );
};

export default Home;