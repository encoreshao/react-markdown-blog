import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <>
      <div>
        <h3>Help Center</h3>
        <br />
        <nav>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  )
}