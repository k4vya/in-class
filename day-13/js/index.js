// Main.js file
'use strict';

// Data: a group of people
const PEOPLELIST = [
    { name: "Jacob", interest: "Board Games", location: "Edmonds" },
    { name: "Vishank", interest: "Music", location: "Seattle" }, 
    {name: "Elizabeth", interest: "Books", location: "Woodinville"}, 
    {name: "Kavya", interest:"Beer", location: "Kirkland"}
];

// Class for an individual person
class Person extends React.Component {
    render() { 
        return ( // always returns a single element. sometimes a wrapper div 
            <div class="person">
                <p> Hello, my name is {this.props.name} and I enjoy {this.props.interest}. </p>
                <p> I am located in {this.props.location}!</p>
            </div>
        );
    }
}
// Class to represent a group of people
class People extends React.Component { 
    render() { 
        return(
            //map all of the people into a person obj. 
            this.props.group.map((d)=> { 
                return <Person key={d.name} name={d.name} interest={d.interest} location={d.location}/>
            })
        )
    }
}

// Render your component in the `main` section
ReactDOM.render(
    <People group={PEOPLELIST} />, // thing we want to render
    document.querySelector('main') //where we want it to be rendered.
);
