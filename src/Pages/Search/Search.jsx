import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Search.css";
import CardProfile from "../../Components/CardProfile/CardProfile";

const Search = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    name: "",
    specialty: "",
    city: "",
    zip: "",
  });
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const getDoctorsAsync = async () => {
    try {
      const response = await fetch(`https://localhost:8000/api/doctors`);
      if (!response.ok) {
        toast.error("Erreur lors de la récupération des docteurs.");
      }
      const data = await response.json();
      // console.log(data);
      setDoctors(data.member); // Mets à jour les docteurs
    } catch (error) {
      console.error(error);
      toast.error(
        "Impossible de récupérer la liste des docteurs. Veuillez réessayer plus tard."
      );
    }
  };

  const filterDoctors = () => {
    const filtered = doctors.filter((doctor) => {
      return (
        (searchQuery.name === "" ||
          doctor.firstname
            .toLowerCase()
            .includes(searchQuery.name) ||
          doctor.lastname
            .toLowerCase()
            .includes(searchQuery.name)) &&
        (searchQuery.specialty === "" ||
          doctor.specialty
            .toLowerCase()
            .includes(searchQuery.specialty)) &&
        (searchQuery.city === "" ||
          doctor.city.toLowerCase().includes(searchQuery.city)) &&
        (searchQuery.zip === "" || doctor.zip.includes(searchQuery.zip))
      );
    });
    setFilteredDoctors(filtered);
  };

  useEffect(() => {
    getDoctorsAsync();
  }, []);

  useEffect(() => {
    filterDoctors();
  }, [searchQuery]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="doctor-search">
      <h2>Rechercher un Docteur</h2>
      <form onSubmit={(e) => e.preventDefault()} className="search-form">
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={searchQuery.name}
            onChange={handleChange}
            placeholder="Nom du docteur"
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialty">Spécialité :</label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            value={searchQuery.specialty}
            onChange={handleChange}
            placeholder="Spécialité"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">Ville :</label>
          <input
            type="text"
            id="city"
            name="city"
            value={searchQuery.city}
            onChange={handleChange}
            placeholder="Ville"
          />
        </div>

        <div className="form-group">
          <label htmlFor="zip">Code Postal :</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={searchQuery.zip}
            onChange={handleChange}
            placeholder="Code postal"
          />
        </div>

        <button type="button" onClick={filterDoctors} className="search-button">
          Rechercher
        </button>
      </form>
      <div className="doctor-results">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <CardProfile doctor={doctor} key={doctor.id} />
          ))
        ) : (
          <p>Aucun docteur trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
