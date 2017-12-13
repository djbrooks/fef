import React from 'react';
import ReactDOM from 'react-dom';

const myRoot = document.getElementById('root');

class L01Proj1 extends React.Component {
    render() {
        let lessonDesc = (
            <div>
            <h2>{this.props.name}</h2>
            <p>Based on the following usage of the TodoList component,<br/>
            write the component using the class syntax. Your component<br/>
            should have proptypes for all of its props.</p>
            </div>
        );
        //        return (<h2>{this.props.name}</h2>
        return (<div>{lessonDesc}</div>);
    }
}

class First extends React.Component {
    render() {
        const data =[{"name":"Waldo"},{"name":"Albert"}];
        var listItems = data.map(function(d, idx){
            return (<li key={idx}>{d.name}</li>)
        })
        console.log(listItems);
        return (
            <div>
            <h3>First Name Exercise</h3>
            <ul>
            {listItems}
            </ul>
            </div>
        );
    }
}
/*
    <TodoList title="Student todo" items={['Sign up for code review', 'Finish TodoList component', 'Get lots of sleep']}/>
    */

class ToDoList extends React.Component {
    render() {
        let items=[{'desc':'Sign up for code review'}, {'desc':'Finish TodoList component'}, {'desc':'Get lots of sleep'}];
        let itemsList = items.map(function(item, i){
            return <li key={i}>{item.desc}</li>
        })
        return(
            <div>
            <h3>{this.props.name} {this.props.title}</h3>
            <ul>{itemsList}</ul>
            </div>
        );
    }
};

/*
*/

class Hello extends React.Component {
    render() {
        return (<div> <h1>Hello, {this.props.name}!</h1> </div>);
    }
}
/*
 *  L04 HO_proj1
 */
class L04Proj1 extends React.Component {
    render() {
        let lessonDesc = (<div>
            <h2>{this.props.name}</h2>
            <p>Modify the List component to use shouldComponentUpdate so
            that when duplicate props<br/> are provided, the component does not
            re-render.</p>
            <p>You can use the 1 and 2 keys on your keyboard to change the
            props being passed into the List.<br/>Pressing the same key multiple
            times currently re-renders but after you add<br/>
            shouldComponentUpdate it should not.</p>
            </div>);
        return (<div>{lessonDesc}</div>);
    }
}

class L04List extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        // Will return TRUE if items are DIFF: render NEW list.
        // Will return FALSE if items are the same: don't render.
        return (nextProps.items !== this.props.items);
    }
    render() {
        // should not happen if the exact same props are provided
        // a second time
        console.log("List's render SHOULD NOT FIRE on repeat of " + this.props.items);
        const list = this.props.items.map(item => (<li key={item}>{item}</li>));
        return (
            <div>
            <h3>Which List should print here: {this.props.items}</h3>
            <ul>
            {list}
            </ul>
            </div>
        );
    }
}

const L04List1Items = ['Eggs', 'Bread', 'Artisinal cheese'];
const L04List2Items = ['Trains', 'Planes', 'Automobiles'];

const render = (items) => {
    console.log("Outer render function, First time through...");
    ReactDOM.render( <div>
        <L05Proj1 name='FEF L05 Proj1'/>
        <L05Proj1Work />
        <L05Proj2 name='FEF L05 Proj2'/>
        <L05Proj2Work />
        <L04Proj1 name='FEF L04 Proj1'/>
        <L04List items={items}/>
        {items}
        <L01Proj1 name='FEF L01 Proj1'/>
        <ToDoList name="Student" title='ToDo List'/>
        <First />
        <Hello name="Nikki"/>
        </div>, myRoot
    );
}

document.addEventListener('keydown', event => {
    // this checks if the 1 key is pressed
    if (event.code === 'Digit1') {
        render(L04List1Items);
    }
    // this checks if the 2 key is pressed
    //  render(L04List2Items);
    else if (event.code === 'Digit2') {
        render(L04List2Items);
    }
});

/*
 *  L05 HO_proj1
 */

class L05Proj1Work extends React.Component {
    render() {
        const l05Arr = [
            {'name':'chevy', 'count': 2}
            , {'name':'ford', 'count': 5}
            , {'name':'ford', 'count': 4}
            , {'name':'ford', 'count': 3}
            , {'name':'ford', 'count': 200}
            , {'name':'ford', 'count': 332}
            , {'name':'ford', 'count': 88}
            , {'name':'acura', 'count': 3}
            , {'name':'honda', 'count': 16}
        ];

        const l05NewArrFilter = [];

        for(let i= 0, l = l05Arr.length; i< l; i++){
            if(l05Arr[i].name === 'ford' ){
                l05NewArrFilter.push(l05Arr[i]);
            }
        };

        // How to code a filter the OLD way...
        //        function isModel(model) {
        //            return model.name === 'ford';
        //        };

        var renderOut = (l05NewArrFilter.map((vehicle,i) => (
            <div key={i}>{i}-name: {vehicle.name} count: {vehicle.count} </div>
        )
        ));

        var l05ArrowFilter = l05Arr.filter((l05Arr) => l05Arr.name ==='ford');

        //            <p>old filter results: {renderOut}<br/>
        console.log('old filter results:',l05NewArrFilter);
        console.log('2nd old filter results:',renderOut);
        console.log('NEW filter results:',l05ArrowFilter);
        return(
            <div>
            <p>old filter results: <br/></p>
            <div>{renderOut}</div>
            <p>NEW filter results with arrow function and .filter:
            <br/></p>
            {l05ArrowFilter.map((vehicle,i) => <div key={i}> {i}-name: {vehicle.name}  count: {vehicle.count}</div>)}
            </div>
        );
    }
}

class L05Proj1 extends React.Component {
    render() {
        let lessonDesc = (
            <div>
            <h2>{this.props.name}</h2>
            <p> 
            DJB DJBHERE TAYLOR HOW TO MAKE AN IN PAGE LINK<br/>
            Convert the given JavaScript into 2015 syntax using an
            arrow function and filter.
            </p>
            </div>
        );
        return (<div>{lessonDesc}</div>);
    }
}

/*
 *  L05 HO_proj2
 */

class L05Proj2Work extends React.Component {
    render() {
        const arr = ['Bill', 'Joe', 'Emily', 'Andrea']
        const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

        function addNewStudent(array, newArr) {
            for(let i = 0; i < newArr.length; i++) {
                array.push(newArr[i]);
            }
        }

        const arrOrig =[...arr];
        const arrNew =[...arr, ...newStudents];
        addNewStudent(arr, newStudents);

        return(
            <div>
            <div>original array: {arrOrig}<br/></div>
            <p>old style array combine: {arr}</p>
            <p>NEW array combine with spread ...: {arrNew}:</p>
            <pre>const arrNew =[...arr, ...newStudents];</pre>
            <div>{arrNew}</div>
            </div>
        );
    }
}

class L05Proj2 extends React.Component {
    render() {
        let lessonDesc = (<div>
            <h2>{this.props.name}</h2>
            <p> 
            Given the function, use the ES2015 we covered to combine the
            two arrays.
            </p>
            </div>);
        return (
            <div>
            {lessonDesc}
            </div>
        );
    }
}

render(L04List1Items);
