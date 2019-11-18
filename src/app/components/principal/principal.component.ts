import { Component, OnInit } from '@angular/core';
import { RandomServiceService } from '../../services/random-service.service';
import Swal from 'sweetalert2'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public newPerson: Array<any> = [];
  public valor: boolean = true;
  public parametro: string = 'random';
  public pais: boolean = false;
  public paisSeleccionado: string = null;
  public colores:Array<string>=[	'#FF3358',	'#BE33FF','#B0E0E6',	'#C0C0C0',	'#8FBC8F',	'#5F9EA0',	'#3CB371',	'#4682B4',	'#228B22',	'#000000',	'#800000',	'#FF6347'];
  public color:string="";
  private pases: object = {
    "null": "selecciona",
    "Afghanistan": "Afghanistan",
    "Albania": "Albania",
    "Germany": "Germany",
    "Algeria": "Algeria",
    "Andorra": "Andorra",
    "Angola": "Angola",
    "Anguilla": "Anguilla",
    "Antarctica": "Antarctica",
    "Antigua and Barbuda": "Antigua and Barbuda",
    "Saudi Arabia": "Saudi Arabia",
    "Argentina": "Argentina",
    "Armenia": "Armenia",
    "Aruba": "Aruba",
    "Australia": "Australia",
    "Austria": "Austria",
    "Azerbaijan": "Azerbaijan",
    "Belgium": "Belgium",
    "Bahamas": "Bahamas",
    "Bahrain": "Bahrain",
    "Bangladesh": "Bangladesh",
    "Barbados": "Barbados",
    "Belize": "Belize",
    "Benin": "Benin",
    "Bhutan": "Bhutan",
    "Belarus": "Belarus",
    "Myanmar": "Myanmar",
    "Bolivia": "Bolivia",
    "Bosnia and Herzegovina": "Bosnia and Herzegovina",
    "Botswana": "Botswana",
    "Brazil": "Brazil",
    "Brunei": "Brunei",
    "Bulgaria": "Bulgaria",
    "Burkina Faso": "Burkina Faso",
    "Burundi": "Burundi",
    "Cape Verde": "Cape Verde",
    "Cambodia": "Cambodia",
    "Cameroon": "Cameroon",
    "Canada": "Canada",
    "Chad": "Chad",
    "Chile": "Chile",
    "China": "China",
    "Cyprus": "Cyprus",
    "Vatican City State": "Vatican City State",
    "Colombia": "Colombia",
    "Comoros": "Comoros",
    "Republic of the Congo": "Republic of the Congo",
    "Democratic Republic of the Congo": "Democratic Republic of the Congo",
    "North Korea": "North Korea",
    "South Korea": "South Korea",
    "Ivory Coast": "Ivory Coast",
    "Costa Rica": "Costa Rica",
    "Croatia": "Croatia",
    "Cuba": "Cuba",
    "CuraÃ§ao": "CuraÃ§ao",
    "Denmark": "Denmark",
    "Dominica": "Dominica",
    "Ecuador": "Ecuador",
    "Egypt": "Egypt",
    "El Salvador": "El Salvador",
    "United Arab Emirates": "United Arab Emirates",
    "Eritrea": "Eritrea",
    "Slovakia": "Slovakia",
    "Slovenia": "Slovenia",
    "Spain": "Spain",
    "United States of America": "United States of America",
    "Estonia": "Estonia",
    "Ethiopia": "Ethiopia",
    "Philippines": "Philippines",
    "Finland": "Finland",
    "Fiji": "Fiji",
    "France": "France",
    "Gabon": "Gabon",
    "Gambia": "Gambia",
    "Georgia": "Georgia",
    "Ghana": "Ghana",
    "Gibraltar": "Gibraltar",
    "Grenada": "Grenada",
    "Greece": "Greece",
    "Greenland": "Greenland",
    "Guadeloupe": "Guadeloupe",
    "Guam": "Guam",
    "Guatemala": "Guatemala",
    "French Guiana": "French Guiana",
    "Guernsey": "Guernsey",
    "Guinea": "Guinea",
    "Equatorial Guinea": "Equatorial Guinea",
    "Guinea-Bissau": "Guinea-Bissau",
    "Guyana": "Guyana",
    "Haiti": "Haiti",
    "Honduras": "Honduras",
    "Hong Kong": "Hong Kong",
    "Hungary": "Hungary",
    "India": "India",
    "Indonesia": "Indonesia",
    "Iran": "Iran",
    "Iraq": "Iraq",
    "Ireland": "Ireland",
    "Bouvet Island": "Bouvet Island",
    "Isle of Man": "Isle of Man",
    "Christmas Island": "Christmas Island",
    "Norfolk Island": "Norfolk Island",
    "Iceland": "Iceland",
    "Bermuda Islands": "Bermuda Islands",
    "Cayman Islands": "Cayman Islands",
    "Cocos (Keeling) Islands": "Cocos (Keeling) Islands",
    "Cook Islands": "Cook Islands",
    "Ã…land Islands": "Ã…land Islands",
    "Faroe Islands": "Faroe Islands",
    "South Georgia and the South Sandwich Islands": "South Georgia and the South Sandwich Islands",
    "Heard Island and McDonald Islands": "Heard Island and McDonald Islands",
    "Maldives": "Maldives",
    "Falkland Islands (Malvinas)": "Falkland Islands (Malvinas)",
    "Northern Mariana Islands": "Northern Mariana Islands",
    "Marshall Islands": "Marshall Islands",
    "Pitcairn Islands": "Pitcairn Islands",
    "Solomon Islands": "Solomon Islands",
    "Turks and Caicos Islands": "Turks and Caicos Islands",
    "United States Minor Outlying Islands": "United States Minor Outlying Islands",
    "Virgin Islands": "Virgin Islands",
    "United States Virgin Islands": "United States Virgin Islands",
    "Israel": "Israel",
    "Italy": "Italy",
    "Jamaica": "Jamaica",
    "Japan": "Japan",
    "Jersey": "Jersey",
    "Jordan": "Jordan",
    "Kazakhstan": "Kazakhstan",
    "Kenya": "Kenya",
    "Kyrgyzstan": "Kyrgyzstan",
    "Kiribati": "Kiribati",
    "Kuwait": "Kuwait",
    "Lebanon": "Lebanon",
    "Laos": "Laos",
    "Lesotho": "Lesotho",
    "Latvia": "Latvia",
    "Liberia": "Liberia",
    "Libya": "Libya",
    "Liechtenstein": "Liechtenstein",
    "Lithuania": "Lithuania",
    "Luxembourg": "Luxembourg",
    "Mexico": "Mexico",
    "Monaco": "Monaco",
    "Macao": "Macao",
    "Macedonia": "Macedonia",
    "Madagascar": "Madagascar",
    "Malaysia": "Malaysia",
    "Malawi": "Malawi",
    "Mali": "Mali",
    "Malta": "Malta",
    "Morocco": "Morocco",
    "Martinique": "Martinique",
    "Mauritius": "Mauritius",
    "Mauritania": "Mauritania",
    "Mayotte": "Mayotte",
    "Estados Federados de": "Estados Federados de",
    "Moldova": "Moldova",
    "Mongolia": "Mongolia",
    "Montenegro": "Montenegro",
    "Montserrat": "Montserrat",
    "Mozambique": "Mozambique",
    "Namibia": "Namibia",
    "Nauru": "Nauru",
    "Nepal": "Nepal",
    "Nicaragua": "Nicaragua",
    "Niger": "Niger",
    "Nigeria": "Nigeria",
    "Niue": "Niue",
    "Norway": "Norway",
    "New Caledonia": "New Caledonia",
    "New Zealand": "New Zealand",
    "Oman": "Oman",
    "Netherlands": "Netherlands",
    "Pakistan": "Pakistan",
    "Palau": "Palau",
    "Palestine": "Palestine",
    "Panama": "Panama",
    "Papua New Guinea": "Papua New Guinea",
    "Paraguay": "Paraguay",
    "Peru": "Peru",
    "French Polynesia": "French Polynesia",
    "Poland": "Poland",
    "Portugal": "Portugal",
    "Puerto Rico": "Puerto Rico",
    "Qatar": "Qatar",
    "United Kingdom": "United Kingdom",
    "Central African Republic": "Central African Republic",
    "Czech Republic": "Czech Republic",
    "Dominican Republic": "Dominican Republic",
    "South Sudan": "South Sudan",
    "RÃ©union": "RÃ©union",
    "Rwanda": "Rwanda",
    "Romania": "Romania",
    "Russia": "Russia",
    "Western Sahara": "Western Sahara",
    "Samoa": "Samoa",
    "American Samoa": "American Samoa",
    "Saint BarthÃ©lemy": "Saint BarthÃ©lemy",
    "Saint Kitts and Nevis": "Saint Kitts and Nevis",
    "San Marino": "San Marino",
    "Saint Martin (French part)": "Saint Martin (French part)",
    "Saint Pierre and Miquelon": "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines": "Saint Vincent and the Grenadines",
    "AscensiÃ³n y TristÃ¡n de AcuÃ±a": "AscensiÃ³n y TristÃ¡n de AcuÃ±a",
    "Saint Lucia": "Saint Lucia",
    "Sao Tome and Principe": "Sao Tome and Principe",
    "Senegal": "Senegal",
    "Serbia": "Serbia",
    "Seychelles": "Seychelles",
    "Sierra Leone": "Sierra Leone",
    "Singapore": "Singapore",
    "Sint Maarten": "Sint Maarten",
    "Syria": "Syria",
    "Somalia": "Somalia",
    "Sri Lanka": "Sri Lanka",
    "South Africa": "South Africa",
    "Sudan": "Sudan",
    "Sweden": "Sweden",
    "Switzerland": "Switzerland",
    "Suriname": "Suriname",
    "Svalbard and Jan Mayen": "Svalbard and Jan Mayen",
    "Swaziland": "Swaziland",
    "Tajikistan": "Tajikistan",
    "Thailand": "Thailand",
    "Taiwan": "Taiwan",
    "Tanzania": "Tanzania",
    "British Indian Ocean Territory": "British Indian Ocean Territory",
    "French Southern Territories": "French Southern Territories",
    "East Timor": "East Timor",
    "Togo": "Togo",
    "Tokelau": "Tokelau",
    "Tonga": "Tonga",
    "Trinidad and Tobago": "Trinidad and Tobago",
    "Tunisia": "Tunisia",
    "Turkmenistan": "Turkmenistan",
    "Turkey": "Turkey",
    "Tuvalu": "Tuvalu",
    "Ukraine": "Ukraine",
    "Uganda": "Uganda",
    "Uruguay": "Uruguay",
    "Uzbekistan": "Uzbekistan",
    "Vanuatu": "Vanuatu",
    "Venezuela": "Venezuela",
    "Vietnam": "Vietnam",
    "Wallis and Futuna": "Wallis and Futuna",
    "Yemen": "Yemen",
    "Djibouti": "Djibouti",
    "Zambia": "Zambia",
    "Zimbabwe": "Zimbabwe",


  }

  constructor(private servicePerson: RandomServiceService) {


  }

  ngOnInit() {
  }

  public getiinfo(event) {

    console.log(event.code);
    

    if (event.code == 'Space') {

     let numberRandom = this.colorrandom();
     console.log(numberRandom);
     console.log(this.colores[numberRandom]);

      this.color= this.colores[numberRandom];
     
     

      this.servicePerson.Personas(this.parametro, this.paisSeleccionado)
      
      
      .subscribe(
        (data: any) => {
        this.newPerson = data;

        console.log(this.newPerson);
        console.log(this.paisSeleccionado);
        

        this.valor = false


      },
      (err:HttpErrorResponse)=>{

        console.log(err);
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`,
          footer: '<a href>Why do I have this issue?</a>'
        })
        console.log(err.message);
        
      }
      
      
      )

  }
}

  public async flags() {
    const { value: pais } = await Swal.fire({
      title: 'Select field validation',
      input: 'select',
      inputOptions: this.pases,
      inputPlaceholder: 'Selecciona un país',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          resolve();
        })
      }
    })



    if (pais) {
      this.paisSeleccionado = pais;
    }
    else {
      this.paisSeleccionado == null;


    }
  }


  public colorrandom(){
    let numberRandom = Math.floor(Math.random() * ( 12 - 0) + 0);
    // console.log(numberRandom);

    return numberRandom;
    
  }



}
