import { Component,OnInit } from '@angular/core';
import * as Parse from 'parse';

Parse.initialize('FgJsXpqyLH852BBw5DnuccJOUXLMsysjccWNcBIC', 'h6TiU187AcIgJfQN9sRXildBMvUFiIiBmUP3GtTm');
(Parse as any).serverURL = 'https://parseapi.back4app.com/';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})

export class ResourcesComponent implements OnInit{
	ngOnInit(){
		let htmlList = document.getElementById("sourcesList");
		let parseClass = Parse.Object.extend("Links");
		let parseQuery = new Parse.Query(parseClass);
		parseQuery.equalTo("Approved","True");
		
		parseQuery.find()
			.then((results)=>{
				
				for(let a = 0;a<results.length;a++){
					let newLi = document.createElement("li");
					let newA = document.createElement("a");
					
					newA.href = results[a].get("Link");
					newA.title = results[a].get("resourceName");
					
					console.log(results[a].get("Link"));
					
					newA.appendChild(document.createTextNode(results[a].get("resourceName")));
					newLi.appendChild(newA);
					htmlList!.appendChild(newLi);
				}
				
			})
			.catch((error)=>{
				console.log(error);
			})
	}
}



