import React from 'react';
import { useParams } from 'react-router-dom';
import './Section.scss';
import tub from '../../images/attractions/hottub.jpg';
import sauna from '../../images/attractions/sauna.jpg';
import massage from '../../images/attractions/massage.jpg';
import food from '../../images/attractions/food.jpg';
import green from '../../images/attractions/green.jpg';

const sections = [
  {
    title: 'Hot Tub',
    content:
      "Whether you're looking for a traditional wellness experience or a cozy getaway, this summer cottage with its authentic banya and hot tub is the perfect destination for relaxation and rejuvenation.Heated to a soothing temperature, the hot tub provides a perfect escape to melt away stress, while surrounded by the fresh air and natural beauty of the countryside. The combination of warm water and the peaceful ambiance makes it the perfect spot for deep relaxation, whether during the day amidst the birdsong or at night under the stars.",
    img: tub,
  },
  {
    title: 'Sauna',
    content:
      'Our cozy sauna provides the perfect place to unwind and rejuvenate after a day of exploration or relaxation. Located within our guesthouse, the sauna offers a warm, peaceful atmosphere where you can detoxify, relieve stress, and improve overall well-being. Whether you prefer a quiet session or a social moment with friends, our sauna is the ideal escape to refresh both body and mind. Enjoy the therapeutic benefits of heat, while surrounded by comfort and tranquility.',
    img: sauna,
  },
  {
    title: 'Massage',
    content:
      'Indulge in a soothing massage at our guesthouse, designed to relax your body and calm your mind. Our professional massage services help relieve tension, reduce stress, and promote overall well-being. Whether you seek a gentle, relaxing treatment or a deep tissue massage, our experienced therapists will tailor the session to your needs. Unwind in a serene environment, and let the healing hands of our specialists rejuvenate your muscles and restore balance to your day.',
    img: massage,
  },
  {
    title: 'Food',
    content:
      'Experience the taste of the region with delicious homemade meals offered in the area. Many nearby restaurants and eateries serve traditional, hearty dishes made with fresh, local ingredients, giving you an authentic flavor of the local cuisine. For a perfect start to your day, we also offer breakfast baskets filled with locally sourced products. Enjoy fresh bread, cheeses, meats, and other seasonal delights from local farms and producers, all delivered to your door. It’s a great way to savor the region’s culinary heritage in the comfort of your room or while exploring the beautiful surroundings.',
    img: food,
  },
  {
    title: 'Green',
    content:
      "Our guesthouse is nestled in a serene environment, surrounded by lush greenery that creates a peaceful and refreshing atmosphere. The area is rich with natural beauty, offering a perfect escape from the hustle and bustle of daily life. Whether you're relaxing in the garden or taking a stroll around the property, you'll be immersed in nature's tranquility, with trees, plants, and open green spaces all around. It's the ideal setting for those who love fresh air, scenic views, and the calming presence of nature.",
    img: green,
  },
];

function Section() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div className='section_wrapper'>
        <div className='section_img'>
          <img src={tub} alt='Girl in hot tub' />
        </div>
        <div className='section_content'>
          <h3 className='section_title'>Hot Tub</h3>
          <p>
            Whether you're looking for a traditional wellness experience or a
            cozy getaway, this summer cottage with its authentic banya and hot
            tub is the perfect destination for relaxation and rejuvenation.
            Heated to a soothing temperature, the hot tub provides a perfect
            escape to melt away stress, while surrounded by the fresh air and
            natural beauty of the countryside. The combination of warm water and
            the peaceful ambiance makes it the perfect spot for deep relaxation,
            whether during the day amidst the birdsong or at night under the
            stars.
          </p>
        </div>
      </div>
      <div className='section_corousel'></div>
    </>
  );
}

export default Section;
