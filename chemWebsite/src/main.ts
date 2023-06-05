import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//NEED TO ADD ACL TO MAKE IT SO THAT ONLY THIS APP CAN ACCESS THE DB

	platformBrowserDynamic().bootstrapModule(AppModule)
	  .catch(err => console.error(err));
	

	//database access reference

	//parse is for the back4app database
	import * as Parse from 'parse'

	//connects to the specific database and connects parse api (Parse as any) is for some reason required in order to change the URL
	Parse.initialize('FgJsXpqyLH852BBw5DnuccJOUXLMsysjccWNcBIC', 'h6TiU187AcIgJfQN9sRXildBMvUFiIiBmUP3GtTm');
	(Parse as any).serverURL = 'https://parseapi.back4app.com/';


	export async function add(listName:string, Id: string, Type: string, resourceName: string, Link: string, Approved:boolean){

		//extend gets db address of a specific class/list. Makes new class/list if it doesn't exist
		//can create and write to new classes because they are public by default
		//auth-only classes will require some ACL config stuff
		let list = Parse.Object.extend(listName);

		//creates new object in the class/list (adding data)
		let add = new list();

		//sets attributes of the data point (attribute, value)
		add.set("Id",Id.trim());
		add.set("Type",Type.trim().toLowerCase());
		add.set("resourceName",resourceName.trim().toLowerCase());
		add.set("Link",Link.trim());
		add.set("Approved",Approved);

		//pushes the change to the db
		add.save();
	}
	
	export async function read(listName: string, attribute: string, val: string|number){
		//references db list/class for reading later
		let list = Parse.Object.extend(listName);

		//reader for db
		let query = new Parse.Query(list);

		//primes Parse.Query object to find all objects that have an attribute value that is the same as the input parameters
		query.equalTo(attribute,val);

		//query.find returns Parse.object[], in this case, it pipes into the first function of the then
		//.then returns a promise object that takes one or two functions. Runs 1st one if promise resolved (parameter will be array of Parse.object). Runs 2nd if promise rejected
		let parseObjects: any[] = [];
		query.find()
			.then((results)=>{
				for(let a = 0;a<results.length;a++){
					//implement process to move into to frontend here using results[a].get(attributeName:string)
				}
			}).catch((error)=>{
				console.log(error);
			})
	}
	//how to enable top-level await?


	//adds value to database in class Links with Id val 2, resourceName val and Link val
	//add("Links","2","video","Never Gonna Give You Up","https://www.youtube.com/watch?v=dQw4w9WgXcQ",false);	
	
	//saved some useful stuff in bookmarks to help with ACL and querying + custom object id


	/* notes for arrow notation

		function name(input1,input2){
			[code]
			return input1+input2;
		}

		is the same as

		let name = (input1,input2) => {
			[code]
			return input1+input2;
		}

		or

		let name = (input1,input2) => input1 + input2;

		expression after the arrow in single line is assumed to be returned;




	*/
export{}