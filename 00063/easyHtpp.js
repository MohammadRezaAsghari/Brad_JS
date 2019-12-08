const easyHttp = function () {
    this.http = new XMLHttpRequest();
}

//easyHttp get 
easyHttp.prototype.get = function(url , callback) {
    debugger;
    this.http.open('GET' , url, true);
    debugger;
    const self = this;
    debugger;
    this.http.onload = function() {
        debugger;
        if(self.http.status === 200){
            debugger;
            callback(self.http.responseText);
        }
    }
    debugger;

    this.http.send();
    
}