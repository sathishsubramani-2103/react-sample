import React from "react";
import BikeName from "./BikeName";
import "./Home.css";

const productList = [
  {
    productName: "Hero",
    model: "2021",
    km: 2000,
    fuel: "Petrol",
    color: "Blue",
    url:"https://static.autox.com/uploads/2016/12/v_hero-motocorp-splendor-plus-spoke.jpg"
  },
  {
    productName: "Honda",
    model: "2020",
    km: 3000,
    fuel: "Petrol",
    color: "Blue",
    url:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=80"
  },
  {
    productName: "Pulsar",
    model: "2022",
    km: 2000,
    fuel: "Petrol",
    color: "Black",
    url:"https://media.zigcdn.com/media/model/2020/May/bajaj-pulsar-ns-200-a-right-side-view_600x400.jpg"
  },
  {
    productName: "TVS Jupiter",
    model: "2021",
    km: 2000,
    fuel: "Petrol",
    color: "Blue",
    url:"https://media.zigcdn.com/media/model/2021/Aug/right-side-view-2039332731_930x620.jpg"
  },
  {
    productName: "Husqvarna Vitpilen 250",
    model: "2022",
    km: 1000,
    fuel: "Petrol",
    color: "Silver",
    url:"https://imgd.aeplcdn.com/393x221/bw/models/husqvarna-vitpilen-250-standard20200225140033.jpg?q=75"
  }, {
    productName: "Hero",
    model: "2021",
    km: 2000,
    fuel: "Petrol",
    color: "Blue",
    url:"https://static.autox.com/uploads/2016/12/v_hero-motocorp-splendor-plus-spoke.jpg"
  },
  {
    productName: "Honda",
    model: "2020",
    km: 3000,
    fuel: "Petrol",
    color: "Blue",
    url:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=80"
  },
  {
    productName: "Pulsar",
    model: "2022",
    km: 2000,
    fuel: "Petrol",
    color: "Black",
    url:"https://media.zigcdn.com/media/model/2020/May/bajaj-pulsar-ns-200-a-right-side-view_600x400.jpg"
  },
  {
    productName: "TVS Jupiter",
    model: "2021",
    km: 2000,
    fuel: "Petrol",
    color: "Blue",
    url:"https://media.zigcdn.com/media/model/2021/Aug/right-side-view-2039332731_930x620.jpg"
  },
  {
    productName: "Husqvarna Vitpilen 250",
    model: "2022",
    km: 1000,
    fuel: "Petrol",
    color: "Silver",
    url:"https://imgd.aeplcdn.com/393x221/bw/models/husqvarna-vitpilen-250-standard20200225140033.jpg?q=75"
  },
];  

function Home() {
  return (
    <div className="home">
      {productList.map((item, i) => {
        return <BikeName productName={item.productName} model={item.model} km={item.km} fuel={item.fuel} color={item.color} url={item.url} />;
      })}
      {/* <BikeName />
      <BikeName />
      <BikeName />
      <BikeName /> */}
    </div>
  );
}

export default Home;
