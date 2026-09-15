const configValues = {
  name: "DevFest Cerrado 2026",
  eventDate: "2026-11-28T08:00:00",
  eventLinkRegistrationUrl: "https://doity.com.br/devfest-cerrado-2026",
  place: "Local: Equatore Eventos",
  formattedDate: "Dia 28 de Novembro de 2026",
  email: "gdggoiania@gmail.com",
};

const resolveURL = () => {
  let finalUrl = "";
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    finalUrl = process.env.NEXT_PUBLIC_SITE_URL;
  } else if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    finalUrl += `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  return finalUrl;
};

export const server = resolveURL();

export default configValues;
