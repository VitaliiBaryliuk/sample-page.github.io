$(document).on('submit', function(e){
			e.preventDefault();
			let inpObj = document.getElementsByTagName("input");
			let counter = document.getElementById('counter');
			counter.innerHTML = "";
			

			 for( inp in inpObj){
			 	if (inpObj[inp].hasAttribute("data-validation")) {
			 		let val_data = inpObj[inp].dataset.validation;
			 		let val_inp = inpObj[inp].value;

			 		if(val_inp === ''){
			 			$(document).find("#"+inpObj[inp].id+'-message').remove();
			 			$("#"+inpObj[inp].id).addClass("invalid");
			 			$("#"+inpObj[inp].id).after("<div id = '"+inpObj[inp].id+"-message' class='message invalid-message'>field is empty!</div>");

			 		}else{
				 		switch(val_data){
				 			case "text":
					 			var fob1 = /'/;
					 		 	var fob2 = /"/; 
					 			if(fob1.test(val_inp) || fob2.test(val_inp)){
					 				messageFunc(inpObj[inp].id, "invalid", "shouldn't contain: ' or \"" );
					 			}
					 			else{
					 				messageFunc(inpObj[inp].id, "valid", "correct");
					 				counter.innerHTML += "i";	
					 			}
				 			break;
				 			case "date":
					 			if(inpObj[inp].value != ''){
					 				messageFunc(inpObj[inp].id, "valid", "correct");
									counter.innerHTML += "i";
				 			}
				 			break;
				 			case "email":
					 		 	var emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
					 			if(emailReg.test(val_inp) != true){
					 				messageFunc(inpObj[inp].id, "invalid", "should contain email" );
					 			}
					 			else{
					 				messageFunc(inpObj[inp].id, "valid", "correct");
					 				counter.innerHTML += "i";
					 			}
					 			break;
					 			case "password":
						 			if(inpObj[inp].value.length < 8 ){
						 				messageFunc(inpObj[inp].id, "invalid", "should don't less 8 simbols" );
						 			}
						 			else{
						 				messageFunc(inpObj[inp].id, "valid", "correct");
						 				counter.innerHTML += "i";
						 			}
						 		break;
				 		}
				 		console.log(counter.value);
						 			if (counter.innerHTML.length >= 6) {
						 				console.log(counter.length);
						 				alert("Validation passed.");
						 			}
			 		}
			 	}
			}; 

			function messageFunc(el_id, val_stat, message){
				if(val_stat == "invalid"){					
					$(document).find("#"+el_id+'-message').remove();
					$("#"+el_id).removeClass("valid");
					$("#"+el_id).addClass("invalid");
					$("#"+el_id).after("<div  id = '"+el_id+"-message' class='message invalid-message'>" + message + "</div>");
					 			}
				else if (val_stat == "valid"){
					$(document).find("#"+el_id+'-message').remove();
					$("#"+el_id).removeClass("invalid");
					$("#"+el_id).addClass("valid");
					$("#"+el_id).after("<div id = '"+el_id+"-message' class='message valid-message'>" + message + "</div>");
					}
			}			

	});

	$( function() {
    	$( "#datepicker" ).datepicker();
  	});
