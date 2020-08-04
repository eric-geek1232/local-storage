window.addEventListener('load', init, false);
window.addEventListener('storage', activityAdded, false);
var storage;
var key = 'first_list';
function init() {
    const form = document.querySelector("#todo_form");
    const delete_btn = document.querySelector("#delete");
    const deleteAll_btn = document.querySelector("#delete-all");

    storage = new List(key);
    form.addEventListener('submit', addActivity, false);
    updateList(storage.getActivities());

    delete_btn.addEventListener('click', deleteActivity, false);
    deleteAll_btn.addEventListener('click', removeAll, false);

}

function deleteActivity(e) {
    e.preventDefault();
    const activity = document.querySelector ('#todo').value;
    if (storage.deleteActivity(activity)){
        console.log("se ha elimidado exitosamente");
        document.getElementById("todo").value = "";
        updateList(storage.getActivities());
    }
}

function removeAll(e) {
    e.preventDefault();
    storage.deleteAllActivities();
    updateList(storage.getActivities());
}

function addActivity(e) {
    e.preventDefault();
    const activity = document.querySelector ('#todo').value;
    if (storage.addActivity(activity)){
        console.log("se ha agregado un nuevo elemento a la lista");
        document.getElementById("todo").value = "";
        updateList(storage.getActivities());
    }
}

function updateList(activities) {
    const list = document.querySelector ('#todo_list');
    list.innerHTML = "";

    if (activities != null) {
        for (i in activities){
            const activity = activities[i];
            var element = document.createElement('li');
            element.innerHTML = activity;
            list.appendChild(element);
        }
    }
}

function activityAdded(e) {
    console.log(e.key);
    updateList(storage.getActivities());
}