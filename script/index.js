function enviarMensagem() {

    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('subject').value;
    var mensagem = document.getElementById('message').value;


    if(nome === '' || email === '' || assunto === '' || mensagem === '') {
        alert('Preencha todos os campos corretamente!')
    } else {
        alert('E-mail enviado com sucesso')
    }
}