/** @format */

import * as yup from "yup";

export const vehicleSchema = yup.object().shape({
  model: yup
    .string("Formato de modelo inválido")
    .required("Campo de modelo obrigatório"),
  brand: yup
    .string("Formato de marca inválido")
    .required("Campo de marca obriatório"),
  year: yup
    .string("Formato de ano inválido")
    .required("Campo de ano obrigatório"),
  plate: yup
    .string("Formato de placa inválido")
    .required("Campo de placa obrigatório"),
});
