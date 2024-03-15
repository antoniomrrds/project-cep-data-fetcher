import { FiAlertTriangle } from 'react-icons/fi'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px;
  padding: 20px;
  width: 500px;
  border-radius: 8px;
  background-color: #f5d186;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const FormInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.8s;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: bold;
  text-align: center;

  &:focus {
    border-color: #007bff;
  }
`

export const FormError = styled.p`
  color: #ff6347;
  display: flex;
  align-items: center;
  font-weight: bold;
`

export const ErrorIcon = styled(FiAlertTriangle)`
  .icons {
    vertical-align: sub;
    color: red;
    font-weight: bolder;
    margin: 8px 5px 2px;
  }
  margin-right: 5px;
  font-weight: bold;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 16px;
  transition: background-color 0.3s;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #28aea5;
  }
`

export const ResultContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 24px;
  font-weight: bold;
`

export const Section = styled.section`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
