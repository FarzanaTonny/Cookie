const cookieContainer = document.querySelector('.cookie-container');
const cookieBtn = document.querySelector('.pick');
const cookieBtn1 = document.querySelector('.notPick');

cookieBtn.addEventListener('click', () =>{
	cookieContainer.classList.remove('active');
	Cookies.set('cookieBannerDisplayed','true', {expires: 1});
});

setTimeout( () =>{
		if( ! Cookies.get('cookieBannerDisplayed')){
	cookieContainer.classList.add('active');
}
}, 1000);

		cookieBtn1.addEventListener('click', () => {
				alert('You are not 18+ or avobe');
		});