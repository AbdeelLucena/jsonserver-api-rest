// importa o módulo "useState" do React
import React, { useState } from 'react';

// Define um componente chamado "Form" que recebe três props, userData, postUser e updateUser
const Form = ({ userData = {}, postUser, updateUser }) => {
  // Inicializa o estado do componente com dados do usuários


// Nome do usuário, email,phone,companies ou no caso uma string vazia se não for fornecido
  const [user, setUser] = useState({
    name: userData.name ?? "", 
    username: userData.username ?? "", 
    email: userData.email ?? "", 
    phone: userData.phone ?? "", 
    companiesId: userData.companiesId ?? "0", 
  })

  // Função que  atualiza os campos do usuário no estado
  const handleValue = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // Função que  lida com a submissão do formulário
  const submitUser = e => {
    e.preventDefault()

    // Verifica se o campo "companiesId" é igual a "0" 
    if (user.companiesId === "0") return

    // Chama a função postUser ou updateUser com os dados do usuário, dependendo se o usuário já existe 
    if (userData.id) {
      updateUser(userData.id, user)
    } else {
      postUser(user)
    }
  }

  // Renderiza o componente, exibindo um formulário
  return (
    <form onSubmit={submitUser} className='row'>
      {/* Inputs para o nome, email, telefone e empresas */}
      <input
        type='text'
        name='name'
        value={user.name}
        placeholder='Name'
        onChange={e => handleValue(e)}
      />
      <input
        type='email'
        name='email'
        value={user.email}
        placeholder='Email'
        onChange={e => handleValue(e)}
      />
      <input
        type='tel'
        name='phone'
        value={user.phone}
        placeholder='Phone (10)'
        pattern='[0-9]{10}'
        onChange={e => handleValue(e)}
      />
      <DropComapies companiesId={user.companiesId} handleValue={handleValue} />
      {/* Botão de envio do formulário com texto dinâmico com base na existência do usuário */}
      <input
        className='btn-submit'
        type='submit'
        value={`${!userData.id ? "Add new user" : "Save user"}`}
      />
    </form>
  )
}

// Exporta o componente "Form" como padrão
export default Form
