const configValues = {
  name: "DevFest Cerrado 2025",
  eventDate: "2025-12-13T08:00:00",
  eventLinkRegistrationUrl: "https://doity.com.br/dfc25",
  place: "Local: HUB Goiás - Centro de Excelência em Empreendedorismo Inovador",
  formattedDate: "Dia 13 de Dezembro de 2025",
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
