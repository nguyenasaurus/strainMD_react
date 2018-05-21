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
            selectedStrain: ''
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

    handleChange() {
        console.log()
    }
    handleSubmit(e) {
        e.preventDefault();
        // prop selectedSymptom from childState
        this.searchMedEffect(this.state.selectedSymptom).then((i) => {
            console.log(i)
        })
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <SymptomSelector />
                <input type="submit" value="submit"/>
            </form>
        )
    }

}

class SymptomSelector extends React.Component {
    constructor() {
        super();
        this.state = {
            symptoms: {
                depression: `Depression`,
                insomnia: `Can't sleep`,
                pain: `Pain`,
                stress: `Stress`,
                cramps: `Cramps`,
                hungry: `Lack of Appetite`,
                nausea: `Nausea`,
                fatigue: `Fatigue`,
                headache: `Headache/Migraines`,
                inflammation: `Inflammation`,
                spasticity: `Muscle Spasms/Spasticity`,
                seizures: `Seizures`
                }
            ,
            selectedSymptom: ''
        }
        this.toggleChange = this.toggleChange.bind(this);
    }

    toggleChange(e) {
        console.log(e.target.value)
    }

    render() {
        return (

            <ul className="symptoms">
                {Object.keys(this.state.symptoms).map((key,i) => {
                    return <li key={i}><input type="checkbox" name ="medSymptom" id={key} value={key} onChange={this.toggleChange}/><label htmlFor={key}>{this.state.symptoms[key]}</label></li>
                })}
            </ul>


        )
    }
}