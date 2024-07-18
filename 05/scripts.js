//Programa que simula uma clinica de atendimento com funcoes especificas para cada operacao da clinica

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(pacientes, paciente) {
  pacientes.push(paciente);
  console.log(pacientes.join(', '));
}

function atenderPaciente(pacientes) {
  pacientes.shift();
  console.log(pacientes.join(', '));
}

function cancelarAtendimento(pacientes, paciente) {
  const index = pacientes.indexOf(paciente);
  if (index !== -1) {
      pacientes.splice(index, 1);
  }
  console.log(pacientes.join(', '));
}

agendarPaciente(pacientes, 'Fernanda'); // Adiciona 'Fernanda' ao final da lista
atenderPaciente(pacientes); // Remove o proximo paciente da fila
cancelarAtendimento(pacientes, 'Maria'); // Cancela o atendimento de 'Maria'