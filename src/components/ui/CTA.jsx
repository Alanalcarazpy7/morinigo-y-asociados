import ButtonLink from "@/components/ui/ButtonLink";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function CTA({ title = "¿Necesita asesoramiento profesional?", text = "Converse con nuestro equipo y reciba orientación según el tipo de gestión, empresa o trámite que necesita realizar." }) {
  return (
    <section className="cta-panel" aria-label="Llamado a la acción">
      <div>
        <p className="eyebrow">Atención profesional</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-panel__actions">
        <ButtonLink href={getWhatsAppUrl()} external>Consultar por WhatsApp</ButtonLink>
        <ButtonLink href="/contacto.php" variant="secondary">Ver contacto</ButtonLink>
      </div>
    </section>
  );
}
