import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import axios from 'axios';
import { response } from 'express';

@Injectable()
export class CountryService {
  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  async findAll() {
    try{
      const allCountryFormated = []
      //topdas los paises 
      const countries = await axios.get(`${process.env.URL_API}all`).then(response => response.data)

      for(let i = 0; i < countries.length ; i++){
        let country = {
          name: countries[i].name.official,
          population: countries[i].population,
          region: countries[i].region,
          capital: countries[i].capital ? countries[i].capital[0] : 'Not capital',
          img: countries[i].flags.svg
        }
        allCountryFormated.push(country)
      }

      return allCountryFormated
    }catch(e){
      throw new Error(e)

    }
  }

  async findOne(name: string) {
    try{
      console.log(`${process.env.URL_API}`)
      const allCountryFormated = []

      const country = await axios.get(`${process.env.URL_API}name/${name.toLowerCase()}`).then(response => response.data)
      for(let i = 0; i < country.length ; i++){
        let countr = {
          name: country[i].name.official,
          population: country.population,
          region: country[i].region,
          capital: country[i].capital ? country[i].capital[0] : 'Not capital',
          img: country[i].flags.svg,
          borders: country[i].borders,
          area:country[i].area,
          languages: Object.values(country[i].languages)[0],
          subregion:country[i].subregion,
          currencies:Object.values(country[i].currencies)[0]['name']
        }
        allCountryFormated.push(countr)
      }

      return allCountryFormated[0]
    }catch(e){
      throw new Error(e)
    }
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
