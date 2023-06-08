// INITIALISATION VARIABLES GLOBALES
// =================================

var widthMax = 500; // Largeur max d'une vignette
var borderSpecies = 20;  // Epaisseur entre les images d'especes
var pictureDir = "img/speciesImages"  ; // Repertoire des images
var indexLangue = 1;
var barre_width_percent = 15;
var selected = "";
var police_size = 10;
// var arraySpecies = [
		//  [9606,    ["Homo sapiens","Humain"]],
		//  [10090,   ["Mus musculus","Souris grise"]],
		//  [59546,   ["Damaliscus jimela","Topi du Serengeti"]],
		//  [85517,   ["Phacochoerus aethiopicus","Phacochère commun"]],
		//  [9927,    ["Connochaetes taurinus","Gnou bleu"]],
		//  [9970,    ["Syncerus caffer","Buffle d'Afrique"]],
		//  [9785,    ["Loxodonta africana","Eléphant d'Afrique"]],
		//  [9689,    ["Panthera leo","Lion"]],
		//  [9678,    ["Crocuta crocuta","Hyène tachetée"]],
		//  [94188,    ["Cryptoprocta ferox","Fossa"]],
		//  [9622,    ["Lycaon    pictus","Lycaon"]],
		//  [9447,    ["Lemur catta","Maki catta"]],
		//  [31869,    ["Daubentonia madagascariensis","Aye-Aye"]],
		//  [5699,    ["Trypanosoma vivax","Trypanosoma vivax"]],
		//  [9993,    ["Marmota marmota","Marmotte"]],
		//  [7227,    ["Drosophila melanogaster","Mouche du vinaigre"]],
		//  [28584,   ["Drosophila suzukii","Moucheron asiatique"]],
		//  [63433,   ["Leptopilina boulardi","Guêpe parasitoïde"]]
		// ];


/*  Le sol de nos forets */
		var arraySpecies2 = [
				[55518,   ["<i>Magnetospirillum gryphiswaldense","<i>Magnetospirillum gryphiswaldense"]],
				[5791,   ["<i>Physarum polycephalum","Blob"]],
				[5544,   ["<i>Trichoderma harzianum","<i>Trichoderma harzianum"]],
				[1299,   ["<i>Deinococcus radiodurans","<i>Deinococcus radiodurans"]],									 
				[54298,   ["<i>Chroococcidiopsis","<i>Chroococcidiopsis"]],				
				[549,   ["<i>Pantoea agglomerans","<i>Pantoea agglomerans"]],
				[318532,   ["<i>Hyaslosphenia papilio","<i>Hyaslosphenia papilio"]],														
				[5580,   ["<i>Aureobasidium pullulans","<i>Aureobasidium pullulans"]],	
				[384,   ["<i>Rhizobium leguminorasum","<i>Rhizobium leguminorasum"]],	
				[358,   ["<i>Agrobacterium tumefaciens","<i>Agrobacterium tumefaciens"]],	
				[30001,   ["<i>Collembola","<i>Collemboles"]],	
				[66551,   ["<i>Oribatida","Acarien oribate"]],	
				[1723665,   ["<i>Gamasina","Acarien gamaside"]],	
				[13347,   ["<i>Armadillidium vulgare","Cloporte commun"]],	
				[6398,   ["<i>Lumbricus terrestris","Lombric"]],	
				[6231,   ["<i>Nematoda","Nématode"]],		
				[258706,   ["<i>Formica rufa","Fourmi rousse"]],		
				[51799,   ["<i>Pseudoscorpiones","Pseudo-scorpion"]],		
				[7552,   ["<i>Lithobius forficatus","Lithobie"]]		
				];

