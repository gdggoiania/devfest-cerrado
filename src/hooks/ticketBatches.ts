import { TicketBatch } from "models/ticket-batch";
import configValues from "helpers/config";

const ticketBatches: Array<TicketBatch> = [
  new TicketBatch({
    description: "Entrada + Kit + Camiseta",
    firstSaleDate: new Date("2025-09-01"),
    finalSaleDate: new Date("2025-09-30"),
    title: "Promocional",
    link: configValues.eventLinkRegistrationUrl,
    value: 85,
    tShirt: true,
  }),
  new TicketBatch({
    description: "Entrada + Kit + Camiseta",
    firstSaleDate: new Date("2025-09-30"),
    finalSaleDate: new Date("2025-10-31"),
    title: "1º Lote ",
    link: configValues.eventLinkRegistrationUrl,
    value: 135,
    tShirt: true,
  }),
  new TicketBatch({
    description: "Entrada + Kit ",
    firstSaleDate: new Date("2025-09-30"),
    finalSaleDate: new Date("2025-10-31"),
    title: "1º Lote",
    link: configValues.eventLinkRegistrationUrl,
    value: 100,
    tShirt: false,
  }),
  // new TicketBatch({
  //   description: "Entrada + Kit",
  //   firstSaleDate: new Date("2024-11-13"),
  //   finalSaleDate: new Date("2024-11-23"),
  //   title: "2º Lote",
  //   link: configValues.eventLinkRegistrationUrl,
  //   value: 100,
  //   tShirt: false,
  // }),
  // new TicketBatch({ description: 'Entrada + Kit', firstSaleDate: new Date('2023-11-05'),
  //     finalSaleDate: new Date('2023-11-23'), title: '2º Lote', link: 'javascript:void(0);', value: 85 }),
];

export default ticketBatches;
