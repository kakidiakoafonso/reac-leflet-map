import styled from 'styled-components/'
export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
`
export const MapContainer = styled.div`
width: 90%;
height: 100%;
`


export const FormContainer = styled.div`
width: 15%;
height: 100;
background-color: #f9f9f9;
display: flex;
justify-content: center;
`
export const Form = styled.form`
width: 80%;
height: 100px;
margin-top: 220px;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
`
export const Label = styled.label``
export const Input = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`
export const InputDate = styled.input`
margin: 10px 0;
height: 50px;
width: 100px;
`
export const SubmitButton = styled.button`
background-color: #4CAF50;
border: none;
color: white;
padding: 10px 55px;
text-align: center;
text-decoration: none;
display: inline-block;
margin: 4px;
&:hover { cursor: pointer;}
`

export const PopUpWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`
export const Title = styled.h3``
export const Description = styled.span`
margin-bottom:5px;
`
export const Date = styled.span``
export const Bottom = styled.div`
display: flex;
`
export const Delete = styled.button`
background-color: #fff;
display: flex;
align-items: flex-end;
justify-content: space-between;
color: #000;
font-size: 18px;
border: none;
outline: none;
border-radius: 2px;
cursor: pointer;
margin: 10px 0;
`