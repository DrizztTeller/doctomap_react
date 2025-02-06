import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./DoctorEdit.css";

function DoctorEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    firstname: "",
    lastname: "",
    speciality: "",
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
      toast.error(
        "Impossible de se connecter pour récupérer les informations du docteur. Veuillez réessayer plus tard."
      );
    }
  };

  useEffect(() => {
    getDoctorAsync();
  }, []);

  // Gérer les modifications dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };

  // Soumettre les modifications
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://localhost:8000/api/doctors/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/merge-patch+json", // format spécifique à API Platform pour requêtes patch pour mettre à jour que certains champs sans devoir envoyer tt l'objet
          Accept: "application/ld+json",
        },
        body: JSON.stringify(doctor),
      });

      if (!response.ok) {
        toast.error("Erreur lors de la mise à jour des infos du docteur.");
      } else {
        toast.success("Les infos ont bien été mises à jour.");
        navigate(`/docteur/${id}`);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="doctor-edit">
      <h2>Modifier les informations du docteur</h2>

      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label htmlFor="firstname">Prénom :</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={doctor.firstname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Nom :</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={doctor.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="speciality">Spécialité :</label>
          <input
            type="text"
            id="speciality"
            name="speciality"
            value={doctor.speciality}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">Ville :</label>
          <input
            type="text"
            id="city"
            name="city"
            value={doctor.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="zip">Code Postal :</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={doctor.zip}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Téléphone :</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={doctor.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image :</label>
          <input
            type="text"
            id="image"
            name="image"
            value={doctor.image}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Mettre à jour
        </button>
      </form>
    </div>
  );
}

export default DoctorEdit;
