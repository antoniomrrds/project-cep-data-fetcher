import * as yup from 'yup'

export const yupValidation = yup.object().shape({
  ceps: yup
    .array()
    .of(
      yup
        .string()
        .required('CEP é obrigatório')
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
    )
    .min(5, 'Preencha todos os 5 campos de CEP')
})
