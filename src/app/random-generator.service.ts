import { Injectable } from '@angular/core';

export class Random {
    randomSeed: number = 0;
    randomString: string;
    randomNumber: number;
    randomLength: number;

    constructor(randomLength: number) {
        this.randomLength = randomLength;
    }
}


@Injectable()
export class RandomConfig {
  __random: Random ;

  constructor(randomLength: number) {
    this.__random = new Random(randomLength);
    console.log("Called Constructor :"+randomLength);
  }

  public set randomString(str: string) { this.__random.randomString = str;}
  public set randomNumber(num: number) { this.__random.randomNumber = num;}
  public get randomLength(): number { return this.__random.randomLength; }
  public get random(): Random { return this.__random; }
}


@Injectable({
  providedIn: 'root'
})
export class RandomGeneratorService {
  randomSeed: number = 0;

  constructor(private randomConfig: RandomConfig) { 
    console.log("Called RandomGeneratorService constructor:"+randomConfig);
    console.log("Called RandomGeneratorService constructor:"+randomConfig.__random);
  }

  public get random(): Random { return this.randomConfig.random; }

  generate() {
    this.random.randomString =  Math.random().toString((this.randomSeed%(36-this.random.randomLength))+this.random.randomLength).slice(-(this.random.randomLength)) ;
    this.random.randomNumber =  Math.ceil(Math.random() * Math.pow(10,this.random.randomLength) * this.randomSeed)%Math.pow(10,this.random.randomLength);
  }

  mouseEventForSeed(e: MouseEvent) {
    if(e) {
      this.random.randomSeed += e.clientX + e.clientY +  e.screenX + e.screenY ;
    }
  }
}