/* Le corps humain*/
    var arraySpecies3 = [
   		 [9606,    ["<i>Human</i>","Humain"]],
   		 [582,    ["<i>Morganella morganii</i>","<i>Morganella morganii</i>"]],
   		 [481310, ["<i>Demodex folliculorum</i>","<i>Demodex folliculorum</i>"]],
   		 [239935, ["<i>Akkermansia muciniphila</i>","<i>Akkermansia muciniphila</i>"]],
   		 [2173,   ["<i>Methanobrevibacter smithii</i>","<i>Methanobrevibacter smithii</i>"]],
   		 [1358,   ["<i>Lactococcus lactis</i>","<i>Lactococcus lactis</i>"]],
   		 [1681,   ["<i>Lactobacillus bifidus</i>","<i>Lactobacillus bifidus</i>"]],
   		 [1282,   ["<i>Staphylococcus epidermidis</i>","<i>Staphylococcus epidermidis</i>"]],
   		 [4932,   ["<i>Saccharomyce cerevisiae</i>","<i>Saccharomyce cerevisiae</i>"]],
   		 [666,    ["<i>Vibrio cholerae</i>","<i>Vibrio cholerae</i>"]],
    	 [632,    ["<i>Yersinia pestis</i>","<i>Yersinia pestis</i>"]],     
    	 [1280,  ["<i>Staphylococcus aureus</i>","<i>Staphylococcus aureus</i>"]],       	 		   		 
    	 [562,   ["<i>Escherichia coli</i>","<i>Escherichia coli</i>"]]  
   	];

    /*Cuisine*/
    var arraySpecies4 = [
  			 [4932,    ["<i>Saccharomyces cerevisia</i>","<i>Saccharomyces cerevisia</i>"]],
      	 [1585,    ["<i>Lactobacillus bulgaricus</i>","<i>Lactobacillus bulgaricus</i>"]],
      	 [1301,    ["<i>Streptococcus</i>","<i>Streptococcus</i>"]],
      	 [1357,    ["<i>Lactococcus</i>","<i>Lactococcus</i>"]],
      	 [5082,    ["<i>Penicillium roqueforti</i>","<i>Penicillium roqueforti</i>"]],
      	 [1247,    ["<i>Oenococcus oeni</i>","<i>Oenococcus oeni</i>"]],
      	 [435,    ["<i>Acetobacter aceti</i>","<i>Acetobacter aceti</i>"]],
      	 [66546,    ["<i>Acarus siro</i>","Acarien du fromage"]],
      	 [6956,    ["<i>Dermatophagoides pteronyssinus</i>","Acarien des poussières"]]
    	];


    /* L'eau */
     var arraySpecies5 = [
     		[1218,   ["<i>Prochlorococcus</i>","<i>Prochlorococcus</i>"]],
     		[198251, ["<i>Candidatus Pelagibacter</i>","<i>Candidatus Pelagibacter"]],
     		[70863,  ["<i>Shewanella oneidensis</i>","<i>Shewanella oneidensis"]],
     		[6083,   ["<i>Hydra</i>","Hydre"]],
     		[1003064,   ["<i>Isthmia enervis</i>","Diatomée"]],
     		[2951,   ["<i>Symbiodinium microadriaticum</i>","Zooxanthelle"]],
     		[42241,  ["<i>Tardigrada</i>","Tardigrade"]],
      	[6670,   ["<i>Ostracoda</i>","Ostracode"]],    		
      	[6665,   ["<i>Cladocera</i>","Cladocère"]],    	
      	[5884,   ["<i>Paramecium</i>","Paramécie"]],   
      	[10190,   ["<i>Rotifera</i>","Rotifère"]],         	
      	[92068,   ["<i>Hydracarina</i>","Hydracarien"]]    

      ];

// Cree une map a partir du tableau
// On utilise une map pour preserver
// l'ordre des donnees ce qui n'est
// pas possible avec un dictionnaire.
var mapSpecies2 = new Map(arraySpecies2);	var dicoSpecies = {};
var data2 = [];
mapSpecies2.forEach(function(valeur, clef) {
  data2.push(clef);
  dicoSpecies[clef]=valeur;
});

var mapSpecies3 = new Map(arraySpecies3);
var data3 = [];
mapSpecies3.forEach(function(valeur, clef) {
  data3.push(clef);
  dicoSpecies[clef]=valeur;
});

var mapSpecies4 = new Map(arraySpecies4);
var data4 = [];
mapSpecies4.forEach(function(valeur, clef) {
  data4.push(clef);
  dicoSpecies[clef]=valeur;
});


var mapSpecies5 = new Map(arraySpecies5);
var data5 = [];
mapSpecies5.forEach(function(valeur, clef) {
  data5.push(clef);
  dicoSpecies[clef]=valeur;
});

