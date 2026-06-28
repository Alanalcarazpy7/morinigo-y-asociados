import { company } from "@/data/company";

export function getWhatsAppUrl(message = "Hola, quiero solicitar información sobre sus servicios.") {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${company.whatsapp}?text=${encoded}`;
}
