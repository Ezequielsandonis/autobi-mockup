const holidays = [
  { Fecha: "2025-01-01T00:00:00-03:00", Id: 354, Descripcion: "AÑO NUEVO" },
  { Fecha: "2025-03-03T00:00:00-03:00", Id: 355, Descripcion: "CARNAVAL" },
  { Fecha: "2025-03-04T00:00:00-03:00", Id: 356, Descripcion: "CARNAVAL" },
  { Fecha: "2025-03-24T00:00:00-03:00", Id: 357, Descripcion: "DIA NACIONAL DE LA MEMORIA POR LA VERDAD Y LA JUSTICIA" },
  { Fecha: "2025-04-02T00:00:00-03:00", Id: 358, Descripcion: "DIA DEL VETERANO Y LOS CAIDOS EN LA GUERRA DE MALVINAS" },
  { Fecha: "2025-04-17T00:00:00-03:00", Id: 339, Descripcion: "JUEVES SANTO" },
  { Fecha: "2025-04-18T00:00:00-03:00", Id: 340, Descripcion: "VIERNES SANTO" },
  { Fecha: "2025-05-01T00:00:00-03:00", Id: 341, Descripcion: "DIA DEL TRABAJADOR" },
  { Fecha: "2025-05-02T00:00:00-03:00", Id: 342, Descripcion: "FERIADO CON FINES TURISTICOS" },
  { Fecha: "2025-06-16T00:00:00-03:00", Id: 343, Descripcion: "PASO A LA INMORTALIDAD DEL GENERAL MARTIN MIGUEL DE GUEMES" },
  { Fecha: "2025-06-20T00:00:00-03:00", Id: 344, Descripcion: "PASO A LA INMORTALIDAD DEL GENERAL MANUEL BELGRANO" },
  { Fecha: "2025-07-09T00:00:00-03:00", Id: 345, Descripcion: "DIA DE LA INDEPENDENCIA" },
  { Fecha: "2025-08-15T00:00:00-03:00", Id: 346, Descripcion: "FERIADO CON FINES TURISTICOS" },
  { Fecha: "2025-11-21T00:00:00-03:00", Id: 347, Descripcion: "FERIADO CON FINES TURISTICOS" },
  { Fecha: "2025-11-24T00:00:00-03:00", Id: 348, Descripcion: "DIA DE LA SOBERANIA NACIONAL" },
  { Fecha: "2025-12-08T00:00:00-03:00", Id: 349, Descripcion: "DIA DE LA INMACULADA CONCEPCION DE MARIA" },
  { Fecha: "2025-12-24T00:00:00-03:00", Id: 353, Descripcion: "NOCHEBUENA" },
  { Fecha: "2025-12-25T00:00:00-03:00", Id: 350, Descripcion: "NAVIDAD" },
  { Fecha: "2025-12-31T00:00:00-03:00", Id: 351, Descripcion: "FIN DE AÑO" },
];

export const disabledDates = holidays.map((h) => new Date(h.Fecha));

export const holidaySet = new Set(holidays.map((h) => new Date(h.Fecha).toISOString().split("T")[0]));
