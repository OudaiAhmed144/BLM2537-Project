console.log("nhomejs.js loaded");

//popup controls

//var Profiles = ['DefaultProfile', 'profile1', 'profile2', 'profile3'];
var Profiles = JSON.parse(localStorage.getItem("proofiles"));
if(!Profiles){
    //Profiles = ["'DefaultProfile'"];
    var today = Date.now();
    Profiles = [
        {'name': "DefaultProfile", 'lastupdate': today},
    ];
    localStorage.setItem("proofiles", JSON.stringify(Profiles));
}
console.log("Initialized Profiles:", Profiles);
function generateTable(data) {
            console.log("Generating table with data:", data);
            var table = document.getElementById("expenseTable");
            table.innerHTML = "";
            for (var i = 0; i < data.length; i++) {
                var row = `<tr>
                                <td>${data[i].date}</td>
                                <td>${data[i].name}</td>
                                <td>${data[i].description}</td>
                                <td>${data[i].category}</td>
                                <td>${data[i].amount}</td>
                                <td class="delete-cell">
                                    <button class="delete-button-selector" class="delete-button" data-expense-id="${data[i].id}">
                                        <img src="trashblack.png" alt="trash" class="trash-icon" data-expense-id="${data[i].id}">
                                    </button>
                                    <button class="edit-button-selector" class="edit-button" data-expense-id="${data[i].id}">
                                        <img src="editpen.png" alt="gear" class="edit-icon" data-expense-id="${data[i].id}">
                                    </button>
                                </td>
                           </tr>`;
                table.innerHTML += row;
            }
        }
function generateProtfilesTable(data) {
    console.log("Generating profiles table with data:", data);
    var table = document.getElementById("ProfilesTablebody");
            table.innerHTML = "";
            for (var i = 0; i < data.length; i++) {
                let date = new Date(Number(data[i].lastupdate));

                // 3. Convert to a readable string with seconds
                let formatted = date.toLocaleString('en-GB');
                var row = `<tr>
                                <td>${i+1}</td>
                                <td>${data[i].name}</td>
                                <td>${formatted}</td>
                                <td class="delete-cell">
                                    <button class="delete-profile-button" data-profile-id="${data[i].lastupdate}">
                                        Delete
                                    </button>
                                </td>
                           </tr>`;
                table.innerHTML += row;
            }
}
function generateProfiles(aoo) {
    console.log("Generating profiles from:", aoo);
    let sProfiles = JSON.parse(localStorage.getItem("selectedProfiles"));
    if(!sProfiles){
        sProfiles = [];
    }
    let data = aoo.map(item => item.name);
    console.log("All Profiles from data:", data);
    console.log("Selected Profiles from storage:", sProfiles);
    var profileList = document.getElementById("profiles-menu");
    profileList.innerHTML = "";
    var profilepopupList = document.getElementById("profiles-popup");
    profilepopupList.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        var profileItem = ` <div class="profile-item">
                            <input type="checkbox" class="profilecheckbox" id="${data[i]}" name="${data[i]}">
                            <label for="${data[i]}">${data[i]}</label><br>
                            </div>`;
        profileList.innerHTML += profileItem;
        var profileOption = `<option value="${data[i]}">${data[i]}</option>`;
        profilepopupList.innerHTML += profileOption;
    }
    for (var i = 0; i < data.length; i++) {
        var checkbox = document.getElementById(sProfiles[i]);
        checkbox.checked = true;
    }
    console.log("Profiles generated:", data);
}
function getprofilestobeshown(){
    const checkboxes = document.querySelectorAll('#profiles-menu input[type="checkbox"]');
    var selectedProfiles = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedProfiles.push(checkbox.id);
        }
    });
    return selectedProfiles;
}
function getallitemstobeshown(data){
    var allitemstobeshown = [];
    for (var i = 0; i < data.length; i++) {
        items = JSON.parse(localStorage.getItem(data[i]));
        if(!items){
            items = [];
        }
        allitemstobeshown.push(...items);
    }
    console.log("All items to be shown:", allitemstobeshown);
    return allitemstobeshown;
}
function getprofilebyid(id){
    var items = getallitemstobeshown(getprofilestobeshown());
    for (var i = 0; i < items.length; i++) {
        if(items[i].id == id){
            return items[i].profile;
        }
}
    return null;
}
function getitembyid(id){
    var items = getallitemstobeshown(getprofilestobeshown());
    for (var i = 0; i < items.length; i++) {
        if(items[i].id == id){
            return items[i];
        }
}
    return null;
}
function deleteprofilebyid(id){
    var ProfileList = JSON.parse(localStorage.getItem("proofiles"));
    if(!ProfileList){
        ProfileList = [];
    }
    var profilee = ProfileList.find(profile => profile.lastupdate == id);
    localStorage.removeItem(profilee.name);
    ProfileList = ProfileList.filter(profile => profile.lastupdate != id);
    
    
    localStorage.setItem("proofiles", JSON.stringify(ProfileList));
    console.log("Deleted profile id:", id);
}
function deleteexpensebyid(id){
    var profile = getprofilebyid(id);
    if(!profile){
        console.log("Profile not found for expense id:", id);
        return;
    }
    var items = JSON.parse(localStorage.getItem(profile));
    if(!items){
        items = [];
    }
    items = items.filter(item => item.id != id);
    localStorage.setItem(profile, JSON.stringify(items));
    console.log("Deleted expense id:", id, "from profile:", profile);
}