// các xử lý định dạng cho website 
const checkFullname = () =>{
	// lấy thông tin ô nhập họ tên, số điện thoại, địa chỉ
	let fullname = document.getElementById("inputFullname").value;
	
	
	// tham chiếu đối tượng lỗi
	let viewFullname = document.getElementById("inputFullname");
	

	
	// tham chiếu vị trí báo lỗi
	let errFullname = document.getElementById("errFullname");
	
	
	
	// biến kiểm tra 
	let validFullname = true;
	
	
	// biến thông báo lỗi
	let message ="";
	if(fullname == ""){
		validFullname = false;
		message = "Không được để trống mục họ và tên!";
		document.getElementById("inputPhone").disabled = true;
	}
	else{
		if(fullname.length<10){
			validFullname = false;
			message = "Họ và tên quá ngắn. Không hợp lệ!";
			document.getElementById("inputPhone").disabled = true;
		}
		else{
			document.getElementById("inputPhone").disabled = false;
		}
	}
	
	
	
	// kiểm tra
	if(validFullname){
		errFullname.innerHTML = "";
	}
	else{
		errFullname.innerHTML=message;
		errFullname.style.color = "red";
	}
	
	
	return validFullname;
}
const checkPhone = () => {
	if(checkFullname()){
		let phone = document.getElementById("inputPhone").value;
		let viewPhone = document.getElementById("inputPhone");
		let errPhone = document.getElementById("errPhone");
		let validPhone = true;
		let message ="";
		if(phone==""){
			validPhone = false;
			message="Không được để trống mục số điện thoại!";
		}
		else{
			var pattern = /[a-z]/;
			if(pattern.test(phone)){
				validPhone = false;
				message = "Số điện thoại không thể chứa kí tự a->z!";
				document.getElementById("inputAddress").disabled = true;
			}
			else{
				if(phone.length!=10){
					validPhone = false;
					message = "Số điện thoại phải đủ 10 chữ số";
					document.getElementById("inputAddress").disabled = true;
				}
				else{
					
					document.getElementById("inputAddress").disabled = false;
				}
				
			}
			
		}
		if(validPhone){
			errPhone.innerHTML = "";
		}
		else{
			errPhone.innerHTML = message;
			errPhone.style.color = "red";
		}
		return validPhone;
	}
	
	return false;
}
const checkAddress = () =>{
	
	if(checkPhone()){
		let address = document.getElementById("inputAddress").value;
		let viewAddress = document.getElementById("inputAddress");
		let errAddress = document.getElementById("errAddress");
		let validAddress = true;
		let message ="";
		if(address==""){
			validAddress = false;
			message ="Không được để trống mục địa chỉ!";
			document.getElementById("inputProductName").disabled=true;
		}
		else{
			if(address.length<10){
				validAddress = false;
				message="Địa chỉ quá ngắn. Không hợp lệ!";
				document.getElementById("inputProductName").disabled=true;
			}
			else{
				
				document.getElementById("inputProductName").disabled=false;
			}
		}
		if(validAddress){
			errAddress.innerHTML = "";
		}
		else{
			errAddress.innerHTML = message;
			errAddress.style.color = "red";
		}
		return validAddress;
	}
	return false;
	
}