import { NavLink } from "react-router-dom";
import "./CardProfile.css";

function CardProfile({ doctor }) {
  return (
    <NavLink to={`/docteur/${doctor.id}`} className="card-profile">
      <div className="card-content">
        <div className="profile-image">
          <img src={doctor.image} alt={`${doctor.firstname} ${doctor.lastname}`} />
        </div>
        <div className="card-details">
          <h3>{`${doctor.firstname} ${doctor.lastname}`}</h3>
          <p className="speciality">{doctor.speciality}</p>
          <p className="city">{doctor.city}</p>
          <p className="phone">{doctor.phone}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default CardProfile;
