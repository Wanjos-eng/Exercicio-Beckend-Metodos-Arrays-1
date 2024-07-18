//Programa que imita o funcionamento basico de uma clinica de atendimento

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function atendimentoClinica(pacientes, operacao, nomePaciente = '') {
  if (operacao === 'agendar') {
      pacientes.push(nomePaciente);
  } else if (operacao === 'atender') {
      pacientes.shift();
  } else {
      console.log("Operacao invalida. Informe 'agendar' ou 'atender'.");
      return;
  }

  console.log(pacientes.join(', '));
}

atendimentoClinica(pacientes, 'agendar', 'Fernanda'); // Adiciona 'Fernanda' ao final da lista
atendimentoClinica(pacientes, 'atender'); // Remove o próximo paciente da fila