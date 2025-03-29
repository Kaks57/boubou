import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CountrySelector } from "@/components/CountrySelector";

const VentePrivee = () => {
  const [isMessageVisible, setMessageVisible] = useState(true);

  const whatsappMessage =
    "Bonjour, n’hésitez pas à m’appeler :\nPour confirmer votre présence à la vente privée.\n20.000 CFA à envoyer sur Orange Money ou Wave. Cette somme sera déduite de votre potentiel achat.\n\nUne fois le paiement effectué, je vous donnerai un code et l’adresse.\n\nIl faudra communiquer ce code à l’entrée.\n\n+225 0719427881";

  const handleWhatsApp = () => {
    const phoneNumber = "2250719427881";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  // Hide the temporary message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageVisible(false);
    }, 3000);

    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, []);

  return (
    <>
      <Navbar />
      <CountrySelector />

      <main className="container-tight py-12">
        {/* Message temporaire */}
        {isMessageVisible && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md transition-opacity duration-500">
            🎉 Bienvenue à la vente privée ! Profitez des meilleures offres 🔥
          </div>
        )}

        {/* Texte principal avec marges */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto text-center mt-32">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Vente Privée Exclusive !
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            Nous sommes ravis de vous inviter à notre vente privée en Côte d’Ivoire à Abidjan !
          </p>
          <p className="text-gray-700 mt-2 text-lg">Pour participer, suivez ces étapes simples :</p>

          <ul className="text-left text-gray-600 mt-6 space-y-3">
            <li>✅ Cliquez sur le lien du site disponible sur ma biographie.</li>
            <li>✅ Allez sur "Ventes Privées" et sélectionnez "Réservez une place".</li>
            <li>✅ Vous serez redirigé sur WhatsApp pour confirmer votre participation.</li>
            <li>✅ Effectuez le paiement de <strong>20.000 CFA</strong> via Wave ou Orange Money.</li>
            <li>✅ Une fois le paiement validé, vous recevrez un code et l’adresse.</li>
          </ul>

          <p className="text-gray-700 mt-6 font-semibold text-lg">
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
      </main>

      <Footer />
    </>
  );
};

export default VentePrivee;
