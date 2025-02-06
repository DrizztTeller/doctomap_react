import { useState, useEffect } from "react";
import "./Home.css";
import CardProfile from "../../Components/CardProfile/CardProfile";
import { toast } from "react-toastify";

const Home = () => {
  const [doctors, setDoctors] = useState([]);

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
      toast.error("Impossible de récupérer la liste des docteurs. Veuillez réessayer plus tard.");
    }
  };

  useEffect(() => {
    getDoctorsAsync();
  }, []);
  return (
    <article id="Home">
      {doctors.length >0 && doctors.map((doctor, index) => (
        <CardProfile doctor={doctor} key={index}/>
      ))}
    </article>
  );
};

export default Home;
