import "bootstrap/dist/css/bootstrap.min.css";
import HomepageCart from "./Components/Carts/homepagecart/HomepageCart";
import HomePage from "./Pages/HomePage/HomePage";
// import HomePageBanner from "./Components/BannerSection/homePageBanner/HomePageBanner";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CoursePage from "./Pages/CoursePage/CoursePage";

import "./styles.css";
import CourseQuickView from "./OtherComponents/ToolTip/CourseQuickView";
import DevelopmentCard from "./Components/Carts/DevelopmentCourseCard/DevelopmentCard/DevelopmentCard";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import TopicPageCardLeft from "./Components/Carts/TopicPageCard/TopicPageCardLeft";
import TooltipRight from "./OtherComponents/ToolTip/TooTipRIght/TooltipRight";
import ProductPageBanner from "./Components/BannerSection/ProductPageBanner/ProductPageBanner";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import Studentsalsobought from "./Components/Carts/ProductPageCard/Studentsalsobought/Studentsalsobought";
import AuthorDetailsPages from "./Pages/AuthorDetailsPages/AuthorDetailsPages";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import SearchPage from "./Pages/SearchPage/SearchPage";
import CartPopup from "./Pages/CartPopup/CartPopup";
import WishListPopup from "./Pages/WishListPopup/WishListPopup";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Login from "./Pages/Login/Login";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/CoursePage">...CoursePage....</Link>
        <Link to="/CategoryPAge">...Category Page....</Link>
        <Link to="/ProductPage">...Product Page...</Link>
        <Link to="/AuthorPage">..AuthorPage..</Link>
        <Link to="/ShoppingCart">..Shopping Cart..</Link>
        <Link to="/SearchPage">..Search Page..</Link>
        <Link to="/cartPopup">..cartPopup..</Link>
        <Link to="/WhishListPopup">..WhishListPopup..</Link>
        <Link to="/CheckOutPage">..CheckOutPage...</Link>
        <Link to="/Login">..Login...</Link>
        <Route exact path="/" component={HomePage} />
        <Route path="/CoursePage" component={CoursePage} />
        <Route path="/ProductPage" component={ProductDetailsPage} />
        <Route path="/CategoryPAge" component={CategoryPage} />
        <Route path="/AuthorPage" component={AuthorDetailsPages} />
        <Route path="/ShoppingCart" component={ShoppingCart} />
        <Route path="/SearchPage" component={SearchPage} />
        <Route path="/cartPopup" component={CartPopup} />
        <Route path="/WhishListPopup" component={WishListPopup} />
        <Route path="/CheckOutPage" component={CheckOut} />
        <Route path="/Login" component={Login} />
      </Router>
      {/* <ShoppingCart /> */}
    </div>
  );
}
