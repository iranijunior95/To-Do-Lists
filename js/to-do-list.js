const btnAdicionarTarefa = document.querySelector('#btn-add-tarefa');
const inputAdcionarTarefa = document.querySelector('#input-add');
const divListaDeTarefas = document.querySelectorAll('.lista-tarefas')[0];

const arrayListaDeTarefas = [];

btnAdicionarTarefa.addEventListener('click', () => adicionarTarefa());

function adicionarTarefa() {
    
    if(inputAdcionarTarefa.value === '') {
        return;
    }

    arrayListaDeTarefas.push(inputAdcionarTarefa.value);
    inputAdcionarTarefa.value = ``;
    inputAdcionarTarefa.focus();
    renderizarListaDeTarefas();
}

function renderizarListaDeTarefas() {

    if(arrayListaDeTarefas.length === 0) {

        divListaDeTarefas.innerHTML = `<div class="tarefas-vazias">
                                            <p id="p-nome-tarefa-vazia">Nenhuma tarefa cadastrada</p>
                                        </div>`;

    }else {

        divListaDeTarefas.innerHTML = ``;

        arrayListaDeTarefas.forEach((elementos, index) => {
            divListaDeTarefas.innerHTML += `<div class="tarefas">
                                                <p id="p-nome-tarefa">${elementos}</p>
                                                <button type="button" class="btn-tarefa-alterar" onClick="editarTarefa(${index})">
                                                    <span class="material-symbols-outlined">
                                                        edit
                                                    </span>
                                                </button>
                                                

                                                <button type="button" class="btn-tarefa-deletar" onClick="deletarTarefa(${index})">
                                                    <span class="material-symbols-outlined">
                                                    delete
                                                    </span>
                                                </button>
                                            </div>`;
        });
    }
}

function editarTarefa(index) {
    
    document.querySelector('#p-nome-tarefa').innerHTML = `test`;
}

function deletarTarefa(index) {
    console.log(index);
}

renderizarListaDeTarefas();