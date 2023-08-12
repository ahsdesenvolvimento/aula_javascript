
$(document).ready(function () {
    //função para adicionar uma tarefa a lista
    function addTask(taskText) {

        var taskItem = $("<div></div>").text(taskText);
            taskItem.addClass("task");

        var doneButton = $("<button>Concluido</button>").click(function () {
            taskItem.addClass("done");
        });

        var deleteButton = $("<button>Remover</button>").click(function (){
            taskItem.remove();
        });

        taskItem.append(doneButton, deleteButton);
        $("#taskList").append(taskItem);
    }

    //Evento ao clicar no botão "Adicionar"
        $("#addTask").click(function (){
            var newTaskText = $("#newTask").val().trim();
            if (newTaskText !=="") {
                addTask(newTaskText);
                $("#newTask").val("");
            }
        });

        //Evento ao pressionar a tecla "Enter" no campo de texto
        $("#newTask").keypress(function (event) {
            if (event.which === 13) {
                $("#addTask").click();
            }
        });

        //Evento ao clicar no botão "Limpar concluidas"
        $("#clearCompleted").click(function () {
            $(".done").remove();
        });
   });