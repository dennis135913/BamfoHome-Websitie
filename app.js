const search = () => {
    const searchbox = document.getElementById("search-user").value.toUpperCase();
    const storeusers = document.getElementById("user-list")
    const user = document.querySelectorAll(".user")
    const uname = storeusers.getElementsByTagName("h2")

    for(var i=0; i < uname.length; i++){
        let match = user[i].getElementsByTagName("h2")[0];


        if(match){
           let textvalue = match.textContent || match.innerHTML

           if(textvalue.toLocaleUpperCase().indexOf(searchbox) > -1){
             user[i].style.display = "";

           } else {
            user[i].style.display = "none";

           }
        }
    }
}