var names=["Yaakov","John","Jen","jason","paul","frank","larry","paula","laura","jim"];

for (var i = 0; i < names.length; i++) {
	if(names[i][0].toLowerCase()==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
