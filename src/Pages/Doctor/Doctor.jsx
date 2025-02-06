import './Doctor.css';
import { useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import DeleteBtn from '../../Components/DeleteBtn/DeleteBtn';

const Doctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({
    firstname: "",
    lastname: "",
    specialty: "",
    city: "",
    zip: "",
    phone: "",
    image: "",
  });

  const getDoctorAsync = async () => {
    try {
      const response = await fetch(`https://localhost:8000/api/doctors/${id}`);
      if (!response.ok) {
        toast.error("Erreur lors de la recherche des informations du docteur.");
      }
      const data = await response.json();
      // console.log(data);
      setDoctor(data); 
    } catch (error) {
      console.error(error);
      toast.error("Impossible de se connecter pour récupérer les informations du docteur. Veuillez réessayer plus tard.");
    }
  };

  useEffect(() => {
    getDoctorAsync();
  }, []);

  return (
    <div className="doctor-details">
      <div className="doctor-card">
        <div className="doctor-image">
          <img src={doctor.image} alt={`${doctor.firstname} ${doctor.lastname}`} />
        </div>
        <div className="doctor-info">
          <h2>{`${doctor.firstname} ${doctor.lastname}`}</h2>
          <p className="speciality">{doctor.speciality}</p>
          <div className="doctor-contact">
            <p><strong>Adresse:</strong> {doctor.address}</p>
            <p><strong>Code Postal:</strong> {doctor.zip}</p>
            <p><strong>Ville:</strong> {doctor.city}</p>
            <p><strong>Téléphone:</strong> {doctor.phone}</p>
          </div>
        </div>
        <NavLink
          to={`/docteur/update/${doctor.id}`}
          aria-label={`Aller à la page pour modifier les informations d'un docteur`}
          className="update"
        >
          Modifier
        </NavLink>

        <DeleteBtn doctorId={doctor.id} />
      </div>
    </div>
  );
};

export default Doctor;