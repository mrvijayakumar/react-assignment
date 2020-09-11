import '@testing-library/jest-dom'
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import ModelWindow from './index';


const props = {
    "open": "004",
    "data": {
      "name": "Afghanistan",
      "topLevelDomain": [
        ".af"
      ],
      "alpha2Code": "AF",
      "alpha3Code": "AFG",
      "callingCodes": [
        "93"
      ],
      "capital": "Kabul",
      "altSpellings": [
        "AF",
        "Afġānistān"
      ],
      "region": "Asia",
      "subregion": "Southern Asia",
      "population": 27657145,
      "latlng": [
        33,
        65
      ],
      "demonym": "Afghan",
      "area": 652230,
      "gini": 27.8,
      "timezones": [
        "UTC+04:30"
      ],
      "borders": [
        "IRN",
        "PAK",
        "TKM",
        "UZB",
        "TJK",
        "CHN"
      ],
      "nativeName": "افغانستان",
      "numericCode": "004",
      "currencies": [
        {
          "code": "AFN",
          "name": "Afghan afghani",
          "symbol": "؋"
        }
      ],
      "languages": [
        {
          "iso639_1": "ps",
          "iso639_2": "pus",
          "name": "Pashto",
          "nativeName": "پښتو"
        },
        {
          "iso639_1": "uz",
          "iso639_2": "uzb",
          "name": "Uzbek",
          "nativeName": "Oʻzbek"
        },
        {
          "iso639_1": "tk",
          "iso639_2": "tuk",
          "name": "Turkmen",
          "nativeName": "Türkmen"
        }
      ],
      "translations": {
        "de": "Afghanistan",
        "es": "Afganistán",
        "fr": "Afghanistan",
        "ja": "アフガニスタン",
        "it": "Afghanistan",
        "br": "Afeganistão",
        "pt": "Afeganistão",
        "nl": "Afghanistan",
        "hr": "Afganistan",
        "fa": "افغانستان"
      },
      "flag": "https://restcountries.eu/data/afg.svg",
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation",
          "otherAcronyms": [],
          "otherNames": []
        }
      ],
      "cioc": "AFG"
    }
  };
test('render correctly' , () => {
    render(<ModelWindow  {...props}  />)
})


