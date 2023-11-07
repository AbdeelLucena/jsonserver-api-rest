import React from "react"; // Importa a biblioteca React
import Form from "./Form"; // Importa o componente Form de outro arquivo

// Define o componente Table, que recebe as props users, postUser, updateUser e deleteUser
const Table = ({ users, postUser, updateUser, deleteUser }) => {
	// Define uma função chamada showUpdateUser que recebe um ID de usuário e altera a visibilidade do formulário de atualização
	const showUpdateUser = id => {
		const form = document.getElementsByClassName(`show-form-${id}`); // Seleciona o elemento do formulário com base no ID
		form[0].classList.toggle("hide-form"); // Alterna a classe "hide-form" para mostrar ou ocultar o formulário
	}

	// Define um subcomponente chamado Row, que recebe um objeto de usuário
	const Row = ({ user }) => {
		return (
			<>
				<div className='row'> {/* Uma linha na tabela para exibir os dados do usuário */}
					<div>{user.name}</div> {/* Exibe o nome do usuário */}
					<div>{user.email}</div> {/* Exibe o email do usuário */}
					<div>{user.phone}</div> {/* Exibe o número de telefone do usuário */}
					<div>{user.companies.name}</div> {/* Exibe o nome da empresa do usuário */}
					<div className='buttons'>
						<button onClick={() => showUpdateUser(user.id)}>Update</button> {/* Botão para atualizar o usuário */}
						<button onClick={() => deleteUser(user.id)}>Delete</button> {/* Botão para excluir o usuário */}
					</div>
				</div>
				<div className={`hide-form show-form-${user.id}`}> {/* Um formulário oculto para atualizar o usuário */}
					<Form userData={user} postUser={postUser} updateUser={updateUser} /> {/* Renderiza o componente Form com dados do usuário */}
				</div>
			</>
		)
	}

	// Renderiza o componente Table, exibindo uma tabela de dados dos usuários
	return (
		<div className='table'>
			<div className='titles'>
				<div>Name</div>
				<div>Email</div>
				<div>Phone</div>
				<div>Company</div>
				<div>Actions</div>
			</div>
			<div className='rows'>
				{users && users.map(u => <Row user={u} key={u.id} />)} {/* Mapeia e renderiza as linhas da tabela com os dados dos usuários */}
			</div>
		</div>
	)
}

export default Table; // Exporta o componente Table como padrão
