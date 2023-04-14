import React, { useState, useEffect } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import MenuData from "./MenuData";
import image from "../Assets/Foodiewine.jpeg";
import WineProfile from "./WineProfile";

const Menus = () => {
  const [menu] = useState(MenuData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = menu.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, menu]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, [4000]);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section>
      <div className="menus">
        <h2>MENUS</h2>
      </div>
      <div className="menu-box">
        {menu.map((item, indexMenu) => {
          const {
            id,
            menuname,
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            item7,
            price,
            extraitem,
          } = item;
          let position = "nextSlide";
          if (indexMenu === index) {
            position = "activeSlide";
          }
          if (
            indexMenu === index - 1 ||
            (index === 0 && indexMenu === menu.lenght - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <h4>{menuname}</h4>
              <p className="text">{item1}</p>
              <p className="text">{item2}</p>
              <p className="text">{item3}</p>
              <p className="text">{item4}</p>
              <p className="text">{item5}</p>
              <p className="text">{item6}</p>
              <p className="text">{item7}</p>
              <h5>{price}</h5>
              <strong>{extraitem}</strong>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <BsArrowLeftCircle />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <BsArrowRightCircle />
        </button>
      </div>

      <div className="menu-wine">
        <div>
          <h4>WINE</h4>
        </div>

        <div></div>
        <span>
          The wine list at Foodie embraces everything Grace and the team love
          about wine from old, fine and rare to young, new and exciting. Our
          cellar is home to wines that are already firm favourites, vintages to
          return to time and time again as well as a host of fresh discoveries
          waiting to be tried an authentic reflection on the wine world today.{" "}
          <br /> <br />
          <a className="wine-list" href="">
            <h6>WINE LIST</h6>
          </a>
        </span>
        <img src={image} alt="" />
      </div>

      <WineProfile />
    </section>
  );
};

export default Menus;
