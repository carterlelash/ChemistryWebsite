import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
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
}
