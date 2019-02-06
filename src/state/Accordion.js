import React, {Component} from 'react';

export default class Accordion extends Component{
    static defaultProp = {
        sections: [{
            title: "", 
            content: ""}]
    }
    state = {
        currentClick: null
    }

    renderButtons(sections){
    
    const newVar = sections.map(el => {
         return (
         <li> 
            <button>{el.title}</button>
            <p>{el.content}</p>
        </li>
    )})

    return newVar;
    }
//     The accordion renders a <ul>, inside the ul will be a li element for each section. 
//     Each section's li should be a button containing the section's title.
// When a button is clicked, a p should be rendered below the button that was clicked 
// (inside the li) that displays the section's content. You can use conditional rendering to display this p with the section content.
// sections = [
//     {
//       title: 'Section 1',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     },
 render(){
     const {sections} = this.props;
     console.log({sections})
     return (
         <ul>
                 {this.renderButtons(sections)}
         </ul>
     )
 }

}