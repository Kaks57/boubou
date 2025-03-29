import React from "react";
import { Link } from "react-router-dom";

const VentePrivee = () => {
  const whatsappMessage =
    "Bonjour, n’hésitez pas à m’appeler :\nPour confirmer votre présence à la vente privée.\n20.000 CFA à envoyer sur Orange Money ou Wave. Cette somme sera déduite de votre potentiel achat.\n\nUne fois le paiement effectué, je vous donnerai un code et l’adresse.\n\nIl faudra communiquer ce code à l’entrée.\n\n+225 0719427881";

  const handleWhatsApp = () => {
    const phoneNumber = "2250719427881";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl text-center">
        <h1 className="text-2xl font-bold text-gray-900">Vente Privée Exclusive !</h1>
        <p className="text-gray-700 mt-4">
          Nous sommes ravis de vous inviter à notre vente privée en Côte d’Ivoire à Abidjan !
        </p>
        <p className="text-gray-700 mt-2">Pour participer, suivez ces étapes simples :</p>
        <ul className="text-left text-gray-600 mt-4 space-y-2">
          <li>✅ Cliquez sur le lien du site disponible sur ma biographie.</li>
          <li>✅ Allez sur "Ventes Privées" et sélectionnez "Réservez une place".</li>
          <li>✅ Vous serez redirigé sur WhatsApp pour confirmer votre participation.</li>
          <li>✅ Effectuez le paiement de 20.000 CFA via Wave ou Orange Money.</li>
          <li>✅ Une fois le paiement validé, vous recevrez un code et l’adresse.</li>
        </ul>
        <p className="text-gray-700 mt-4 font-semibold">
          Ce montant sera déduit de votre potentiel achat !
        </p>
        <p className="text-gray-700 mt-4">
          Ne ratez pas cette occasion unique de faire de bonnes affaires et de me rencontrer en personne !
        </p>
        <button
          onClick={handleWhatsApp}
          className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition"
        >
          Confirmer ma présence sur WhatsApp
        </button>
      </div>
    </div>
  );
};

export default VentePrivee;
