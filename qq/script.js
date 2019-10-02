const campoCep = document.getElementById('cep')

campoCep.addEventListener('blur', function () {
    consultaEnderecoPorCep(campoCep.value);
});

function consultaEnderecoPorCep(cep) {
    fetch('https://viacep.com.br/ws/' + cep + '/json/')
        .then(function (resposta) {
            resposta.json().then(function (endereco) {
                preencherCampos(endereco);
            })
        }).catch(function (erro) {
            cosole.error('Deu ruim: '.erro)
        })
}

function preencherCampos(endereco) {
    const campos = document.getElementsByClassName('address');
    campos[0].value = endereco.logradouro;
    campos[1].value = endereco.bairro;
    campos[2].value = endereco.localidade;
    campos[3].value = endereco.uf;
}