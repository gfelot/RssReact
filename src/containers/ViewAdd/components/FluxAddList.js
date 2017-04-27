import React from 'react';
import s from './fluxaddlist.css';

var FluxAddItems = React.createClass({
  render: function() {
    var fluxEntries = this.props.entries;
    var remove = this.props.remove;

    var listItems = fluxEntries.map(function(item) {
      return (
        <li key={item.key}>
          <span>{item.text}</span>
          <a data-key="{item.key}" className="remove-filter" onClick={remove.bind(null, item)}>x</a>
        </li>
      );
    }, this);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
});

var FluxAddList = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },
  addItem: function(e) {
    var itemArray = this.state.items;

    itemArray.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );

    this.setState({
      items: itemArray
    });

    this._inputElement.value = "";

    e.preventDefault();
  },
  removeItem: function(item, e){
    e.preventDefault();

    var items = this.state.items.filter(function(itm){
      return item.key !== itm.key;
    });

    this.setState({ items: items });
  },
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                   placeholder="Ajouter un flux RSS">
            </input>
            <button type="submit">Ajouter</button>
          </form>
        </div>
        <FluxAddItems entries={this.state.items} remove={this.removeItem}/>
      </div>
    );
  }
});

export default FluxAddList
