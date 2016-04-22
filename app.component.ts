import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    	<p>{{title}}</p>
		<input >
    `
})
export class AppComponent { 
	title = 'Tour of Heroes'
	hero = 'windstorm'
}
