var res = fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json()).then((data1)=>foo(data1))

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className="row";

function foo(data1){
  for(var i =0;i<data1.length;i++){
    var col = document.createElement("div");
    col.className ="col-lg-4";
    col.innerHTML =

    
    row.append(col);
    container.append(row);
    document.body.append(container);

  }  
}