import { perfil } from "@/content/perfil"

/** Enlace a WhatsApp con el mensaje prellenado. El número nunca se muestra en la página. */
export const enlaceWhatsapp = `https://wa.me/${perfil.whatsapp.numero}?text=${encodeURIComponent(
  perfil.whatsapp.mensaje,
)}`
