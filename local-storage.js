function List(key){
    this.key = key; // this key is to create many and diferents list

    this.addActivity = function(activity){
        if (this.broser_IsSoported()) {
            if (localStorage.getItem(this.key)) {
                var activities = JSON.parse(localStorage.getItem(this.key)); // convert to array
            } else {
                var activities = []; // create array
            }

            activities.push(activity); //save item
            localStorage.setItem(this.key, JSON.stringify(activities)); // convert to Json
            return true;
        }
        return false;
    }

    this.getActivities = function(){
        if (localStorage.getItem(this.key) != "undefined") {
            return JSON.parse(localStorage.getItem(this.key));
        }

        return null;
    }

    this.deleteActivity = function(activity) {
        var activities = JSON.parse(localStorage.getItem(this.key));
        if (activities != null) {
            var indexs = activities.length;

            if (0 == activities.length) {
                console.log("lista vacia agrege un nuevo item");
                return false;
            }

            activities = activities.filter(function(i) {
                return i != activity; // IF activity Not Equals to i, activity will be deleted
            });
    
            localStorage.setItem(this.key, JSON.stringify(activities));
            if(indexs != activities.length) return true;
        }
    }

    this.deleteAllActivities = function() {
        localStorage.removeItem(this.key);
    }
 
    this.broser_IsSoported = function() {
        if(typeof(Storage) !== "undefined") return true;
        return false;
    }
}