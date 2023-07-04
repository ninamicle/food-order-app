import { Fragment } from "react";
import foodImage from "../../assets/lily-banse--YHSwy6uqvk-unsplash.jpg";
import style from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>MokiFoki</h1>
        <HeaderButton onShow={props.onShow} />
      </header>
      <div className={style["main-image"]}>
        <img src={foodImage} alt="Food" />
      </div>
    </Fragment>
  );
};

export default Header;
