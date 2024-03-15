import React, { useState } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ResultItem } from '@/components/cep-results'
import { yupValidation } from '@/components/cep-form/validation'
import {
  Button,
  ErrorIcon,
  FormError,
  FormGroup,
  Form,
  FormInput,
  ResultContainer,
  Section,
  Title,
  Container
} from '@/components/cep-form/styled'
import { fetchCep } from '@/utils/fetches/fetch-cep'

export type ResultProps = {
  cep: string
  logradouro: string
  localidade: string
  uf: string
  error: string
}
export type CepFormProps = {
  ceps: string[]
}

const CepForm = () => {
  const [results, setResults] = useState<ResultProps[]>([])
  const [showForm, setShowForm] = useState<boolean>(true)
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(yupValidation),
    defaultValues: { ceps: ['', '', '', '', ''] }
  })
  const submitForm: SubmitHandler<{ ceps?: string[] | undefined }> = async (
    data
  ) => {
    if (data.ceps) {
      const newResults = await Promise.all(
        data.ceps.map((cep) => fetchCep(cep))
      )
      setResults(newResults)
      setShowForm(false)
    }
  }

  const handleShowForm = () => {
    setShowForm(true)
    setResults([])
  }

  return (
    <Section>
      <Container>
        <Title>Consulta de CEPs</Title>
        {showForm && (
          <Form onSubmit={handleSubmit(submitForm)}>
            {[0, 1, 2, 3, 4].map((index) => (
              <FormGroup key={index}>
                <Controller
                  name={`ceps.${index}`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      placeholder={`CEP ${index + 1}`}
                      onChange={(e) => {
                        field.onChange(e.target.value)
                        setResults([])
                      }}
                    />
                  )}
                />
                {errors.ceps && errors.ceps[index] && (
                  <FormError>
                    <ErrorIcon size={20} />
                    {errors?.ceps[index]?.message}
                  </FormError>
                )}
              </FormGroup>
            ))}
            <Button type="submit" disabled={!!errors.ceps}>
              Buscar
            </Button>
          </Form>
        )}
      </Container>
      <ResultContainer>
        {results.length > 0 &&
          results.map((result, index) => (
            <ResultItem key={index} {...result} />
          ))}
      </ResultContainer>
      {!showForm && (
        <Button onClick={handleShowForm}>Mostrar Formulário</Button>
      )}
    </Section>
  )
}

export { CepForm }
