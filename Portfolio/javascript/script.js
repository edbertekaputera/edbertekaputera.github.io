// TYPEWRITER EFFECT ON SUBTITLE
class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = ""; 
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	};

	type() {
		const FullTxt = this.words;

		// Check deleting or not
		if(this.isDeleting) {
			//Remove char
			this.txt = FullTxt.substring(0, this.txt.length - 1);
		} else {
			//Add char
			this.txt = FullTxt.substring(0, this.txt.length + 1);
		}
		// inserting the characters
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
		
		// Initial type speed
		let typeSpeed = 50;
		// Deleting speed
		if(this.isDeleting) {
			typeSpeed = 25;
		}
		// Pause after type completion
		if (!this.isDeleting && this.txt === FullTxt) {
			typeSpeed = this.wait;
			this.isDeleting = true; 
		// Pause after deleting complete
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			typeSpeed = 500;
		}

		setTimeout(() => this.type(), typeSpeed);
	};
};

//SMOOTH SCROLLING EFFECT
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


document.addEventListener('DOMContentLoaded', init);
// Init on DOM load
// Init app
function init() {
	// Typewriter
	const txtElement = document.querySelector('.home-subtitle');
	const words = txtElement.getAttribute("data-words");
	const wait = txtElement.getAttribute("data-wait");
	new TypeWriter(txtElement, words, wait);

	// MENU SHOW FOR PHONE SCREEN
	const showMenu = (toggleId, navId) =>{
		const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

		if(toggle && nav){
			toggle.addEventListener('click', ()=>{
				nav.classList.toggle('show') 
			})
		}
	}
	showMenu('navbox-logo', 'navbox-container')

	// Scroll reveal animation
	const sr = ScrollReveal({
		origin: "top",
		distance: "80px",
		duration: 2000,
		reset: true
	});
	
	// Scroll Home 
	sr.reveal(".home-title", {});
	sr.reveal(".home-image", {delay: 400});
	sr.reveal(".home-subtitle", {delay: 100})

	// Scroll Education
	sr.reveal('.education-title-edu', {});
	sr.reveal('.education-title-02', {});
	sr.reveal('.edu-subtitle-kanaan1', {delay: 200});
	sr.reveal('.edu-subtitle-kanaan2', {delay: 200});
	sr.reveal('.edu-text-kanaan1', {delay: 200});
	sr.reveal('.edu-text-kanaan2', {delay: 200});
	sr.reveal('.edu-text-kanaan3', {delay: 200});
	sr.reveal('.edu-text-kanaan4', {delay: 200});
	sr.reveal('.edu-subtitle-loren1', {delay: 200});
	sr.reveal('.edu-subtitle-loren2', {delay: 200});
	sr.reveal('.edu-text-loren1', {delay: 200});
	sr.reveal('.edu-text-loren2', {delay: 200});
	sr.reveal('.edu-subtitle-uow1', {delay: 200});
	sr.reveal('.edu-subtitle-uow2', {delay: 200});
	sr.reveal('.edu-text-uow1', {delay: 200});
	sr.reveal('.edu-text-uow2', {delay: 200});
	sr.reveal('.edu-bodyline', {});
	sr.reveal('.edu-kanaan-logo', {delay: 100});
	sr.reveal('.edu-loren-logo', {delay: 100});
	sr.reveal('.edu-uow-logo', {delay: 100});
	sr.reveal('.edu-button-container', {});
}
