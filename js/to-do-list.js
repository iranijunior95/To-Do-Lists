const btnAdicionarTarefa = document.querySelector('#btn-add-tarefa');
const inputAdcionarTarefa = document.querySelector('#input-add');
const divListaDeTarefas = document.querySelectorAll('.lista-tarefas')[0];

const arrayListaDeTarefas = [];

const btnCancelarModal = document.querySelector('#btn-cancelar-tarefa-modal');

btnAdicionarTarefa.addEventListener('click', () => adicionarTarefa());
btnCancelarModal.addEventListener('click', () => cancelarModal());

document.querySelector('#btn-add-tarefa-modal').addEventListener('click', () => {
    const inputEdite = document.querySelector('#input-add-modal');
    const inputHidden = document.querySelector('#input-hidden-modal');

    if(inputEdite.value === '') {
        return;
    }

    arrayListaDeTarefas[inputHidden.value] = inputEdite.value;
    renderizarListaDeTarefas();
    cancelarModal();
});

function abrirModal() {
    const modal = document.querySelectorAll('.modal-edite')[0];
    const estilo = modal.style.display;

    modal.style.display = estilo === 'block' ? 'none' : 'block';
}

function cancelarModal() {
    document.querySelector('#input-add-modal').value = '';
    document.querySelector('#input-hidden-modal').value = '';
    abrirModal();
}

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
    document.querySelector('#input-add-modal').value = arrayListaDeTarefas[index];
    document.querySelector('#input-hidden-modal').value = index;
    abrirModal();
}

function deletarTarefa(index) {
    console.log(index);
}

renderizarListaDeTarefas();