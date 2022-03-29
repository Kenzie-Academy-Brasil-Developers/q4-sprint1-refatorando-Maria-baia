/** @format */
import * as yup from "yup";

export const companySchema = yup.object().shape({
  name: yup
    .string("Formato de nome inválido")
    .required("Campo de nome obrigatório"),
  cnpj: yup
    .string("Formato de cnpj inválido")
    .matches(/^[0-9]{14}$/)
    .required("Campo de cnpj obrigatório"),
  password: yup
    .string("Formato de senha inválido")
    .required("Campo de senha obrigatório"),
  cep: yup
    .string("Formato de cep inválido")
    .required("Campo de cep obrigatório"),
  address: yup
    .string("Formato de endereço inválido")
    .required("Campo de endereço obrigatório"),
  number: yup
    .number("Formato de número inválido")
    .required("Campo de número obrigatório")
    .positive("Formato de número inválido")
    .integer("Formato de número inválido"),
  state: yup
    .string("Formato de estado inválido")
    .matches(/^[A-Z]{2}$/)
    .required("Campo de estado obrigatótio"),
  city: yup
    .string("Formato de cidade inválido")
    .required("Campo de cidade obrigatório"),
});
