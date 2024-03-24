const list = document.querySelector("#list"); //ol
const items = document.querySelector("#items");//items input
const add = document.querySelector("#add");// add button
const amount = document.querySelector("#amount");//amount input
const ul1 = document.querySelector("#ul1");
const ul2 = document.querySelector("#ul2");
const sum = document.querySelector(".sumed");


add.addEventListener("click",()=>{
	let item = items.value;
	let amt = amount.value;


	if(item=="" || amt ==""){
		return
	}else{
	let addList = document.createElement("li");
	list.appendChild(addList);

	var check = document.createElement("button");
	var remove = document.createElement("button");
	var money = document.createElement("div");
	var img = document.createElement("img");
	var img2 = document.createElement("img");
	var txt = document.createElement("div");

	img.src = "check.svg";
	img2.src = "cross.svg";

	check.classList.add("check");
	remove.classList.add("remove");
	money.classList.add("money");
	txt.classList.add("text");

	money.innerText = amt;
	amount.value ="";

	check.append(img);
	remove.append(img2);

	addList.append(txt);
	addList.appendChild(check);
	addList.appendChild(remove);
	addList.append(money);

	txt.innerText = item;
	items.value = '';

	remove.addEventListener("click",()=>{
		addList.style.display ="none";
	});

	check.addEventListener("click",()=>{
		count = 1;
		let bought = document.createElement("li");
		let spent = document.createElement("li");
		ul1.append(bought);
		ul2.append(spent);
		bought.innerText = txt.innerText;
		spent.innerText = money.innerText;
		let price = spent.innerText;
		sum.innerText +=` + ${price}`;
		let sumed = eval(sum.innerText);
		sum.innerText = sumed;
		let allSumed =  sum.innerText.toLocaleString('en-US');
		sum.innerText = allSumed;
		check.style.pointerEvents = "none";

		//removing 'remove button'
		remove.style.display = "none";
		addList.style.background =`rgba(196,204,202,30%)`;
		check.style.background = `rgba(196,204,202,100%)`;
	});
 }
});