var datas = [data2,data3,data4,data5];
// Affiche la barre qui contient les especes
// -----------------------------------------
function displaySpecies_BS(somespeciesafter,d) {
    var data = datas[d];
		var lang = document.getElementById('interfacelang');
		var lang2 = lang.getElementsByClassName('row selectedlang');
		console.log("LANGAGE IS "+lang2[0].id);
		if (lang2[0].id === "int-fr") {
	    indexLangue = 1;
	  }
	  else {
	    indexLangue = 0;
	  }
  // var element= document.getElementById('somespeciesafter');
    var element= document.getElementById(somespeciesafter);
  var nbspec = data.length;
  // nbspec= 8;
	i = 0;
	for (line = 0; line <= 4; line ++)  {
		var divLine = document.createElement("div");
		divLine.setAttribute("class","row");
		divLine.setAttribute("style", "padding:10px; margin: 0px");
		for (col = 0; col <4; col ++ ) {
			if (i >= nbspec) {
				break;
			}
			var divCol = document.createElement("div");
			divCol.setAttribute("class","col-xs-3");
			var fig = document.createElement("figure");
			fig.setAttribute("class","figure");
			var divImage = document.createElement("img");
			imageName = data[i];
	  	divImage.setAttribute("src", pictureDir+"/"+imageName+".jpg");
	  	divImage.setAttribute("style", "width:100%; height:100px;object-fit: cover");
      // divImage.setAttribute("style", "width:50px");
	  	divImage.setAttribute("id", imageName);
/*	  	divImage.setAttribute("class","figure-img img-fluid rounded");*/
			divImage.setAttribute("class","lesbellesimages");
	  	divImage.setAttribute("data-micron","tada");
	  	divImage.onclick = selectThis;
			var caption = document.createElement("figcaption");
			caption.setAttribute("class","figure-caption");
			caption.setAttribute("id","legend_"+imageName);
			//var divLegend = document.createTextNode(dicoSpecies[imageName][indexLangue]);
/*			var divLegend = document.html(dicoSpecies[imageName][indexLangue]);*/
			var divLegend  = document.createElement("p");
			divLegend.innerHTML = dicoSpecies[imageName][indexLangue];
			caption.appendChild(divLegend);
			fig.appendChild(divImage);
			fig.appendChild(caption);
			divCol.appendChild(fig);
			divLine.appendChild(divCol);
			i ++;
		}
		element.appendChild(divLine);
	}
}


function redisplaySpecies_BS(somespeciesafter,d){
	// var node= document.getElementById("somespeciesafter");
  	var node= document.getElementById(somespeciesafter);
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
	displaySpecies_BS(somespeciesafter,d)
}
// // Affiche la barre qui contient les especes
// // -----------------------------------------
// function displaySpecies(largeur,hauteur){
// 	var lang = document.getElementById('interfacelang');
// 	var lang2 = lang.getElementsByClassName('row selectedlang');
// 	console.log("LANGAGE IS "+lang2[0].id);
// 	if (lang2[0].id === "int-fr") {
//     indexLangue = 1;
//   }
//   else {
//     indexLangue = 0;
//   }
//   var nbspec = data.length;
//   var topSpecies = 0;
// 	var barre_width = barre_width_percent * largeur / 100 ;
// 	var nblin = Math.floor(Math.sqrt(nbspec * hauteur / barre_width)) +1 ;
// 	var nbcol = Math.floor( nbspec / nblin) + 1;
// 	var leftSpecies = largeur - barre_width ;
// 	var leftSpecies = 20 ;
// 	var leftSpecies = barre_width ;
//   var width = Math.floor(barre_width / nbcol);
//   var height = Math.floor(hauteur / nblin);
//   if (width > height) {
//     width = height;
//   }
//   if (width > widthMax) {
//     width = widthMax;
//   }
//   width = width - borderSpecies;
//   var element= document.getElementById('barre');
//   // pour visualiser la div:
// 	element.setAttribute("style", "background-color:blue;position:absolute; left:" + leftSpecies + "px; top:" + topSpecies + "px; width:"+barre_width+"px; height:"+hauteur+"px;");
// 	//element.setAttribute("style", "position:absolute; left:" + leftSpecies + "px; top:" + topSpecies + "px; width:"+barre_width+"px; height:"+hauteur+"px;");
// 	var divBarre = document.createElement("div");
//   divBarre.setAttribute("id", 'posters');
//   element.appendChild(divBarre);
//   var j = topSpecies;
//   var j = 0;
//   var k = 0;
//   for (i = 0; i < nbspec; i++) {
//     addSpecies(data[i],k*(width),j,width-borderSpecies);
//     k++ ;
//     if (k >= nbcol) {
//       k = 0;
//       j = j  + width + borderSpecies;
//     }
//   }
// }
//
// // Ajoute une espece dans la div posters
// // ------------------------------------
// function addSpecies(imageName,left,top,width) {
// console.log(imageName,left,top,width);
//   var element= document.getElementById('posters');
//   var divSpecies = document.createElement("div");
//   divSpecies.setAttribute("style", "position:absolute; left:" + left + "px; top:" + top + "px; width: "+width+"px; height:"+(width*1)+"px");
//   var divDescription = document.createElement("div");
//   divDescription.setAttribute("style", "position:absolute; left:" + left + "px; top:" +(police_size + 1.0*width+top) + "px; width: "+width+"px;");
//   divDescription.setAttribute("class","description");
//   divDescription.setAttribute("id", "legend_"+imageName);
//   var divImage = document.createElement("img");
//   divImage.setAttribute("src", pictureDir+"/"+imageName+".jpg");
//   divImage.setAttribute("style", "width: "+width+"px; border-radius: 20%");
//   divImage.setAttribute("id", imageName);
//   divImage.setAttribute("class","thumbnail");
//   divImage.setAttribute("data-micron","tada");
//   divImage.onclick = selectThis;
//   console.log(dicoSpecies[imageName][indexLangue]);
//   var divLegend = document.createTextNode(dicoSpecies[imageName][indexLangue]);
//   divDescription.appendChild(divLegend);
//   divSpecies.appendChild(divImage);
//   element.appendChild(divSpecies);
//   element.appendChild(divDescription);
// }
//
// // Efface les especes
// // ------------------
// function cleanBarre() {
//   var element= document.getElementById('barre');
//   var divBarre = document.getElementById('posters');
//   element.removeChild(divBarre);
// 	var largeur = window.innerWidth; // maj de la largeur en cas de modif
// 	var hauteur = window.innerHeight; // maj de la largeur en cas de modif
// 	displaySpecies(largeur,hauteur);
// }

