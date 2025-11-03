const consultas = [
  {
    "id": 1,
    "paciente_nome": "Ana Costa",
    "telefone": "(11) 99999-1234",
    "medico_nome": "Dr. Haron",
    "especialidade": "Cardiologia",
    "data": "2024-09-25",
    "hora": "14:00",
    "status": "agendada"
  },
  {
    "id": 2,
    "paciente_nome": "Jose Silva",
    "telefone": "(11) 98888-5678",
    "medico_nome": "Dr. Bruno",
    "especialidade": "Clinico Geral",
    "data": "2024-09-26",
    "hora": "09:30",
    "status": "finalizada"
  },
  {
    "id": 3,
    "paciente_nome": "Maria Lima",
    "telefone": "(11) 97777-4321",
    "medico_nome": "Dr. Haron",
    "especialidade": "Cardiologia",
    "data": "2024-09-27",
    "hora": "10:15",
    "status": "em andamento"
  },
  {
    "id": 4,
    "paciente_nome": "Carlos Pereira",
    "telefone": "(11) 96666-1111",
    "medico_nome": "Dr. Bruno",
    "especialidade": "Clinico Geral",
    "data": "2024-09-28",
    "hora": "15:00",
    "status": "agendada"
  },
  {
    "id": 5,
    "paciente_nome": "Julia Souza",
    "telefone": "(11) 95555-8888",
    "medico_nome": "Dr. Paulo Muzy",
    "especialidade": "Ortopedia",
    "data": "2024-09-29",
    "hora": "13:45",
    "status": "agendada"
  }
];

function buscarPorEspecialidade() {
  const especialidadeBuscada = document.getElementById('buscar').value.toLowerCase();
  
  const linhas = document.querySelectorAll('#consulta-tbody tr');
  
  let encontrou = false; 

  linhas.forEach(linha => {
    const especialidadeCelula = linha.querySelector('.especialidade'); 
    const especialidade = especialidadeCelula.textContent.toLowerCase();

    if (especialidade.includes(especialidadeBuscada)) {
      linha.style.display = ''; 
      encontrou = true;
    } else {
      linha.style.display = 'none'; 
    }
  });

  if (!encontrou) {
    console.log(`Nenhuma consulta encontrada para "${especialidadeBuscada}".`);
  }
}

// $ serve para incluir variaveis chatas