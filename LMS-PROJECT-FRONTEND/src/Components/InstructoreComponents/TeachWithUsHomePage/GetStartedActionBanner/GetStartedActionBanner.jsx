import { NavLink } from "react-router";
import "./GetStartedActionBanner.css";
import { Button } from "@/components/ui/button";

export default function GetStartedActionBanner() {
  return (
    <div className="getStart-container">
      <h1>Become an instructor today</h1>
      <p>Join one of the world’s largest online learning</p>
      <p>marketplaces.</p>
      <NavLink to="/instructor/form">
        <Button>Get Started</Button>
      </NavLink>
    </div>
  );
}
