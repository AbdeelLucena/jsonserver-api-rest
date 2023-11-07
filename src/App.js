import { LogoIcon } from "./assets/icons"
// importação da logoIcon no diretório assets
import CrudUser from "./components/CrudUser"
// importação do CrudUser noo diretório componentes
import "./styles/App.css"
// importação do Styles(estilização)

function App() {
	return (
		<>
			<header>
				<div className='header__content'>
					<div className='logo'>
						<LogoIcon />
						<strong>JSON SERVER API</strong>
					</div>
				</div>
			</header>
			<main>
				<CrudUser />
			</main>
		</>
	)
}

export default App

// nessa parte do código , no qual cria uma função para executar o App, retornando  o header que contém uma div.classeName cintendo a logoIcon e um strong com um Json server API  eo main com o CrudUser. 
