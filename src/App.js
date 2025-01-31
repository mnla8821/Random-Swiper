import "./App.css";
import { Pagination } from "swiper/modules";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import Person1 from "./Assets/person-1.jpeg";
import Person2 from "./Assets/person-2.jpeg";
import Person3 from "./Assets/person-3.jpeg";
import Person4 from "./Assets/person-4.jpeg";
import { useRef, useState } from "react";
import Item from "antd/es/list/Item";
function App() {
  const ref = useRef();
  const [swiper, setSwiper] = useState(null);
  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * Users.length);
    swiper.slideTo(randomIndex);
  };

  const Users = [
    {
      id: 1,
      name: "Suasan Smith",
      catogery: "Web Devoloper",
      image: Person1,
      info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Anna Johnson",
      catogery: "WEB DESIGNER",
      image: Person2,
      info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Peter Jones",
      catogery: "INTERN",
      image: Person4,
      info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Bill Anderson",
      catogery: "THE BOSS",
      image: Person3,
      info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
  ];

  const data = [
    { id: 1, name: "Person 1", age: 25 },
    { id: 2, name: "Person 2", age: 30 },
    { id: 3, name: "Person 3", age: 35 },
    { id: 4, name: "Person 4", age: 40 },
  ];

  const handleRandomSlide = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    swiper.slideTo(randomIndex);
  };
  return (
    <div className="App">
      <div className="parent">
        <div className="child-swiper">
          <div className="go-around">
            <Swiper
              onSwiper={setSwiper}
              ref={ref}
              slidesPerView={1}
              // modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {Users &&
                Users.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="parent-circle">
                      <div className="circle">
                        <div className="circle1"></div>
                        <div className="circle2">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                    <h1>{item.name}</h1>
                    <h5>{item.catogery}</h5>
                    <p>{item.info}</p>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="icons">
            <div
              className="icon1"
              onClick={() => ref.current.swiper.slideNext()}
            >
              <SlArrowLeft color="yellow" />
            </div>
            <div
              className="icon2"
              onClick={() => ref.current.swiper.slidePrev()}
            >
              <SlArrowRight color="yellow" />
            </div>
          </div>
          <button onClick={handleRandomSlide}>Surprise Me</button>
        </div>
      </div>
    </div>
  );
}

export default App;
