import React, { useState, useEffect } from "react"; // Importa as bibliotecas React, useState e useEffect
import Form from "./Form"; // Importa o componente Form de outro arquivo
import Table from "./Table"; // Importa o componente Table de outro arquivo
import { httpHelper } from "../helpers/httpHelper"; // Importa a função httpHelper de um módulo externo

// Define o componente CrudUser
const CrudUser = () => {
  const [users, setUsers] = useState(null); // Inicializa o estado para armazenar a lista de usuários

  const url = "http://localhost:5000/users"; // Define a URL da API de usuários
  const api = httpHelper(); // Chama a função httpHelper para criar um objeto de utilitário de requisição HTTP

  // Utiliza o hook useEffect para buscar a lista de usuários quando o componente é montado
  useEffect(() => {
    getUsers(); // Chama a função getUsers para buscar os usuários
  }, []);

  // Função para adicionar um novo usuário
  const postUser = user => {
    api
      .post(`${url}`, { body: user }) // Envia uma requisição POST para a URL da API para adicionar um usuário
      .then(res => getUsers()) // Após a conclusão da operação, busca novamente a lista de usuários
      .catch(err => console.log(err)); // Lida com erros da requisição
  }

  // Função para atualizar um usuário existente
  const updateUser = (id, user) => {
    api
      .put(`${url}/${id}`, { body: user }) // Envia uma requisição PUT para a URL da API para atualizar um usuário
      .then(res => getUsers()) // Após a conclusão da operação, busca novamente a lista de usuários
      .catch(err => console.log(err)); // Lida com erros da requisição
  }

  // Função para excluir um usuário
  const deleteUser = id => {
    api
      .del(`${url}/${id}`, {}) // Envia uma requisição DELETE para a URL da API para excluir um usuário
      .then(res => getUsers()) // Após a conclusão da operação, busca novamente a lista de usuários
      .catch(err => console.log(err)); // Lida com erros da requisição
  }

  // Função para buscar a lista de usuários
  const getUsers = () => {
    api
      .get(`${url}?_expand=companies`) // Envia uma requisição GET para a URL da API para buscar a lista de usuários e suas empresas
      .then(res => {
        setUsers(res); // Atualiza o estado com a lista de usuários
      })
      .catch(err => console.log(err)); // Lida com erros da requisição
  }

  // Se a lista de usuários ainda não foi carregada, retorna null para evitar erros
  if (!users) return null;

  // Renderiza o componente CrudUser
  return (
    <>
      <h3>New user</h3>
      <Form postUser={postUser} /> {/* Renderiza o componente Form para adicionar um novo usuário */}
      <div className='all-users'>
        <h3>All users</h3>
        <Table
          users={users}
          setUsers={setUsers}
          postUser={postUser}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      </div>
    </>
  );
}

export default CrudUser; // Exporta o componente CrudUser como padrão
