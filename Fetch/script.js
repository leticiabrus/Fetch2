// Função que é chamada quando a página é carregada
function onPageLoad(){



    // Faz uma requisição para a API do RandomUser para obter dados de 50 usuários
    fetch("https://randomuser.me/api/?results=50")


    // Processa a resposta da requisição e a converte para JSON
    .then(response => response.json())


    // Quando os dados estiverem disponíveis, executa esta função
    .then(data => {


        // Obtém o elemento HTML com o id 'userList' onde os usuários serão exibidos
        const userListDiv = document.getElementById('userList');

        // Itera sobre cada usuário recebido da API
        data.results.forEach(user => {


            // Cria um novo elemento div para exibir as informações do usuário
            const userDiv = document.createElement('div');


            // Adiciona a classe 'user' ao elemento div
            userDiv.classList.add('user');

            // Preenche o conteúdo do elemento div com as informações do usuário
            userDiv.innerHTML = `
                <img src="${user.picture.medium}" alt="${user.name.first}">
                <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Email:</strong> ${user.email}</p> 
                <p><strong>Age:</strong> ${user.dob.age}</p>
                <p><strong>phone:</strong> ${user.phone}</p>
                <p><strong>Location:</strong> ${user.location.city}, ${user.location.state}</p> <!-- Inclui a localização do usuário -->
                <p><strong>Country:</strong> ${user.location.country}</p> <!-- Inclui o país do usuário -->


                
            `;

            // Adiciona o elemento div à lista de usuários
            userListDiv.appendChild(userDiv);
        });
    })


    // Trata erros que possam ocorrer durante a requisição
    .catch(error => console.error('Error fetching users:', error));
}



// Chama a função onPageLoad() para iniciar o processo de carregamento dos usuários
onPageLoad();