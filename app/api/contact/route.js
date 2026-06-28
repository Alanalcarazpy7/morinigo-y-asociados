const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value) {
  return String(value || "").trim().replace(/[<>]/g, "");
}

export async function POST(request) {
  const formData = await request.formData();
  const honeypot = sanitize(formData.get("company_website"));

  if (honeypot) {
    return Response.json({ ok: true }, { status: 200 });
  }

  const payload = {
    name: sanitize(formData.get("name")),
    email: sanitize(formData.get("email")),
    phone: sanitize(formData.get("phone")),
    service: sanitize(formData.get("service")),
    message: sanitize(formData.get("message"))
  };

  if (payload.name.length < 2 || !emailRegex.test(payload.email) || payload.message.length < 10) {
    return Response.json({ ok: false, error: "Datos inválidos" }, { status: 400 });
  }

  // Producción: conectar aquí con Resend, SendGrid, Gmail API, CRM o base de datos.
  // No se guarda información sensible en este starter.
  console.info("Nueva consulta validada", payload);

  return Response.json({
    ok: true,
    message: "Consulta recibida. Conecte un proveedor de correo para envío real."
  });
}
