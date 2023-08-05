//$(document).ready
//$('#addTask').click(() => {
  //  var newTask = $('#newTask').val().trim()
   // console.log(newTask)

   // var taskItem = $("<div><div>").text(newText);
    //taskItem.addClass("task");

//})

$(document).ready(function () {

    function addTask(taskText) {
        var taskItem = $("<div></div>").text(taskText);
        taskItem.addClass("task");
        });
    
        var doneButton = $("<button>Concluido</button>").click(function () {
        taskItem.addClass("done");
    
        });

        var deleteButton = $("<button>Remover</button>").click(function () {
        taskItem.remove();
        
        });

        taskItem.append(doneButton, deleteButton);
        $('#taskList").append(taskItem);
    }