
	// ]]>
	let typed = new Typed('#input',{
		strings: ['freelancer','Tiktoker','frontend Developer!'],
	   typeSpeed:100,
	   backSpeed:100,
	   backDelay:1500,
	   loop:true,
	   
	//    CSSStyleSheet:margin(0)
		   });
//typed.js is a libary that types.enter in any sting ,and watch it type at the speed you've set ,backspace what its typed, and begin a new sentence for however many string you've set
//it a;so allows you to create typing animations on the web page.with typed.js ,you can simulate the effect of a person typing out text in real-time.js"></script></plaintext>
   
	const toggle =document.querySelector('.togglebtn')
	const togglebtn =document.querySelector('.togglebtn span')
	const dropdown_menu =document.querySelector('.togglecont')
	const mark =togglebtn.classList.contains('open')

	toggle.onclick=function(){
		dropdown_menu.classList.toggle('open')
		// togglebtn.classList = mark?"xmark":'menu'
		// const mark =togglebtn.classList.contains('spn')
		//the contains()method is used to check wheter the specified class exist in the css classes 
		//and with respect to it,it returns the boolean value as true or flase.
		//.toggle is used to hide and show for the selected elements
		

	}
	