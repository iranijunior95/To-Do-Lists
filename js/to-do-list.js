if(!localStorage.getItem('primeiroAcesso')) {

    const meuBody = document.querySelector('body');

    document.querySelector('#div-projeto').style.display = 'none';
    
    meuBody.innerHTML += `<div id="div-primeiro-acesso">
                            <h1>MEU PRIMEIRO ACESSO!</h1>

                            <input type="text" name="nomeUsuario" id="nomeUsuario" placeholder="Digite o nome de usuario...">

                            <button id="btnCadastrarPrimeiroAcesso">CADASTRAR</button>

                            <p id="pNomeUsuario" class="pNormal">_</p>
                        </div>`;

    const btnPrimeiroAcesso = document.getElementById('btnCadastrarPrimeiroAcesso');

    btnPrimeiroAcesso.addEventListener('click', () => {

        if(document.querySelector('#nomeUsuario').value === '') {

            document.querySelector('#pNomeUsuario').innerText = 'INSIRA O NOME DO USUARIO!';
            document.querySelector('#pNomeUsuario').classList.remove('pNormal');
            document.querySelector('#pNomeUsuario').classList.add('pErro');
        }else {

            localStorage.setItem('primeiroAcesso', document.querySelector('#nomeUsuario').value.toUpperCase());

            document.querySelector('#div-primeiro-acesso').style.display = 'none';
            document.querySelector('#div-projeto').style.display = 'block';

        }
    });
}

document.querySelectorAll('.btn-sidebar').forEach(btn => {

    btn.addEventListener('click', () => {
        document.body.classList.toggle('toggle');
    });
});

