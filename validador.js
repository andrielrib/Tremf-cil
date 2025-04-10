function validarFormulario() {
    const nome = document.getElementById('nome_maquinista').value.trim();
    const cpf = document.getElementById('cpf_maquinista').value.trim();
    const idade = parseInt(document.getElementById('idade_maquinista').value, 10);
    const experiencia = parseInt(document.getElementById('experiencia_maquinista').value, 10);

    if (!nome) {
        alert('Por favor, preencha o nome.');
        return;
    }

    if (!cpf || cpf.length !== 11 || isNaN(cpf)) {
        alert('Por favor, insira um CPF válido com 11 dígitos numéricos.');
        return;
    }

    if (isNaN(idade) || idade < 30) {
        alert('A idade deve ser maior ou igual a 30 anos.');
        return;
    }

    if (isNaN(experiencia) || experiencia < 3) {
        alert('A experiência deve ser de pelo menos 3 anos.');
        return;
    }

    alert('Formulário enviado com sucesso!');
}
