// Function qui récupére les variables saisies par phoneChild

function askChild(){
var phoneParent = document.getElementById('phoneParent').value;
var moneyChild = document.getElementById('moneyChild').value;

//
var firebaseRef = firebase.database().ref("Auths/auth2");
firebaseRef.child("money").set(moneyChild); // ajoute clé:valeur au db
}

var rootCustomers = firebase.database().ref().child("Users");
rootCustomers.on("child_added", snap => {
	// Récupére la valeur dans Users lors de changement uniquement
	//alert(snap.val());
	var name = snap.child("name").val();
	var phone = snap.child("phone").val();

	$("#users").append("<p><strong>" + name + " </strong><em> " + phone + " </em></p>");

});

var rootAuthorization = firebase.database().ref().child("Auths");
rootAuthorization.on("child_added", snap => {
	// Récupére la valeur dans Auths lors de changement uniquement
	//alert(snap.val());
	var name = snap.child("name").val();
	var phone = snap.child("phone").val();
	var money = snap.child("money").val();

	$("#auths").append("<p><strong>" + name + " </strong><em> " + phone + " </em><strong> à besoin de " +money+ " €</strong></p>");

});
