export enum ThingsId{
    FOODS = 0,
    EDUCATION_MATERIALS,
    DRESSES,
    OTHERS

}
export enum ThingsName{
    FOODS = 'Foods',
    EDUCATION_MATERIALS = 'Education Materials',
    DRESSES = 'Dresses',
    OTHERS = 'Others'

}

export interface AbstractThings{
    id: number
    name: string;
    description: string;
    img: string;
}

export class Things implements AbstractThings{
    id: number;
    name: string;
    description: string;
    img: string;

    constructor(id, name, description, img){
       this.id = id;
       this.name = name;
       this.description = description;
       this.img = img;
    }
}

export class ThingsProducer {
    _THINGS: Things[] = []; 
    
    constructor(){ 
        this._THINGS = this.formDatas(); 
      }

      formDatas(){

            const foodDescription =` Food is very important thing in the world by sharing the food 
            it will be very important for peoples. So  if you would like to share or get click here`;

            const educationMaterials = `Some of the  Education things are very expensive. most of the people 
            struggle for buy the books and things . May be we have that but we dont know how do give that 
            we help you. you can get and share things here.`;

            const dresses = `if you would like to get the dresses and share it you can click here. may 
            be your dresses are useless in your room .So you can share it here or share it at any way 
            dont wast that things`;

            const others = `if you want to get or share anything apart from above mentioned click here.`



          const things: Things[] = [
              new Things(ThingsId.FOODS, ThingsName.FOODS,foodDescription , ''),
              new Things(ThingsId.EDUCATION_MATERIALS, ThingsName.EDUCATION_MATERIALS, educationMaterials, ''),
              new Things(ThingsId.DRESSES, ThingsName.DRESSES, dresses,''),
              new Things(ThingsId.OTHERS, ThingsName.OTHERS, others, ''),
          ]

          return things;
      }
      
      static getThings(){
          const obj = new ThingsProducer();
          return obj._THINGS;
      }
}