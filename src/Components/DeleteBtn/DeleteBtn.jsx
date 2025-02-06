import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DeleteBtn = ({ doctorId }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce docteur ?")) {
      return; // Annule si l'utilisateur clique sur "Annuler"
    }

    try {
      const response = await fetch(`https://localhost:8000/api/doctors/${doctorId}`, {
        method: "DELETE",
        headers: {
          "Accept": "application/ld+json",
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression du docteur.");
      }

      toast.success("Le docteur a été supprimé avec succès.");
      navigate("/"); 
    } catch (error) {
      console.error("Erreur :", error);
      toast.error("Échec de la suppression du docteur.");
    }
  };

  return (
    <button className="delete-button" onClick={handleDelete}>
      ❌ Supprimer
    </button>
  );
};

export default DeleteBtn;
