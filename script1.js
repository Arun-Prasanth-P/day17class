 function label_create(tagname,attrname,attrvalue,content){
    var ele= document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
 }
 function break_create(){
    var label_break = document.createElement("br");
    return label_break
 }
 function input_create(tagname,attrname,attrvalue,attrname1,attrvalue1){
var input_ele = document.createElement(tagname)
input_ele.setAttribute(attrname,attrvalue)
input_ele.setAttribute(attrname1,attrvalue1)
return input_ele
 }
 var first_name = label_create("label","for","firstname","Firstname");
 var first_name_break = break_create();
 var first_name_input = input_create("input","type","text","id","first_name");
  
 document.body.append(break_create());
document.body.append(first_name,first_name_break,first_name_input);

 var middle_name = label_create("label","for","middlename","Middle Name");
 var middle_name_break = break_create();
 var middle_name_input = input_create("input","type","text","id","middle_name")
 
 document.body.append(break_create());
 document.body.append(middle_name,middle_name_break,middle_name_input);

 var last_name = label_create("label","for","lastname","Last Name");
 var last_name_break = break_create();
 var last_name_input = input_create("input","type","text","id","last name")

document.body.append(break_create());
document.body.append(last_name,last_name_break,last_name_input);

 var email = label_create("label","for","email","Email");
 var email_break = break_create();
 var email_input = input_create("input","type","text","id","email");
 
 document.body.append(break_create());
 document.body.append(email,email_break,email_input);

 var password = label_create("label","for","password","Password");
 var password_break = break_create();
 var password_input = input_create("input","type","text","id","password")

document.body.append(break_create());
document.body.append(password,password_break,password_input);

 var file_upload = label_create("label","for","fileupload","File upload");
 var file_upload_break = break_create();
 var file_upload_input = input_create("input","type","file","id","file upload")

document.body.append(break_create());
 document.body.append(file_upload,file_upload_break,file_upload_input)

