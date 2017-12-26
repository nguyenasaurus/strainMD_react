import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const key = 'O16DFIg';
const effectURL = 'strains/search/effect';
const strainDescURL = 'strains/data/desc';
const strainEffectsURL = 'strains/data/effects';
const strainFlavourURL = 'strains/data/flavors';


export default class StrainMD extends React.Component {
    constructor() {
        super();
        this.state = {

        }
        // binding
        this.search = this.search.bind(this);
        this.searchMedEffect = this.searchMedEffect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // axios request
    search(urlSection, query) {
        return axios({
            method: 'GET',
            url: `http://strainapi.evanbusse.com/${key}/${urlSection}/${query}`,
            dataResponse: 'json'
        }).then((result) => {
            return result
            console.log(result);
        })
    }

    // search by medicalEffect
    
    searchMedEffect(medEffect) {
        return this.search(effectURL, medEffect).then((i) => {
            return i
            console.log(i);
        })
    }
    // get strainDescription
    // get strainEffects
    // get strainFlavour

    handleSubmit(e) {
        e.preventDefault();
        console.log('hey');
        this.searchMedEffect('insomnia').then((i) => {
            console.log(i)
        })
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }

}