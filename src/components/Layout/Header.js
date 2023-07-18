import {Fragment} from "react";
import styles from "./Header.module.css";
import mealsImg from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {


    return <Fragment>
        <header className={styles.header}>
            <h1> Meals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={styles["main-image"]}>
            <img src={mealsImg} alt="Food on the table"/>
        </div>
    </Fragment>
};
export default Header;