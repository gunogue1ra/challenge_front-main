// Validação simples do formulário de contato

function validarFormularioContato(event) {
  event.preventDefault(); // Impede o envio real

  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const mensagem = document.getElementById('mensagem');

  if (!nome.value || !email.value || !mensagem.value) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  if (!email.value.includes('@')) {
    alert('Digite um e-mail válido.');
    return;
  }

  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  document.querySelector('form').reset(); // Limpa os campos
}