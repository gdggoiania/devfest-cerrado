import { TicketBatch } from "models/ticket-batch";
import configValues from "helpers/config";

const ticketBatches: Array<TicketBatch> = [
  new TicketBatch({
    description: "Entrada + Kit + Camiseta",
    firstSaleDate: new Date("2026-09-01"),
    finalSaleDate: new Date("2026-09-08"),
    title: "Promocional",
    link: configValues.eventLinkRegistrationUrl,
    value: 65,
    tShirt: true,
  }),
  new TicketBatch({
    description: "Entrada + Kit + Camiseta",
    firstSaleDate: new Date("2026-09-01"),
    finalSaleDate: new Date("2026-10-10"),
    title: "1º Lote ",
    link: configValues.eventLinkRegistrationUrl,
    value: 140,
    tShirt: true,
  }),
  new TicketBatch({
    description: "Entrada + Kit",
    firstSaleDate: new Date("2026-09-01"),
    finalSaleDate: new Date("2026-10-10"),
    title: "1º Lote",
    link: configValues.eventLinkRegistrationUrl,
    value: 99,
    tShirt: false,
  }),
  new TicketBatch({
    description: "Entrada + Kit + Camiseta",
    firstSaleDate: new Date("2026-11-01"),
    finalSaleDate: new Date("2026-11-27"),
    title: "2º Lote",
    link: configValues.eventLinkRegistrationUrl,
    value: 165,
    tShirt: true,
  }),
  new TicketBatch({
    description: "Entrada + Kit",
    firstSaleDate: new Date("2026-11-01"),
    finalSaleDate: new Date("2026-11-27"),
    title: "2º Lote",
    link: configValues.eventLinkRegistrationUrl,
    value: 125,
    tShirt: false,
  }),
  // new TicketBatch({
  //   description: "Entrada + Kit",
  //   firstSaleDate: new Date("2023-11-05"),
  //   finalSaleDate: new Date("2023-11-23"),
  //   title: "2º Lote",
  //   link: "javascript:void(0);",
  //   value: 85,
  // }),
];

export default ticketBatches;
