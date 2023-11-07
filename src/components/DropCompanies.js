import React, { useState, useEffect } from "react"; // Importa as bibliotecas React, useState e useEffect
import { httpHelper } from "../helpers/httpHelper"; // Importa a função httpHelper de um módulo externo

// Define o componente DropCompanies, que recebe as props companiesId e handleValue
const DropCompanies = ({ companiesId, handleValue }) => {
	const [companies, setCompanies] = useState(null); // Inicializa o estado para armazenar a lista de empresas
	const [company, setCompany] = useState(companiesId); // Inicializa o estado para armazenar o ID da empresa selecionada

	const url = "http://localhost:5000/companies"; // Define a URL da API de empresas
	const api = httpHelper(); // Chama a função httpHelper para criar um objeto de utilitário de requisição HTTP

	// Utiliza o hook useEffect para buscar a lista de empresas quando o componente é montado
	useEffect(() => {
		api
			.get(url) // Faz uma requisição GET para a URL da API de empresas
			.then(res => {
				setCompanies([{ id: 0, name: "Select Company" }, ...res]); // Atualiza o estado com as empresas, incluindo uma opção padrão "Select Company"
			})
			.catch(err => console.log(err)); // Lida com erros da requisição
	}, []); // O array vazio assegura que o efeito seja executado somente uma vez durante a montagem do componente

	// Se a lista de empresas ainda não foi carregada, retorna null para evitar erros
	if (!companies) return null;

	// Renderiza um elemento select (caixa de seleção) que permite ao usuário escolher uma empresa
	return (
		<select
			name='companiesId'
			value={company}
			onChange={e => {
				setCompany(e.target.value); // Atualiza o estado da empresa selecionada
				handleValue(e); // Chama a função handleValue passando o evento
			}}
		>
			{companies.map(c => (
				// Mapeia a lista de empresas para criar opções na caixa de seleção
				<option value={c.id} key={c.id}>
					{c.name}
				</option>
			))}
		</select>
	);
}

export default DropCompanies; // Exporta o componente DropCompanies como padrão
