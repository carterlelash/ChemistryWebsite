<<<<<<< HEAD
import { Component,OnInit } from '@angular/core';
import * as Parse from 'parse';

Parse.initialize('FgJsXpqyLH852BBw5DnuccJOUXLMsysjccWNcBIC', 'h6TiU187AcIgJfQN9sRXildBMvUFiIiBmUP3GtTm');
(Parse as any).serverURL = 'https://parseapi.back4app.com/';
=======
import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}
>>>>>>> dafced626f6c19942e0d22926bef39bc0e18215a

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
<<<<<<< HEAD

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
=======
export class ResourcesComponent {
  testTags = [
    { name: 'Test Tag 1', selected: false },
    { name: 'Test Tag 2', selected: false },
    { name: 'Test Tag 3', selected: false }
  ];

  practiceTags = [
    { name: 'Practice Tag 1', selected: false },
    { name: 'Practice Tag 2', selected: false },
    { name: 'Practice Tag 3', selected: false }
  ];

  videoTags = [
    { name: 'Video Tag 1', selected: false },
    { name: 'Video Tag 2', selected: false },
    { name: 'Video Tag 3', selected: false }
  ];

  posterTags = [
    { name: 'Poster Tag 1', selected: false },
    { name: 'Poster Tag 2', selected: false },
    { name: 'Poster Tag 3', selected: false }
  ];

  dataSource = new MatTreeNestedDataSource<TreeNode>();
  treeControl = new NestedTreeControl<TreeNode>(node => node.children);

  constructor() {
    const treeData: TreeNode[] = [
      {
        name: 'Parent Node',
        children: [
          { name: 'Child Node 1' },
          { name: 'Child Node 2' }
        ]
      }
    ];
    this.dataSource.data = treeData;
  }

  toggleTag(tag: any) {
    tag.selected = !tag.selected;
  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;
>>>>>>> dafced626f6c19942e0d22926bef39bc0e18215a
}



