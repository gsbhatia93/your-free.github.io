image = document.getElementById('image_holder')
jumbo = document.getElementById('jumbo')
news = document.getElementById('news-table')

function addBio(){
	var bio= 'Born and brought up in Delhi, India. Gurpreet completed his bachelors from GGSIPU where he majored in Information Technology. After working in startup for a few months after graduation, he moved to Sapient Consulting where he worked to provide software solutions to clients in financial domian. There he was also introduced to intricacies of finance/ market economics. Finally, he moved to work as a research associate with Prof. PK. As an RA he worked towards modelling and evaluating social-technical systems like Twitter and Stack overflow. '
		
	<!-- var p = document.createElement('p'); -->
	<!-- p.innerHTML = bio -->
	<!-- document.getElementById('bio').appendChild(p);		 -->
	document.getElementById('jumbo_heading').innerHTML = "Bio"
	document.getElementById('jumbo_content').innerHTML = bio

	image.style.display='inline-block'
	jumbo.style.display='inline-block'
	news.style.display = 'inline-block'

}
function addHome(){
	var bio = "I work in social computing where I model and evaluate socio-technical systems like Twitter and Stackoverflow."

	document.getElementById('jumbo_heading').innerHTML = "Research Associate @Precog, IIIT-Delhi"
	document.getElementById('jumbo_content').innerHTML = bio
	image.style.display='inline-block'
	jumbo.style.display='inline-block'
	news.style.display = 'inline-block'
	
}
function addCV(){
	image.style.display='none'
	jumbo.style.display = "none";
	news.style.display = "none"
}
function addProjects(){
	image.style.display='none'
	jumbo.style.display='none'
	news.style.display = 'none'	
}

function addContact(){
	image.style.display='inline-block'
	jumbo.style.display='inline-block'
	news.style.display = 'inline-block'
}
