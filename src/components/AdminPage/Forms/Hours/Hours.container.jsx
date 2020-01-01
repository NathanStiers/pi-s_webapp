import React from "react";
import Hours from './Hours'

class HoursContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            pis: [],
            pi: {
                _id:"",
                prenom: "",
                nom: "",
                totem: "",
                timing: "",
            }
        };

        this.setExistingItemText = this.setExistingItemText.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    render() {
        console.log("render:", this.state.pis);
        return (
            <Hours
                pis={this.state.pis}
                pi={this.state.pi}
                setExistingItemText={this.setExistingItemText}
                updateItem={this.updateItem}
            />
        );
    }

    async componentDidMount() {
        this.loadItems();
    }

    loadItems() {
        console.log("hum")
        fetch('/api/users/listeUser')
            .then(response => response.json())
            .then(data => {
                if (data.error)
                    return alert("Error:" + data.error);

                this.setState({ pis: data });
            })
            .catch(err => console.error("[HoursContainer] Error when fetching users:", err));
    }

    setExistingItemText(itemId, newValue) {
        console.log("HoursContainer::setExistingItemText", itemId, newValue);
        this._updateItemProperties(itemId, {hours: newValue});
    }

    _updateItemProperties(itemId, newProperties) {
        //using https://github.com/immerjs/immer would be much more easier
        const newItems = this.state.pis.map((item) => {
            if (item._id !== itemId) return item; // this is not the item we care about, return unchanged
            return { 
                ...item,
                ...newProperties,
            };
        });
        this.setState({pis: newItems})
    }

    async updateItem(item_id) {
        console.log("test   ", item_id)
        // retrieve the item in the state based on the id
        const indexFound = this.state.pis.find(item => 
          item._id === item_id
        );
        console.log(indexFound.hours)
        try{
          console.log("GalleryContainer::updateItem :",item_id);
          const response = await fetch("/api/users/hours",{
            method: "POST", 
            body: JSON.stringify(indexFound), // data can be `string` or {object}!
            headers: {
              "Content-Type": "application/json"
            }         
            });
          const result = await response.json(); 
          if(result.error) 
            return alert("Error:" + result.error);
          }
          catch(err){
            console.error("updateItem : Error when fetching gallery API :", err);
            alert("Your item has not been updated in the DB. Error when contacting the API : "+ err);
          }     
        
      }    
}

export default HoursContainer;