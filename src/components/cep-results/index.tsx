import { ResultProps } from '@/components/cep-form'
import React from 'react'
import styled from 'styled-components'

const ResultItemContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  color: ${({ theme }) => theme.colors.shilo};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  font-family: 'Arial', sans-serif;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

const ResultTitle = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`

const ResultText = styled.p`
  margin-left: 10px;
`

const Label = styled.span`
  font-weight: bold;
`

export type ResultItemProps = ResultProps

const ResultItem = ({ cep, logradouro, localidade, uf }: ResultItemProps) => (
  <ResultItemContainer>
    <ResultTitle>
      <Label>CEP:</Label> <ResultText>{cep}</ResultText>
    </ResultTitle>
    <ResultTitle>
      <Label>Logradouro:</Label> <ResultText>{logradouro}</ResultText>
    </ResultTitle>
    <ResultTitle>
      <Label>Cidade:</Label> <ResultText>{localidade}</ResultText>
    </ResultTitle>
    <ResultTitle>
      <Label>UF:</Label> <ResultText>{uf}</ResultText>
    </ResultTitle>
  </ResultItemContainer>
)

export { ResultItem }
