import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Views/Pages/Home/Home";
import "./assets/CSS/style.css";
import "./assets/CSS/About.css";
import "./assets/CSS/Contact.css";
import "./assets/CSS/Login.css";
import "./assets/CSS/Location.css";
import "./assets/CSS/Blogs.css";
import Buildingmaterials from "./Views/Pages/Service/Buildingmaterials/Buildingmaterials";
import PreferredContractors from "./Views/Pages/Service/PreferredContractors/PreferredContractors";
import Sidewalk from "./Views/Pages/Service/ConcreteProjects/Sidewalk/Sidewalk";
import Driveway from "./Views/Pages/Service/ConcreteProjects/Driveway/Driveway";
import Slab from "./Views/Pages/Service/ConcreteProjects/Slab/Slab";
import CellFill from "./Views/Pages/Service/ConcreteProjects/CellFill/CellFill";
import Commercial from "./Views/Pages/Service/ConcreteProjects/Commercial/Commercial";
import ShotCreate from "./Views/Pages/Service/ConcreteProjects/ShotCreate/ShotCreate";
import DecorativeConcrete from "./Views/Pages/Service/ConcreteProjects/DecorativeConcrete/DecorativeConcrete";
import InstantQuote from "./Views/Pages/Homeowners/InstantQuote_and_Order/InstantQuote";
import Driver from "./Views/Pages/About/DriverJobs/Driver";
import ConcreteDeliveryService from "./Views/Pages/Service/ConcreteDeliveryService/ConcreteDeliveryService";
import Contact from "./Views/Pages/Contact/Contact";
import Login from "./Views/Pages/Login/Login";
import Location from "./Views/Pages/Locations/Orlando/Location";
import Blogs from "./Views/Pages/About/Blogs/Blogs";
import BlogCard from "./Views/Components/BlogCard/BlogCard";
import SearchResults from "./Views/Pages/About/Blogs/SearchResults";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route without Layout */}
        <Route path="/login" element={<Login />} />

        {/* All other routes with Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />

        {/* AboutPage */}
        <Route path="/blog" element={<Layout><Blogs /></Layout>} />
        <Route path="/blog/page/:page" element={<Layout><BlogCard /></Layout>} />
        <Route path="/search" element={<Layout><SearchResults /></Layout>} />
        <Route path="/driver-jobs" element={<Layout><Driver /></Layout>} />

        {/* ServicePage */}
        <Route path="/concrete-delivery-service" element={<Layout><ConcreteDeliveryService /></Layout>} />
        <Route path="/sidewalk" element={<Layout><Sidewalk /></Layout>} />
        <Route path="/driveway" element={<Layout><Driveway /></Layout>} />
        <Route path="/slab" element={<Layout><Slab /></Layout>} />
        <Route path="/cell-fill" element={<Layout><CellFill /></Layout>} />
        <Route path="/commercial" element={<Layout><Commercial /></Layout>} />
        <Route path="/shotcrete" element={<Layout><ShotCreate /></Layout>} />
        <Route path="/decorative-concrete" element={<Layout><DecorativeConcrete /></Layout>} />
        <Route path="/construction-building-materials" element={<Layout><Buildingmaterials /></Layout>} />
        <Route path="/preferred-contractors" element={<Layout><PreferredContractors /></Layout>} />

        {/* HomeownersPage */}
        <Route path="/instance-quote" element={<Layout><InstantQuote /></Layout>} />

        {/* ContactPage */}
        <Route path="/contact-us" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;