// Action quand on clique sur une espece
// -------------------------------------
function selectThis() {
	console.log("SELECT " + selected + " <==> " +this.id);
	map.removeLayer(markersRoute);
	map.removeLayer(polyline);
	// micron.getEle("#me").interaction("bounce");
  // micron.getEle("."+this.id).interaction("bounce");
  // this.interaction("bounce");
  var taxidok = this.id;
  var URL_PREFIX = "https://"+ServerAddress+"/solr/taxo/suggesthandler?suggest.q=";
  var URL_PREFIX_FINAL = "https://"+ServerAddress+"/solr/taxo/select?q=taxid:";
  var URL_SUFFIX = "&wt=json";
  var URL = URL_PREFIX_FINAL + taxidok + URL_SUFFIX;
  var largeur = window.innerWidth; // maj de la largeur en cas de modif
  // Action sur lifemap
    if (selected === this.id) {
      degrise(selected);
      selected = 0;
      if ($('#ChoiceExplo').find('i').attr('class').match("fa-check-square-o")===null) {
        map.setView(L.latLng([-5,0]),5);
      }
      else {map.flyTo( L.latLng([-5,0]),5);}
			map.removeLayer(SPfocus);
    }
    else {
    $.ajax({
      url : URL,
      success : function(data) {
        map.removeLayer(SPfocus);
        var docs = JSON.stringify(data.response.docs);
        var jsonData = JSON.parse(docs);
        if ($('#ChoiceExplo').find('i').attr('class').match("fa-check-square-o")===null) {
          map.setView(jsonData[0].coordinates, jsonData[0].zoom-1);
        }
        else {
          map.flyTo(jsonData[0].coordinates, jsonData[0].zoom-1)
        }

        SPfocus = L.marker(jsonData[0].coordinates, {icon: pin1})
        SPfocus.on("click", function() {
          markofun(taxidok, spnameok,commonnameok,rankok);
        })
        SPfocus.addTo(map);
      },
      dataType : 'jsonp',
      jsonp : 'json.wrf'
    });
    if (selected) {
      degrise(selected);
      }
    grise(this.id);  // On la grise
    selected = this.id;
		console.log(" SELECTED NOW = "+selected);
  }
}

// Grise une division
// ------------------
function grise (imageName) {
	console.log("GRISE "+ imageName);
  var image = document.getElementById(imageName);
  image.style.opacity = "0.5";
  image.style.filter  = 'alpha(opacity=50)'; // IE fallback
  var legend = document.getElementById("legend_"+imageName);
  legend.style.color = "black";

}
// Degrise une division
// ------------------
function degrise (imageName) {
	console.log("DEGRISE "+ imageName);
  var image = document.getElementById(imageName);
  image.style.opacity = "1.0";
  image.style.filter  = 'alpha(opacity=100)'; // IE fallback
  var legend = document.getElementById("legend_"+imageName);
  legend.style.color = "white";
}
