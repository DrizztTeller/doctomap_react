import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const DoctorAddForm = () => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({
    firstname: "",
    lastname: "",
    speciality: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    image: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("https://localhost:8000/api/doctors", {
        method: "POST",
        headers: {
          "Content-Type": "application/ld+json",
          "Accept": "application/ld+json",
        },
        body: JSON.stringify(doctor),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout du médecin.");
      }

      const data = await response.json();
      toast.success("Médecin ajouté avec succès !");
      navigate(`/`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="doctor-form-container">
      <h2>Ajouter un médecin</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="doctor-form">
        <input type="text" name="firstname" placeholder="Prénom" value={doctor.firstname} onChange={handleChange} required />
        <input type="text" name="lastname" placeholder="Nom" value={doctor.lastname} onChange={handleChange} required />
        <input type="text" name="speciality" placeholder="Spécialité" value={doctor.speciality} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Adresse" value={doctor.address} onChange={handleChange} required />
        <input type="text" name="city" placeholder="Ville" value={doctor.city} onChange={handleChange} required />
        <input type="text" name="zip" placeholder="Code Postal" value={doctor.zip} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Téléphone" value={doctor.phone} onChange={handleChange} />
        <input type="text" name="image" placeholder="URL de l'image" value={doctor.image} onChange={handleChange} required />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default DoctorAddForm;
